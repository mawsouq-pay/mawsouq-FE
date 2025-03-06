import { create } from "zustand";
export enum localeEnum {
	en = "en",
	ar = "ar",
}
interface LocaleStore {
	locale: localeEnum;
	setLocale: (locale: localeEnum) => void;
	isSideNavbarOpen: boolean;
	setIsSideNavbarOpen: (o: boolean) => void;
}

export const useLocaleStore = create<LocaleStore>((set) => ({
	locale: (() => {
		if (typeof window !== "undefined") {
			return (localStorage.getItem("locale") as localeEnum) || localeEnum.en;
		}
		return localeEnum.en;
	})(),
	setLocale: (locale) => {
		if (typeof window !== "undefined") {
			localStorage.setItem("locale", locale);
		}
		set({ locale });
	},
	isSideNavbarOpen: true,
	setIsSideNavbarOpen: (o: boolean) => {
		set({ isSideNavbarOpen: o });
	},
}));
