import { colors } from "@/constants/theme";
import styled from "styled-components";

export const MainWrapper = styled.div`
	background-color: ${colors.white};
	border-radius: 20px;
	padding: 22px 31px;
	display: flex;
	flex-direction: column;
	//gap: 20px;
`;

export const TitleWrapper = styled.div`
	display: flex;
	align-self: center;
	text-align: center;
`;
