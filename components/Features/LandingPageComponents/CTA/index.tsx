import React from "react";
import { MainButton, MainWrapper } from "./CTA.styles";
import MSText from "@/components/Shared/MSText";
import ContactForm from "../ContactUs/ContactForm";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { useAuthStore } from "@/store";
import { clientRoutes } from "@/routes";
import router from "next/router";

const CTA = () => {
	const { locale } = useLocaleStore();
	const { isLoggedIn } = useAuthStore();
	const text = textTr(locale);
	return (
		<MainWrapper>
			<MSText fontSize="40px" color="#222" fontWeight="bold">
				Ready to simplify your_____deals?{" "}
			</MSText>
			<MSText fontSize="1rem" color="#222" fontWeight="600">
				Designed for both sellers and buyers. Start now and build trust with
				every transaction.
			</MSText>
			<MainButton
				onClick={() => {
					if (isLoggedIn) {
						router.push(clientRoutes.startTransaction);
					} else {
						router.push(clientRoutes.login);
					}
				}}
			>
				{text.startTransaction}
			</MainButton>
		</MainWrapper>
	);
};

export default CTA;
