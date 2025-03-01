import React, { useState } from "react";
import {
	NavWrapper,
	Logo,
	NavLinkss,
	HamburgerMenu,
	NavbarContainer,
	NavMenu,
	NavItem,
	NavBtn,
	LoginButton,
	RegisterButton,
	CloseIcon,
	Sidebar,
	SidebarLink,
} from "./NavBar.styles";
import { Drawer, useMediaQuery } from "@mui/material";
import { useLocaleStore } from "@/store/LocaleStore";
import { useRouter } from "next/router";
import { clientRoutes } from "@/routes";
import { useAuthStore } from "@/store";
import UserNavbar from "./UserNavbar";

const Navbar = (props: NavBarProps) => {
	const { isLandingPage = false } = props;
	const { isLoggedIn, logout } = useAuthStore();
	const router = useRouter();

	const [open, setOpen] = useState(false);
	const { locale, setLocale } = useLocaleStore();

	const isMobile = useMediaQuery("(max-width: 925px)");

	const toggleMenu = () => setOpen(!open);

	return (
		<>
			{isLandingPage ? (
				<NavWrapper isLandingPage={isLandingPage}>
					<NavbarContainer>
						<Logo
							onClick={() => {
								if (isLoggedIn && !isLandingPage) {
									router.push(clientRoutes.homePage);
								}
							}}
						>
							Mawsouq
						</Logo>

						<NavBtn>
							{!isLoggedIn && (
								<>
									{" "}
									<LoginButton
										onClick={() => {
											router.push(clientRoutes.login);
										}}
									>
										Login
									</LoginButton>
									<RegisterButton
										onClick={() => {
											router.push(clientRoutes.register);
										}}
									>
										Register
									</RegisterButton>
								</>
							)}
							{isLoggedIn && (
								<>
									<LoginButton onClick={logout}>Logout</LoginButton>
								</>
							)}
						</NavBtn>
					</NavbarContainer>
					{isMobile && open && (
						<Drawer anchor="right" open={open} onClose={() => toggleMenu()}>
							<Sidebar>
								<CloseIcon onClick={toggleMenu}>X</CloseIcon>
								<SidebarLink
									to="howItWorks"
									activeClass="active"
									smooth={true}
									duration={500}
									spy={true}
									offset={0}
								>
									How it works
								</SidebarLink>
								<SidebarLink
									to="benefits"
									activeClass="active"
									smooth={true}
									duration={500}
									spy={true}
									offset={-121}
								>
									Benefits
								</SidebarLink>
								<SidebarLink
									to="about"
									activeClass="active"
									smooth={true}
									duration={500}
									spy={true}
									offset={-141}
								>
									Contact
								</SidebarLink>
								{!isLoggedIn && (
									<>
										{" "}
										<LoginButton
											onClick={() => {
												router.push(clientRoutes.login);
											}}
										>
											Login
										</LoginButton>
										<RegisterButton
											onClick={() => {
												router.push(clientRoutes.register);
											}}
										>
											Register
										</RegisterButton>
									</>
								)}
								{isLoggedIn && (
									<>
										<LoginButton onClick={logout}>Logout</LoginButton>
									</>
								)}{" "}
							</Sidebar>
						</Drawer>
					)}
				</NavWrapper>
			) : (
				<UserNavbar />
			)}
		</>
	);
};

export default Navbar;
