import React from "react";
import { MainButton, MainWrapper } from "./CTA.styles";
import MSText from "@/components/Shared/MSText";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { useAuthStore } from "@/store";
import { clientRoutes } from "@/routes";
import router from "next/router";
import MSButton from "@/components/Shared/MSButton";
import { colors } from "@/constants/theme";

const CTA = () => {
	const { locale } = useLocaleStore();
	const { isLoggedIn } = useAuthStore();
	const text = textTr(locale);
	return (
		<MainWrapper>
			<MSText
				fontSize="28px"
				mobileFontSize="20px"
				color="#222"
				fontWeight="bold"
			>
				{text.becomeAMawsouqSeller}
			</MSText>
			<MSText
				fontSize="25px"
				mobileFontSize="18px"
				color="#222"
				style={{ marginTop: 5 }}
			>
				{text.designedForBoth}
			</MSText>
			<MSButton
				onClick={() => {
					if (isLoggedIn) {
						router.push(clientRoutes.startTransaction);
					} else {
						router.push(clientRoutes.login);
					}
				}}
				title={text.startTransaction}
				style={{ backgroundColor: colors.white }}
				fontColor={colors.black}
			/>
		</MainWrapper>
	);
};

export default CTA;
