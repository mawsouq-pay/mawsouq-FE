import styled from "styled-components";

export const NavWrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #111;
	padding: 20px 24px;
	color: #fff;
`;

export const Logo = styled.div`
	font-size: 24px;
	font-weight: bold;
	color: #fff;

	span {
		color: #2f80ed; /* Blue part of the logo */
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
	font-size: 16px;
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
	background-color: #2e5633; /* Green color for logout */
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
