import { colors } from "@/constants/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	padding: 40px;
	max-width: 700px;
	margin: 0 auto;
	text-align: center;
`;

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

export const CopyButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 10px;
`;

export const ActionButtonWrapper = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	position: fixed;
	bottom: 20px;
`;

export const Tooltip = styled.div`
	position: absolute;
	background-color: ${colors.black};
	color: white;
	font-size: 12px;
	padding: 6px 8px;
	border-radius: 4px;
	transform: translate(-50%, -100%);
	pointer-events: none;
	z-index: 1000;
	white-space: nowrap;
`;
