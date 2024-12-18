import { colors } from "@/constants/theme";
import styled from "styled-components";

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 750px;
	margin: 0 auto;
	background-color: ${colors.white};
	border-radius: 20px;
	//padding: 30px 30px 50px 30px;
`;
export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: center;
	text-align: center;
	margin-top: 35px;
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	margin-top: 20px;
`;
