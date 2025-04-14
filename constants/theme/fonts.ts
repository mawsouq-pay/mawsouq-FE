// styles/fonts.ts
import { Inter } from "next/font/google";
import { Fustat } from "next/font/google";

export const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const cairo = Fustat({
	subsets: ["arabic"],
	variable: "--font-fustat",
	display: "swap",
});
