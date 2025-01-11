import { colors } from "@/constants/theme";
import styled from "styled-components";

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${colors.white};
	flex: 1;
	border-radius: 20px;
	padding: 25px;
	gap: 20px;
`;
export const RowDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
