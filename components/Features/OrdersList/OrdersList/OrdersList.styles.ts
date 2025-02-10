import { colors } from "@/constants/theme";
import styled from "styled-components";

export const HomePageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;
export const RowDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 100px;
`;

export const StyledButton = styled.button`
	display: flex;
	align-self: center;
	justify-content: center;
	align-items: center;
	background-color: ${colors.buttonGreenBackground};
	color: white;
	padding: 15px 25px;
	border: none;
	cursor: pointer;
	border-radius: 8px;

	&:hover {
		background: ${colors.buttonGreenHover};
	}
`;
export const EmptyStateWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 40px;
	text-align: center;
	background-color: #f9f9f9;
	border-radius: 8px;
	margin-top: 20px;
	gap: 15px;
`;
