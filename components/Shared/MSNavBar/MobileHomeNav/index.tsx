import React from "react";
import styled from "styled-components";
import { GlobeIcon } from "lucide-react";
import { MSLogo } from "@/assets/icons";
import { useLocaleStore } from "@/store";
import { localeEnum } from "@/store/LocaleStore";
import { colors } from "@/constants/theme";

const MobileHomeNav = () => {
	const { locale, setLocale } = useLocaleStore();
	const toggleLanguage = () => {
		setLocale(locale === localeEnum.en ? localeEnum.ar : localeEnum.en);
	};

	return (
		<Wrapper>
			<MSLogo width={110} height={40} fill={colors.green} />
			<GlobeIcon
				color={colors.lightBlack}
				size={20}
				style={{ cursor: "pointer" }}
				onClick={toggleLanguage}
			/>
		</Wrapper>
	);
};

export default MobileHomeNav;

const Wrapper = styled.header`
	padding: 5px 10px;
	position: sticky;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	top: 0;
	z-index: 50;
	background: ${colors.white};
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
`;
