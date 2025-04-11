import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";
import { MenuIcon, X } from "lucide-react";

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
export const Header = styled.header`
	position: sticky;
	top: 0;
	z-index: 50;
	background: ${colors.white};
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
`;

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
`;

export const NavRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 0;
`;

export const LogoWrapper = styled.div`
	cursor: pointer;
`;

export const NavLinks = styled.nav`
	display: none;
	gap: 32px;

	@media (min-width: 768px) {
		display: flex;
	}
`;

export const NavAnchor = styled(LinkS)`
	color: ${colors.gray600};
	text-decoration: none;

	&:hover {
		color: ${colors.green};
	}
`;

export const CTAWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

export const SidebarLink = styled(LinkS)`
	color: ${colors.black};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0;
	height: 100%;
	cursor: pointer;
	font-size: 18px;
	&.active {
		border-bottom: 4px solid #52ab98;
	}
	&:hover {
		color: #31c48d;
	}
	gap: 4px;
`;
export const Sidebar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 14px;
	padding: 20px 20px;
`;
