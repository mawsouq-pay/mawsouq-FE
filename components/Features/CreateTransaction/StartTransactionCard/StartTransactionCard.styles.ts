import { colors } from "@/constants/theme";
import styled from "styled-components";

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 850px;
	margin: 30px auto;
	/* background-color: ${colors.white}; */
	border-radius: 8px;
	/* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.09); */
	//height: 810px;
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex: 1;
	height: 100%;
	width: 100%;
	flex-direction: column;
`;
