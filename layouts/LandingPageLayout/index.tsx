import { colors } from "@/constants/theme";
import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
	//background-color: radial-gradient(circle, #2a75d4 0%, #1e1e1e 100%);
	/* padding: 20px clamp(5px, 2vw, 16px); */
	min-height: 100vh;
	/* background-color: ${colors.backgroundColor}; */
`;

interface LandingPageLayoutProps {
	children: React.ReactNode;
}

const LandingPageLayout: React.FC<LandingPageLayoutProps> = ({ children }) => {
	return (
		<>
			<StyledWrapper>{children}</StyledWrapper>
		</>
	);
};

export default LandingPageLayout;
