import { create } from "zustand";

interface LocaleStore {
    locale: string;
    setLocale: (locale: string) => void;
}


export const useLocaleStore = create<LocaleStore>((set) => ({
    locale: (() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("locale") || "en";
        }
        return "en";
    })(),
    setLocale: (locale) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("locale", locale);
        }
        set({ locale });
    },
}));