import styled from "styled-components";
import { colors } from "@/constants/theme";

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	//background-color: ${colors.white};
	flex: 1;
	border-radius: 20px;
	gap: 15px;
`;

export const MessageDiv = styled.div`
	border-radius: 8px;
	padding: 15px;
	display: flex;
	align-items: center;
	border: 0.5px solid ${colors.buttonGreenHover};
`;

export const FlexRow = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-start;
	gap: 30px;
`;
