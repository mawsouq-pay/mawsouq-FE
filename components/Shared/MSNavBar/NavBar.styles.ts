import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { Button } from "@mui/material";

export const NavWrapper = styled.nav<{ isLandingPage: boolean }>`
	display: flex;
	background: ${({ isLandingPage }) =>
		isLandingPage ? "transparent" : "#111"};
	color: #fff;
	padding-right: 64px;
	padding-left: 64px;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
`;

export const Logo = styled.div`
	justify-self: flex-start;
	cursor: pointer;
	display: flex;
	align-items: center;
	font-size: 24px;
	font-weight: bold;
	color: #fff;

	span {
		color: #2f80ed;
		font-style: italic;
	}
`;

export const NavLinks = styled.div`
	display: flex;
	gap: 50px;
	flex: 1;
	justify-content: flex-end;
	margin-right: 30%;
`;
export const NavLink = styled.a<{ isActive: boolean }>`
	text-decoration: none;
	color: #fff;
	font-size: 18px;
	position: relative;

	&::after {
		content: "";
		display: ${({ isActive }) => (isActive ? "block" : "none")};
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: #2f80ed;
	}

	&:hover {
		text-decoration: underline;
	}
`;

export const HamburgerMenu = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	cursor: pointer;

	span {
		width: 24px;
		height: 2px;
		background-color: #fff;
	}
`;

export const Sidebar = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 250px;
	height: 100vh;
	background-color: #111;
	padding: 24px;
	color: #fff;
	display: flex;
	flex-direction: column;
	gap: 16px;
	z-index: 100;
`;

export const SidebarLink = styled.a`
	text-decoration: none;
	color: #fff;
	font-size: 18px;

	&:hover {
		text-decoration: underline;
	}
`;

export const LogoutButton = styled.button`
	margin-top: auto;
	background-color: #2e5633;
	color: #fff;
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
export const NavLogo = styled(LinkR)`
	color: #000;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-left: -5px;
	font-weight: bold;
	text-decoration: none;
`;
export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 760px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: #000;
	}
`;

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
export const NavItem = styled.li`
	height: 75px;
`;

export const NavLinkss = styled(LinkS)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	font-family: "ProximaNova";

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
export const NavBtnLink = styled(LinkR)`
	border-radius: 5px;
	background: #31c48d;
	white-space: nowrap;
	padding: 10px 22px;
	color: white;
	outline: none;
	font-size: 1rem;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	font-family: "ProximaNova";

	&:hover {
		opacity: 0.6;
		transition-duration: 0.4s;
		background: #31c48d;
		color: white;
	}
`;

export const NavBtnLink1 = styled(Button)`
	border-radius: 5px;
	background: #fff;
	white-space: nowrap;
	padding: 1px 22px;
	color: #31c48d;
	outline: none;
	font-size: 1rem;
	border: 2px solid #31c48d;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	margin-right: 10px;
	font-family: "ProximaNova";

	&:hover {
		transition-duration: 0.4s;
		background: #fff;
		color: #31c48d;
		border: 2px solid #31c48d;
	}
`;
