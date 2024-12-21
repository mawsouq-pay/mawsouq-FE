import { colors } from "@/constants/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
	padding: 40px;
	background-color: ${colors.white};
	border-radius: 12px;
	max-width: 700px;
	margin: 0 auto;
`;

export const ImageWrapper = styled.div`
	background-color: ${colors.lightGray};
	border-radius: 50%;
	padding: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LinkSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	border: 1px solid ${colors.lightGray};
	border-radius: 8px;
	padding: 10px 16px;
	margin-top: 20px;
	color: ${colors.lightBlack};
	cursor: pointer;

	&:hover {
		background-color: ${colors.backgroundHover};
	}
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
export const NavButton = styled.button`
	margin-top: 4px;
	padding: 10px 20px;
	background-color: ${colors.buttonGreenBackground};
	color: white;
	font-size: 14px;
	font-weight: bold;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: ${colors.buttonGreenHover};
	}
	&:focus {
		outline: none;
		box-shadow: 0 0 4px ${colors.buttonGreenHover};
	}
`;
