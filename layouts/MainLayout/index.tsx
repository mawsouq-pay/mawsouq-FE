import MSText from "@/components/Shared/MSText";
import { colors } from "@/constants/theme";
import { useLocaleStore } from "@/store";
import { localeEnum } from "@/store/LocaleStore";
import { GlobeIcon } from "lucide-react";
import React, { useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
	background-color: ${colors.backgroundColor};
	padding: 20px;
	min-height: 100vh;
	/* position: relative; */
`;

const LanguageToggle = styled.button`
	position: absolute;
	top: 15px;
	right: 15px;
	background: none;
	border: none;
	cursor: pointer;
	font-size: 20px;
	color: ${colors.green};
	display: flex;
	align-items: center;
	gap: 5px;
`;

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	const { locale, setLocale } = useLocaleStore();
	const toggleLanguage = () => {
		setLocale(locale === localeEnum.en ? localeEnum.ar : localeEnum.en);
	};
	const localeToShow = locale === localeEnum.en ? "العربية" : "English";

	return (
		<StyledWrapper>
			<LanguageToggle onClick={toggleLanguage}>
				<GlobeIcon size={22} />
				<MSText>{localeToShow.toUpperCase()}</MSText>
			</LanguageToggle>
			<div style={{ marginTop: 15 }}>{children}</div>
		</StyledWrapper>
	);
};

export default MainLayout;
