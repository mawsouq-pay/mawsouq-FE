import styled from "styled-components";
import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";

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

	${media.below925`
		 gap:15px;
  	`}
`;
export const ItemWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;
	width: 100%;
	padding-bottom: 8px;
`;

export const LabelValue = styled.div`
	display: flex;
	flex: 1;
`;
export const TextValue = styled.div`
	display: flex;
	flex: 1;
`;
export const ColumnDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding-bottom: 20px;
`;

export const RowDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
