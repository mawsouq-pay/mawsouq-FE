import styled from "styled-components";
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
	font-size: 22px;
	font-weight: bold;
	color: ${colors.black};
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	z-index: 1;
	width: 100%;
`;
