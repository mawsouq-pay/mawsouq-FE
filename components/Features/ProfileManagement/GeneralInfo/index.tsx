import MSText from "@/components/Shared/MSText";
import React from "react";
import { colors } from "@/constants/theme";
import { useAuthStore } from "@/store";
import { GeneralInfoSection, InfoItem } from "./GeneralInfo.styles";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";

const GeneralInfo = () => {
	const { user } = useAuthStore();
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	return (
		<GeneralInfoSection>
			<MSText fontSize="20px" fontWeight="bold" color={colors.black}>
				{text.generalInformation}
			</MSText>
			<InfoItem>
				<MSText fontSize="16px" fontWeight="500" color={colors.gray}>
					{text.fullName}
				</MSText>
				<MSText fontSize="16px" fontWeight="bold">
					{user?.name || "N/A"}
				</MSText>
			</InfoItem>
			<InfoItem>
				<MSText fontSize="16px" fontWeight="500" color={colors.gray}>
					{text.email}
				</MSText>
				<MSText fontSize="16px" fontWeight="bold">
					{user?.email || "N/A"}
				</MSText>
			</InfoItem>
			<InfoItem>
				<MSText fontSize="16px" fontWeight="500" color={colors.gray}>
					{text.phoneNumber}
				</MSText>
				<MSText fontSize="16px" fontWeight="bold">
					{user?.phone || "N/A"}
				</MSText>
			</InfoItem>
		</GeneralInfoSection>
	);
};

export default GeneralInfo;
