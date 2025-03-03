import { colors } from "@/constants/theme";
import React from "react";
import styled from "styled-components";

const MSLogo = () => {
	return (
		<Logo
		// onClick={() =>
		// 	isLoggedIn && !isLandingPage && router.push(clientRoutes.homePage)
		// }
		>
			Mawsouq
		</Logo>
	);
};
const Logo = styled.div`
	justify-self: flex-start;
	border-radius: 100%;
	cursor: pointer;
	display: flex;
	align-items: center;
	font-size: 45px;
	font-weight: bold;
	color: ${colors.black};

	span {
		color: ${colors.green};
		font-style: italic;
	}
`;

export default MSLogo;
