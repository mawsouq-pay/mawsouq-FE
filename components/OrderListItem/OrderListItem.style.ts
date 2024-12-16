import { colors } from "@/constants/theme";
import styled from "styled-components";

export const MainWrapper = styled.div`
	border-radius: 20px;
	/* width: 680px;
	height: 220px; */
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	justify-content: space-between;
	background-color: ${colors.white};
	flex: 1;
`;
export const ItemsContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
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
export const SellerContainer = styled.div`
	width: 100%;
	border-radius: 20px;
	padding: 8px;
	display: flex;
	align-items: center;
	justify-self: flex-end;
	background-color: ${colors.NameContainerBackground};
	justify-content: space-between;
`;
export const NameContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;
export const StatusContainer = styled.div`
	display: flex;
	padding: 16px;
	background-color: ${colors.white};
	border-radius: 16px;
`;
