import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";

export const NavWrapper = styled.nav`
	top: 0;
	padding-top: 8px;
	padding-bottom: 8px;
	z-index: 100;
	opacity: 0.8;
	display: flex;
	background: ${colors.backgroundColor};
	padding-right: 64px;
	padding-left: 64px;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	${media.below925`
		padding-right: 32px;
	padding-left: 32px;
	margin-top:30px;
	height: 52px;
	padding-right: 20px;
	padding-left: 20px;

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
		color: ${colors.green};
		font-style: italic;
	}
`;

export const CloseIcon = styled.div`
	font-size: 18px;
	font-weight: bold;
	color: black;
	align-self: right;
	cursor: pointer;
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	z-index: 1;
	width: 100%;
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
	}
`;
