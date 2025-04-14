// styles/fonts.ts
import { Inter } from "next/font/google";
import { Cairo } from "next/font/google";

export const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const cairo = Cairo({
	subsets: ["arabic"],
	variable: "--font-cairo",
	display: "swap",
});
