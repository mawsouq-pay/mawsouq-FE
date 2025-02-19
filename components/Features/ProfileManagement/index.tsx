import React from "react";
import { colors } from "@/constants/theme";
import MSText from "@/components/Shared/MSText";
import { Container } from "./ProfileManagement.styles";
import GeneralInfo from "./GeneralInfo";
import UserPayoutMethods from "./UserPayoutMethods";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";

const ProfileManagement = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	return (
		<Container>
			<MSText
				fontSize="30px"
				fontWeight="bold"
				color={colors.black}
				style={{
					display: "inline-block",
					borderBottom: `3px solid ${colors.green}`,
					paddingBottom: "5px",
				}}
			>
				{text.profileManagement}
			</MSText>

			<div style={{ marginTop: 50 }}>
				<GeneralInfo />
			</div>

			<UserPayoutMethods />
		</Container>
	);
};

export default ProfileManagement;
