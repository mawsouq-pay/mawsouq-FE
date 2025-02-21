import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";

export const NavWrapper = styled.nav<{ isLandingPage: boolean }>`
	position: sticky;
	top: 0;
	margin-bottom: 24px;
	padding-top: 8px;
	padding-bottom: 8px;
	z-index: 100;
	opacity: 0.8;
	display: flex;
	background: ${({ isLandingPage }) => (isLandingPage ? "white" : "#111")};
	padding-right: 64px;
	padding-left: 64px;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	${media.below925`
		padding-right: 32px;
	padding-left: 32px;
	margin-top:30px;
 	 `}
`;

export const Logo = styled.div`
	justify-self: flex-start;
	border-radius: 100%;
	cursor: pointer;
	display: flex;
	align-items: center;
	font-size: 24px;
	font-weight: bold;
	color: ${colors.black};

	span {
		color: #2f80ed;
		font-style: italic;
	}
`;

export const HamburgerMenu = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;

	cursor: pointer;
	//padding-inline-end: 4px;
	margin-top: 4px;

	span {
		width: 24px;
		height: 2px;
		background-color: black;
	}
`;

export const Sidebar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;
	padding: 0px 20px;
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

export const CloseIcon = styled.div`
	font-size: 18px;
	font-weight: bold;
	color: #fff;
	text-align: right;
	cursor: pointer;
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	z-index: 1;
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
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

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
	color: ${colors.black};
	cursor: pointer;
	font-family: "Roboto";
	font-size: 18px;
	&.active {
		border-bottom: 4px solid #52ab98;
	}
	&:hover {
		color: #31c48d;
	}
`;
export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const LoginButton = styled.button`
	border-radius: 16px;
	background: transparent;
	white-space: nowrap;
	padding: 10px 22px;
	color: ${colors.white};
	outline: none;
	font-size: 1rem;
	border: 2px solid ${colors.green};
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	margin-right: 10px;
	font-family: "Roboto";
	background: #31c48d;
	width: 100px;

	&:hover {
		transition-duration: 0.4s;
		background: ${colors.buttonGreenBackground};
		color: ${colors.black};
		border: 3px solid #31c48d;
	}
`;
export const RegisterButton = styled.button`
	border-radius: 16px;
	width: 100px;
	background: transparent;
	white-space: nowrap;
	padding: 10px 22px;
	color: ${colors.black};
	outline: none;
	font-size: 1rem;
	border: 2px solid ${colors.white};
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	margin-right: 10px;
	font-family: "Roboto";
	outline: 2px solid #31c48d;

	&:hover {
		color: ${colors.white};
		background: #31c48d;

`;
