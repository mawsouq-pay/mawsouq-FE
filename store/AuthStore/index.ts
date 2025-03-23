import { create } from "zustand";
import { serverRoutes } from "@/routes";
import apiClient from "@/client/axiosClient";
import { User } from "@/types/authenticationTypes";
import Cookies from "js-cookie";

export interface AuthStore {
	isLoggedIn: boolean;
	accessToken: string | null;
	isSetUpLoading: boolean;
	setUpApp: () => Promise<void>;
	login: (
		tokens: { accessToken: string; refreshToken: string },
		user: User
	) => void;
	register: (
		tokens: { accessToken: string; refreshToken: string },
		user: User
	) => void;
	logout: () => void;
	renewSession: (accessToken: string, refreshToken: string) => void;
	user: User | null;
	setUserInfo: (accessToken: string) => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
	isLoggedIn: false,
	accessToken: null,
	isSetUpLoading: true,
	user: null,

	setUpApp: async () => {
		try {
			console.log("-------ENTERING SET UP-------");
			set({ isSetUpLoading: true });

			const refreshToken = Cookies.get("refreshToken");

			if (!refreshToken) {
				set({ isLoggedIn: false, isSetUpLoading: false });
				return;
			}

			const res = await apiClient.post(
				serverRoutes.regenerateTokens,
				{},
				{
					headers: {
						"x-refresh-token": refreshToken,
					},
				}
			);
			const new_access_token = res.headers["x-auth-token"];
			const new_refresh_Token = res.headers["x-refresh-token"];
			if (!new_access_token || !new_refresh_Token) {
				console.log("----------NO TOKENS FOUND --------");
				set({ isLoggedIn: false, isSetUpLoading: false });
				return;
			}

			get().renewSession(new_access_token, new_refresh_Token);
		} catch (error) {
			console.error("Set up failed:", error);
			set({ isSetUpLoading: false });
		}
	},

	renewSession: async (accessToken: string, refreshToken: string) => {
		console.log("----------------SAVING NEW TOKENS ------------------");

		Cookies.set("refreshToken", refreshToken, { expires: 1 });
		apiClient.defaults.headers["x-auth-token"] = accessToken;

		try {
			await get().setUserInfo(accessToken);
			set({
				isLoggedIn: true,
				accessToken: accessToken,
				isSetUpLoading: false,
			});
		} catch (error) {
			console.error("Failed to set user info:", error);

			set({
				isLoggedIn: false,
				accessToken: null,
				isSetUpLoading: false,
			});

			throw new Error("Failed to renew session: Unable to set user info");
		}
	},

	login: ({ accessToken, refreshToken }, user) => {
		console.log("----------------LOGGING IN (STORE) ------------------");

		Cookies.set("refreshToken", refreshToken, { expires: 7 });

		set({
			isLoggedIn: true,
			accessToken,
			user: user,
		});

		apiClient.defaults.headers["x-auth-token"] = accessToken;
	},

	register: ({ accessToken, refreshToken }, user) => {
		console.log("----------------REGISTER (STORE)  ------------------");

		Cookies.set("refreshToken", refreshToken, { expires: 1 });

		set({
			isLoggedIn: true,
			accessToken,
			user: user,
		});

		apiClient.defaults.headers["x-auth-token"] = accessToken;
	},

	logout: async () => {
		console.log("----------------LOGGING OUT (STORE) ------------------");
		const refreshToken = Cookies.get("refreshToken");
		const res = await apiClient.post(
			serverRoutes.regenerateTokens,
			{},
			{
				headers: {
					"x-refresh-token": refreshToken,
				},
			}
		);
		Cookies.remove("refreshToken");

		set({
			isLoggedIn: false,
			accessToken: null,
			isSetUpLoading: false,
		});

		delete apiClient.defaults.headers["x-auth-token"];
	},
	setUserInfo: async (accessToken: string) => {
		try {
			const res = await apiClient.get(serverRoutes.getUser, {
				headers: {
					"x-auth-token": accessToken,
				},
			});
			console.log("-----------SAVING USER DETAILS--------", res);
			if (res) {
				get().user = {
					_id: res.data.id,
					email: res.data.email,
					name: res.data.name,
					phone: res.data.phone,
					payoutOptions: res.data.payoutOptions,
				};
			}
		} catch (e) {
			console.log("---UNABLE TO SAVE USER DETAILS-----");
		}
	},
}));

export default useAuthStore;
