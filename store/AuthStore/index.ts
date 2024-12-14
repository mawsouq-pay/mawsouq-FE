import { create } from "zustand";
import { clientRoutes } from "@/routes";
import apiClient from "@/client/apiClient";

export interface AuthStore {
    isLoggedIn: boolean;
    accessToken: string | null;
    refreshToken: string | null;
    isSetUpLoading: boolean;
    setUpApp: () => Promise<void>;
    login: (tokens: { accessToken: string; refreshToken: string }) => void;
    logout: () => void;
    getAccessToken: () => string | null;
    renewSession: (accessToken: string, refreshToken: string) => void
}

export const useAuthStore = create<AuthStore>((set, get) => ({
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null,
    isSetUpLoading: true,

    setUpApp: async () => {
        try {
            console.log("-------ENTERING SET UP-------")
            set({ isSetUpLoading: true });

            const refreshToken = get().refreshToken;

            if (!refreshToken) {
                console.log("---------REFRESH TOKEN DOES NOT EXIST-----")
                set({ isLoggedIn: false, isSetUpLoading: false });
                return;
            }
            console.log("------USING REFRESH TOKEN TO GET NEW ACC AND REFRESH TOKEN-------")
            const res = await apiClient.post('/auth/refresh', { refresh_token: refreshToken });
            if (!res || !res.data) {
                console.log("----------GENERATION OF TOKENS FAILED--------")
                set({ isLoggedIn: false, isSetUpLoading: false });
                return;
            }

            const { access_token, refresh_token } = res.data;
            get().renewSession(access_token, refresh_token);
        } catch (error) {
            set({ isSetUpLoading: false });

        }
    },

    renewSession: (accessToken: string, refreshToken: string) => {
        console.log("----------------SAVING NEW TOKENS ------------------")

        set({
            isLoggedIn: true,
            accessToken: accessToken,
            refreshToken: refreshToken,
            isSetUpLoading: false
        });
        apiClient.defaults.headers['x-auth-token'] = accessToken;

    },

    login: ({ accessToken, refreshToken }) => {
        set({
            isLoggedIn: true,
            accessToken,
            refreshToken,
        });
        apiClient.defaults.headers['x-auth-token'] = accessToken;

    },

    logout: () => {
        set({
            isLoggedIn: false,
            accessToken: null,
            refreshToken: null,
        });

    },

    getAccessToken: () => {
        return get().accessToken;
    },
}));

export default useAuthStore;
