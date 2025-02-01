import { colors } from "@/constants/theme";
import styled from "styled-components";

// export const MainWrapper = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	max-width: 850px;
// 	margin: 0 auto;
// 	background-color: ${colors.white};
// 	border-radius: 20px;
// `;
export const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 850px;
	margin: 0 auto;
	background-color: ${colors.white};
	border-radius: 8px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.09);
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
	margin-top: 30px;
`;
