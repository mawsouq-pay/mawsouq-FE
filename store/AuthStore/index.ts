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
    login: (tokens: { accessToken: string; refreshToken: string }) => void;
    register: (tokens: { accessToken: string; refreshToken: string }) => void;
    logout: () => void;
    renewSession: (accessToken: string, refreshToken: string) => void;
    user: User | null;
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

    renewSession: (accessToken: string, refreshToken: string) => {
        console.log("----------------SAVING NEW TOKENS ------------------");

        Cookies.set("refreshToken", refreshToken, { expires: 1 });

        set({
            isLoggedIn: true,
            accessToken: accessToken,
            isSetUpLoading: false,
        });

        apiClient.defaults.headers["x-auth-token"] = accessToken;
    },

    login: ({ accessToken, refreshToken }) => {
        console.log("----------------LOGGING IN (STORE) ------------------");

        Cookies.set("refreshToken", refreshToken, { expires: 7 });

        set({
            isLoggedIn: true,
            accessToken,
        });

        apiClient.defaults.headers["x-auth-token"] = accessToken;
    },

    register: ({ accessToken, refreshToken }) => {
        console.log("----------------REGISTER (STORE)  ------------------");

        Cookies.set("refreshToken", refreshToken, { expires: 1 });

        set({
            isLoggedIn: true,
            accessToken,
        });

        apiClient.defaults.headers["x-auth-token"] = accessToken;
    },

    logout: () => {
        console.log("----------------LOGGING OUT (STORE) ------------------");

        Cookies.remove("refreshToken");

        set({
            isLoggedIn: false,
            accessToken: null,
            isSetUpLoading: false,
        });

        delete apiClient.defaults.headers["x-auth-token"];
    },


}));

export default useAuthStore;
