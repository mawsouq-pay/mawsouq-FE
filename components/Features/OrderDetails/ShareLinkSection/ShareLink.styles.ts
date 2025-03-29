import { colors } from "@/constants/theme";
import styled from "styled-components";

export const LinkSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	border-radius: 10px;
	padding: 0px;
	gap: 10px;
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

export const CopyButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 10px;
	border: 1px solid gray;
	max-width: fit-content;
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0 2px 6px rgba(0, 0, 0.05, 0.1);
	flex-direction: column;
	gap: 20px;
`;
export const FlexRow = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	gap: 10px;
`;
