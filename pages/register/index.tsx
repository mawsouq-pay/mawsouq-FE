import React from "react";
import styled from "styled-components";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import useCustomBreakpoint from "@/helpers/screenSizes";
import RegisterCard from "@/components/RegisterCard";

const RegisterForm: React.FC = () => {
	const { isMobile } = useCustomBreakpoint();
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	return (
		<PageContainer>
			<GradientBackground style={{ height: isMobile ? "30%" : "75%" }}>
				<RegisterCard />
			</GradientBackground>
		</PageContainer>
	);
};
const GradientBackground = styled.div`
	background: linear-gradient(#1e1e1e, #2a75d4);
	display: flex;
	overflow: visible;
	justify-content: center;
	border-radius: 15px;
	box-sizing: border-box;
	z-index: 1;
	width: 100%;
`;
const PageContainer = styled.div`
	height: 100vh;
`;

export default RegisterForm;
