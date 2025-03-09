import styled from "styled-components";
import { colors } from "@/constants/theme";

export const BottomNavContainer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 60px;
	background: ${colors.green};
	display: flex;
	justify-content: space-around;
	align-items: center;
	box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
	z-index: 1000;

	@media (min-width: 769px) {
		display: none;
	}
`;

export const NavItem = styled.button<{ isActive: boolean }>`
	background: none;
	border: none;
	color: ${({ isActive }) =>
		isActive ? colors.buttonGreenHover : colors.white};
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	border-radius: 50%;
	transition: color 0.3s ease-in-out;

	svg {
		width: 28px;
		height: 28px;
	}

	&:hover {
		color: ${colors.buttonGreenHover};
	}
`;
