import styled from "styled-components";
import { colors } from "@/constants/theme";

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${colors.white};
	flex: 1;
	border-radius: 20px;
	padding: 20px;
	gap: 30px;
`;

export const MessageDiv = styled.div`
	border-radius: 8px;
	padding: 20px;
	display: flex;
	text-align: center;
	align-items: center;
	border: 1px solid ${colors.gray22};
`;
