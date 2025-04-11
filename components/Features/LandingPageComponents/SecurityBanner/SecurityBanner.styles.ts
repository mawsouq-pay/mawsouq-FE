import styled from "styled-components";
import { colors } from "@/constants/theme";

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fafafa;
	padding: 12px 24px;
	border-radius: 8px;
	gap: 16px;
	flex-wrap: wrap;
	margin-top: 30px;
`;

export const Section = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const IconsRow = styled.div`
	display: flex;
	gap: 24px;
	flex-wrap: wrap;
`;

export const Feature = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
	color: ${colors.gray700};
	font-size: 14px;
`;
