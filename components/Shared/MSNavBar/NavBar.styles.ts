import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { colors } from "@/constants/theme";

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
	align-items: center;
	@media (min-width: 768px) {
		display: flex;
	}
`;

export const NavAnchor = styled(LinkS)`
	cursor: pointer;
	display: flex;
	flex-direction: row;
	color: ${colors.gray600};
	text-decoration: none;
	gap: 5px;
	font-family: inherit;
	&:hover {
		color: ${colors.green};
	}
`;

export const CTAWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

export const Sidebar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 14px;
	padding: 20px 20px;
	font-family: inherit;
`;
export const SidebarLink = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	gap: 5px;
	font-family: inherit;
	color: ${colors.gray600};
`;
