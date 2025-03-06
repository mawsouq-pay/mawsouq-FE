import { colors } from "@/constants/theme";
import styled from "styled-components";

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
	width: ${({ isOpen }) => (isOpen ? "240px" : "60px")};
	height: 100vh;
	background: ${colors.green};
	color: white;
	display: flex;
	flex-direction: column;
	position: fixed;
	left: 0;
	top: 0;
	padding: 10px;
	transition: width 0.3s ease-in-out;
	overflow: hidden;
`;

export const ToggleButton = styled.button`
	background: none;
	border: none;
	color: white;
	cursor: pointer;
	font-size: 24px;
	display: flex;
	align-items: center;
	padding: 10px;
`;

export const NavList = styled.ul`
	list-style: none;
	padding: 0;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const NavItem = styled.li<{ isOpen: boolean; isActive?: boolean }>`
	padding: 10px;
	border-radius: 5px;
	transition:
		background 0.3s,
		color 0.3s;
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	position: relative;

	&:hover {
		background: ${colors.buttonGreenHover};
	}

	background: ${({ isActive }) =>
		isActive ? `${colors.buttonGreenHover}` : "transparent"};

	svg {
		/* width: 22px;
		height: 22px; */
		transition: color 0.3s;
		color: ${({ isActive }) => (isActive ? colors.semiBlack : colors.white)};
	}

	span {
		text-decoration: none;
		color: white;
		font-size: ${({ isOpen }) => (isOpen ? "16px" : "0px")};
		white-space: nowrap;
		overflow: hidden;
		transition: opacity 0.3s ease-in-out;
		opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
	}
`;
