import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";
import { MenuIcon, X } from "lucide-react";

export const NavWrapper = styled.nav<{ isLandingPage: boolean }>`
	top: 0;
	/* padding-top: 12px; */
	z-index: 100;
	opacity: 0.8;
	display: flex;
	padding: 5px 64px;
	justify-content: center;
	align-items: center;
	background-color: ${colors.green};
	font-size: 1rem;
	position: sticky;
	${media.below925`
	height: 30px;
	padding:25px 20px;


 	 `}
`;

export const Sidebar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 14px;
	padding: 20px 20px;
`;

export const SidebarLink = styled(LinkS)`
	color: ${colors.black};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0;
	height: 100%;
	cursor: pointer;
	font-family: "Roboto";
	font-size: 18px;
	&.active {
		border-bottom: 4px solid #52ab98;
	}
	&:hover {
		color: #31c48d;
	}
	gap: 4px;
`;

export const LogoutButton = styled.button`
	margin-top: auto;
	background-color: ${colors.white};
	color: ${colors.black};
	font-weight: bold;
	padding: 8px;
	border: none;
	cursor: pointer;
	border-radius: 4px;

	&:hover {
		background-color: #244826;
	}
`;

export const NavbarContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

// export const NavLogo = styled(LinkR)`
// 	color: #000;
// 	justify-self: flex-start;
// 	cursor: pointer;
// 	font-size: 1.5rem;
// 	display: flex;
// 	align-items: center;
// 	margin-left: -5px;
// 	font-weight: bold;
// 	text-decoration: none;
// `;

export const NavMenu = styled.ul`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li``;

export const NavLinkss = styled(LinkS)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	color: ${colors.white};
	cursor: pointer;
	font-family: "Roboto";
	font-size: 14px;
	&.active {
		border-bottom: 4px solid #52ab98;
	}
	&:hover {
		color: black;
	}
`;
export const NavBtn = styled.nav`
	display: flex;
	//align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const MenuButton = styled.div<{ open: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: transform 0.3s ease-in-out;

	/* Rotates when open */
	${({ open }) => open && "transform: rotate(90deg);"}

	span {
		width: 24px;
		height: 3px;
		background: black;
		margin: 5px;
		border-radius: 2px;
		transition: all 0.3s ease-in-out;

		/* Animations for lines to turn into an "X" */
		${({ open }) =>
			open
				? `
        &:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      `
				: `
        &:nth-child(1),
        &:nth-child(3) {
          transform: none;
        }
        &:nth-child(2) {
          opacity: 1;
        }
      `}
	}
`;
export const Logo = styled.div`
	cursor: pointer;
	text-align: center;
	width: 100%;
	background-color: ${colors.green};
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	padding: 5px;
`;
