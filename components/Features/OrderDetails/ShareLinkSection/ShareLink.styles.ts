import { colors } from "@/constants/theme";
import styled from "styled-components";

export const LinkSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	border: 2px solid ${colors.blue};
	border-radius: 10px;
	padding: 15px;
	gap: 10px;
	color: ${colors.darkGray};
	background-color: ${colors.lightGray};
`;

export const ShareIcon = styled.span`
	margin-right: 8px;
`;
export const Tooltip = styled.div`
	position: fixed;
	background-color: #333;
	color: white;
	font-size: 12px;
	padding: 6px 8px;
	border-radius: 4px;
	transform: translate(-50%, -100%);
	pointer-events: none;
	z-index: 1000;
	white-space: nowrap;
`;
