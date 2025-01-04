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
	background-color: #31c48d;
	color: white;
	padding: 15px 25px;
	border: none;
	cursor: pointer;
	border-radius: 8px;

	&:hover {
		background: ${colors.buttonGreenHover};
	}
`;
