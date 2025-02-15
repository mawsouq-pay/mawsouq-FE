import React, { useState } from "react";
import {
	NavWrapper,
	Logo,
	NavLinkss,
	NavLink,
	HamburgerMenu,
	Sidebar,
	SidebarLink,
	LogoutButton,
	CloseIcon,
	NavbarContainer,
	NavMenu,
	NavItem,
	NavBtn,
	NavBtnLink1,
	NavBtnLink,
} from "./NavBar.styles";
import { useMediaQuery } from "@mui/material";
import { useLocaleStore } from "@/store/LocaleStore";
import { useRouter } from "next/router";
import { clientRoutes } from "@/routes";
import { useAuthStore } from "@/store";

const Navbar = (props: NavBarProps) => {
	const { isLandingPage = false } = props;
	const { isLoggedIn, logout } = useAuthStore();
	const router = useRouter();

	const [open, setOpen] = useState(false);
	const { locale, setLocale } = useLocaleStore();

	const isMobile = useMediaQuery("(max-width: 925px)");

	const toggleMenu = () => setOpen(!open);

	const isActive = (path: string) => router.pathname === path;

	return (
		<>
			<NavWrapper isLandingPage={isLandingPage}>
				<Logo>
					Maw<span>souq</span>
				</Logo>

				{isMobile ? (
					<HamburgerMenu onClick={toggleMenu}>
						<span />
						<span />
						<span />
					</HamburgerMenu>
				) : (
					<>
						<NavMenu>
							<NavItem>
								<NavLinkss
									to="howItWorks"
									activeClass="active"
									smooth={true}
									duration={500}
									spy={true}
									offset={0}
								>
									How it Works
								</NavLinkss>
							</NavItem>
							<NavItem>
								<NavLinkss
									to="map"
									activeClass="active"
									smooth={true}
									duration={500}
									spy={true}
									offset={-121}
								>
									Benefits
								</NavLinkss>
							</NavItem>
							<NavItem>
								<NavLinkss
									to="about"
									activeClass="active"
									smooth={true}
									duration={500}
									spy={true}
									offset={-141}
								>
									Contact
								</NavLinkss>
							</NavItem>
						</NavMenu>
						<NavBtn>
							{!isLoggedIn && (
								<>
									{" "}
									<NavBtnLink1
										onClick={() => {
											router.push(clientRoutes.login);
										}}
									>
										Login
									</NavBtnLink1>
									<NavBtnLink1
										onClick={() => {
											router.push(clientRoutes.register);
										}}
									>
										Register
									</NavBtnLink1>
								</>
							)}
							{isLoggedIn && (
								<>
									<NavBtnLink1 onClick={logout}>Logout</NavBtnLink1>
								</>
							)}
						</NavBtn>
					</>
				)}
			</NavWrapper>

			{isMobile && open && (
				<Sidebar>
					<CloseIcon onClick={toggleMenu}>X</CloseIcon>
					<SidebarLink href="#">Home</SidebarLink>
					<SidebarLink href="#">How it works</SidebarLink>
					<SidebarLink href="#">Benefits</SidebarLink>
					<SidebarLink href="#">Contact</SidebarLink>
					<LogoutButton>Logout</LogoutButton>
				</Sidebar>
			)}
		</>
	);
};

export default Navbar;
