import styled from "styled-components";
import { colors } from "@/constants/theme";

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${colors.white};
	flex: 1;
	border-radius: 20px;
	padding: 25px;
	gap: 20px;
`;

export const ItemsContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 15px;
`;

export const ItemWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;
	//width: 100%;
	padding-bottom: 8px;
	border-bottom: 1px solid ${colors.lightGray};
	padding: 10px 0;
`;

export const LabelValue = styled.div`
	display: flex;
	//flex: 1;
`;

export const TextValue = styled.div`
	display: flex;
	flex: 1;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
`;
export const BackButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: flex-end;
	background: transparent;
	border: 1px solid ${colors.buttonGreenBackground};
	color: black;
	padding: 15px 18px;
	cursor: pointer;
	border-radius: 8px;
	margin-top: 10px;

	&:hover {
		background: ${colors.buttonGreenHover};
	}
`;
