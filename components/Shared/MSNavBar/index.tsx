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

	return (
		<>
			<NavWrapper isLandingPage={isLandingPage}>
				<NavbarContainer>
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
										to="benefits"
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
						</>
					)}
				</NavbarContainer>
				{isMobile && open && (
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
				)}
			</NavWrapper>
		</>
	);
};

export default Navbar;
