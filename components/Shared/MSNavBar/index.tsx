import React, { useState } from "react";
import {
	NavWrapper,
	Logo,
	NavLinkss,
	NavbarContainer,
	NavMenu,
	NavItem,
	NavBtn,
	Sidebar,
	SidebarLink,
} from "./NavBar.styles";
import { Drawer, useMediaQuery } from "@mui/material";
import { useLocaleStore } from "@/store/LocaleStore";
import { useRouter } from "next/router";
import { clientRoutes } from "@/routes";
import { useAuthStore } from "@/store";
import UserNavbar from "./UserNavbar";
import MSButton from "../MSButton";
import { MenuIcon, SidebarCloseIcon } from "lucide-react";
import { localeEnum } from "@/store/LocaleStore";
const Navbar = (props: NavBarProps) => {
	const { isLandingPage = false } = props;
	const { isLoggedIn, logout } = useAuthStore();
	const router = useRouter();

	const [open, setOpen] = useState(false);
	const { locale, setLocale } = useLocaleStore();

	const isMobile = useMediaQuery("(max-width: 925px)");

	const toggleMenu = () => setOpen(!open);

	const toggleLanguage = () => {
		setLocale(locale === localeEnum.en ? localeEnum.ar : localeEnum.en);
	};

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

						{isMobile ? (
							<MenuIcon onClick={toggleMenu}>
								<span />
								<span />
								<span />
							</MenuIcon>
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
											to="contact"
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
											<MSButton
												title="Login"
												style={{
													backgroundColor: "transparent",
													padding: "0px 12px",
													textDecoration: "underline",
												}}
												fontColor="black"
											/>
											<MSButton
												title="Register"
												style={{
													backgroundColor: "transparent",
													padding: 0,
													textDecoration: "underline",
												}}
												fontColor="black"
											/>
											<MSButton
												title={locale === "en" ? "العربية 🌍" : "English 🌍"}
												onClick={toggleLanguage}
												style={{
													backgroundColor: "transparent",
													padding: 0,
													marginInlineStart: 20,
												}}
												fontColor="black"
											/>
										</>
									)}
									{isLoggedIn && (
										<>
											<MSButton
												title="Logout"
												style={{
													backgroundColor: "transparent",
													padding: 0,
													textDecoration: "underline",
												}}
												fontColor="black"
												onClick={logout}
											/>
										</>
									)}
								</NavBtn>
							</>
						)}
					</NavbarContainer>

					{isMobile && open && (
						<Drawer anchor="right" open={open} onClose={() => toggleMenu()}>
							<Sidebar>
								<SidebarCloseIcon onClick={toggleMenu} />
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
									to="contact"
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
										<MSButton
											title="Login"
											style={{
												backgroundColor: "transparent",
												padding: 0,
												textDecoration: "underline",
											}}
											fontColor="black"
											onClick={() => {
												router.push(clientRoutes.login);
											}}
										/>
										<MSButton
											title="Register"
											style={{
												backgroundColor: "transparent",
												padding: 0,
												textDecoration: "underline",
											}}
											fontColor="black"
											onClick={() => {
												router.push(clientRoutes.register);
											}}
										/>
										<MSButton
											title={locale === "en" ? "العربية 🌍" : "English 🌍"}
											onClick={toggleLanguage}
											style={{
												backgroundColor: "transparent",
												padding: 0,
												textDecoration: "underline",
											}}
											fontColor="black"
										/>
									</>
								)}
								{isLoggedIn && (
									<>
										<MSButton
											title="Logout"
											style={{
												backgroundColor: "transparent",
												padding: 0,
												textDecoration: "underline",
											}}
											fontColor="black"
											onClick={logout}
										/>
									</>
								)}
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
