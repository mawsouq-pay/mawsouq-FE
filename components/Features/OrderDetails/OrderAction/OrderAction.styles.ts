import styled from "styled-components";
import { colors } from "@/constants/theme";

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	border-radius: 20px;
	gap: 15px;
	border: 2px solid ${colors.green};
	border-radius: 10px;
	padding: 20px;
	/* align-items: center; */
`;

export const MessageDiv = styled.div`
	border-radius: 8px;
	padding: 15px;
	display: flex;
	border: 1px solid ${colors.black};
	margin-top: 10px;
`;

export const FlexRow = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-start;
	gap: 30px;
`;
