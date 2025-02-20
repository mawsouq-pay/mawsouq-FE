import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";
import styled from "styled-components";

export const LinkSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: fit-content;
	border-radius: 8px;
	padding: 20px 15px;
	margin-top: 20px;
	gap: 15px;
	color: ${colors.lightBlack};
	flex-direction: column;

	${media.below925`
	margin-bottom:40px;
	border: 1px solid #2A75D4;

 	 `}
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
