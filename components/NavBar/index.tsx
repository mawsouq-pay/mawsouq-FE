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
import MSText from "../MSText";
import { colors } from "@/constants/theme";
import { animateScroll as scroll } from "react-scroll";

const Navbar = (props: NavBarProps) => {
	const { isLandingPage = false } = props;
	const router = useRouter();

	const [open, setOpen] = useState(false);
	const { locale, setLocale } = useLocaleStore();

	const isMobile = useMediaQuery("(max-width: 925px)");

	const toggleMenu = () => setOpen(!open);

	const isActive = (path: string) => router.pathname === path;

	return (
		// <>
		// 	<NavWrapper isLandingPage={isLandingPage}>
		// 		<Logo>
		// 			Maw<span>souq</span>
		// 		</Logo>

		// 		{isMobile ? (
		// 			<HamburgerMenu onClick={toggleMenu}>
		// 				<span />
		// 				<span />
		// 				<span />
		// 			</HamburgerMenu>
		// 		) : (
		// 			<NavLinks>
		// 				<NavLink href="/homePage" isActive={isActive("/homePage")}>
		// 					Home
		// 				</NavLink>
		// 				<NavLink href="/how-it-works" isActive={isActive("/how-it-works")}>
		// 					How it works
		// 				</NavLink>
		// 				<NavLink href="/benefits" isActive={isActive("/benefits")}>
		// 					Benefits
		// 				</NavLink>
		// 				<NavLink href="/contact" isActive={isActive("/contact")}>
		// 					Contact
		// 				</NavLink>
		// 				<NavLink href="/about-us" isActive={isActive("/about-us")}>
		// 					About us
		// 				</NavLink>
		// 			</NavLinks>
		// 		)}
		// 	</NavWrapper>

		// 	{isMobile && open && (
		// 		<Sidebar>
		// 			<CloseIcon onClick={toggleMenu}>X</CloseIcon>
		// 			<SidebarLink href="#">Home</SidebarLink>
		// 			<SidebarLink href="#">How it works</SidebarLink>
		// 			<SidebarLink href="#">Benefits</SidebarLink>
		// 			<SidebarLink href="#">Contact</SidebarLink>
		// 			<LogoutButton>Logout</LogoutButton>
		// 		</Sidebar>
		// 	)}
		// </>
		<NavWrapper isLandingPage={isLandingPage}>
			<NavbarContainer>
				<Logo>
					Maw<span>souq</span>
				</Logo>
				{/* <NavLogo to='/' onClick={toggleHome}>
		<img src={logo} alt="card__image" width="190"></img>
		</NavLogo> */}
				{/* <MobileIcon onClick={toggle}>
		  <FaBars/>
		</MobileIcon> */}
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
					<NavBtnLink1 to="/login">Login</NavBtnLink1>
					<NavBtnLink to="/signup">Sign Up</NavBtnLink>
				</NavBtn>
			</NavbarContainer>
		</NavWrapper>
	);
};

export default Navbar;
