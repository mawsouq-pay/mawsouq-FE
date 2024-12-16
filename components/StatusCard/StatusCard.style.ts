import styled from "styled-components";
import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";

export const MainWrapper = styled.div`
	background-color: ${colors.white};
	border-radius: 16px;
	gap: 20px;
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	padding: 10px 16px 10px 24px;
	min-height: 80px;
	box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);

	${media.below925`
	min-height: 70px;

    `}
`;
export const FlexEnd = styled.div`
	margin-left: auto;
`;
