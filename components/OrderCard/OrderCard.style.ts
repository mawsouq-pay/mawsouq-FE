import styled from "styled-components";
import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";

export const MainWrapper = styled.div`
	background-color: ${colors.white};
	border-radius: 16px;
	display: flex;
	flex-direction: row;
	align-items: center;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
	justify-content: flex-start;
	padding: 20px 35px;
	cursor: pointer;
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
	padding-bottom: 15px;
	border-bottom: 1px solid #eaeaea;
	text-align: center;
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
export const StatusDot = styled.span<{ color: string }>`
	height: 10px;
	width: 10px;
	border-radius: 50%;
	border: 2px solid ${({ color }) => color};
	background-color: transparent;
	display: inline-block;
	margin-right: 8px;
`;
export const MobileCardContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-top: 10px;
`;

export const FlexEnd = styled.div`
	display: flex;
	//margin-left: auto;
	align-items: center;
	margin-top: 12px;
	gap: 5px;
`;
