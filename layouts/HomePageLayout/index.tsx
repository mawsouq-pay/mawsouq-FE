import { colors } from "@/constants/theme";
import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
	background-color: ${colors.backgroundColor};
	padding: 20px clamp(30px, 8vw, 150px);
	min-height: 100vh;
`;

interface HomePageLayoutProps {
	children: React.ReactNode;
}

const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
	return <StyledWrapper>{children}</StyledWrapper>;
};

export default HomePageLayout;
