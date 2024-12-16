import styled from "styled-components";
import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";

export const MainWrapper = styled.div`
	background-color: ${colors.white};
	border-radius: 16px;
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;

	justify-content: flex-start;
	padding: 20px 35px;
	${media.below925`
    align-items: center;
	padding: 20px 20px;
    `}
`;
export const MobileCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;
	width: 100%;
`;

export const MobileCardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

interface StatusBadgeProps {
	backgroundColor?: string;
}

export const StatusBadge = styled.span<StatusBadgeProps>`
	background-color: ${({ backgroundColor }) => backgroundColor || colors.gray};
	padding: 4px 12px;
	border-radius: 16px;
	font-weight: bold;
`;

export const MobileCardContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	margin-top: 10px;
`;

export const FlexEnd = styled.div`
	display: flex;
	margin-left: auto;
	align-items: center;
	gap: 5px;
`;
