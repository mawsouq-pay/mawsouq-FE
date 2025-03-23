import React from "react";
import { MainButton, MainWrapper } from "./CTA.styles";
import MSText from "@/components/Shared/MSText";
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
			<MSText
				fontSize="30px"
				mobileFontSize="18px"
				color="#222"
				fontWeight="bold"
			>
				{text.becomeAMawsouqSeller}
			</MSText>
			<MSText fontSize="1rem" color="#222" fontWeight="600">
				{text.designedForBoth}
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
