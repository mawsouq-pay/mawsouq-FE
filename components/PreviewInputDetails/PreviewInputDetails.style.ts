import styled from "styled-components";
import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";

export const MainWrapper = styled.div`
	max-width: 750px;
	margin: 0 auto;
	background-color: ${colors.white};
	border-radius: 20px;
	padding: 30px 0px 50px 0px;
	${media.below925`
	padding: 30px 25px 50px 25px;
 	 `}
	display: flex;
	flex-direction: column;
	gap: 14px;
`;

export const ItemsContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 15px;
`;

export const ItemWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding-bottom: 8px;
	gap: 30px;
`;
export const LabelValue = styled.div`
	display: flex;
	width: 30%;
`;

export const TextValue = styled.div`
	display: flex;
	background-color: ${colors.lightGray};
	padding: 8px 12px;
	border-radius: 6px;
	flex: 1;
	white-space: normal;
	word-wrap: break-word;
	overflow-wrap: break-word;
	width: 80%;
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
