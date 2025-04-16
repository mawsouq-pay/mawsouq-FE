// styles/fonts.ts
import { Inter, Noto_Sans, Poppins, Roboto } from "next/font/google";
import { Cairo } from "next/font/google";

export const inter = Noto_Sans({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const cairo = Cairo({
	subsets: ["arabic"],
	variable: "--font-cairo",
	display: "swap",
});
