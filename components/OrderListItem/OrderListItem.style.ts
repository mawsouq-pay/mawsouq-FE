import { colors } from "@/constants/theme";
import styled from "styled-components";

export const MainWrapper = styled.div`
	border-radius: 16px;
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	justify-content: space-between;
	background-color: ${colors.white};
	//box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
	flex: 1;
`;

export const ItemsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
	width: 100%;
`;

export const ItemWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 12px;
	padding-bottom: 8px;
	border-bottom: 1px solid ${colors.lightGray};
`;

export const LabelValue = styled.div`
	display: flex;
	flex: 1;
	color: ${colors.gray};
	font-size: 14px;
`;

export const TextValue = styled.div`
	display: flex;
	flex: 1;
	font-weight: 600;
`;

export const SellerContainer = styled.div`
	width: 100%;
	border-radius: 12px;
	padding: 10px;
	display: flex;
	align-items: center;
	background-color: ${colors.NameContainerBackground};
	justify-content: space-between;
`;

export const NameContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const StatusBadge = styled.div<{ status: string }>`
	padding: 8px 12px;
	border-radius: 12px;
	font-size: 14px;
	font-weight: 600;
	color: ${colors.white};
`;
