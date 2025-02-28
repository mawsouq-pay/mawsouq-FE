import { colors } from "@/constants/theme";
import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
	background-color: ${colors.white};
	//padding: 20px;
	height: 100dvh;
`;

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return <StyledWrapper>{children}</StyledWrapper>;
};

export default MainLayout;
