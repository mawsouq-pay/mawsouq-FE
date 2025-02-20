import { colors } from "@/constants/theme";
import styled from "styled-components";

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${colors.lightGray};
	flex: 1;
	border-radius: 20px;
	gap: 20px;
	padding: 25px;
`;
export const RowDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
