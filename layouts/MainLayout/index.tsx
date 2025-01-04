import { colors } from "@/constants/theme";
import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
	background-color: ${colors.backgroundColor};
	padding: 20px;
	min-height: 100vh;
`;

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return <StyledWrapper>{children}</StyledWrapper>;
};

export default MainLayout;
