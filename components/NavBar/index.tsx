import React, { useState } from "react";
import {
	NavWrapper,
	Logo,
	NavLinks,
	NavLink,
	HamburgerMenu,
	Sidebar,
	SidebarLink,
	LogoutButton,
	CloseIcon,
} from "./NavBar.styles";
import { useMediaQuery } from "@mui/material";
import { useLocaleStore } from "@/store/LocaleStore";
import { useRouter } from "next/router";
import { useAuthStore } from "@/store";
import { clientRoutes } from "@/routes";

const Navbar = (props: NavBarProps) => {
	const { isLandingPage = false } = props;
	const router = useRouter();
	const { isLoggedIn } = useAuthStore();
	const [open, setOpen] = useState(false);

	const isMobile = useMediaQuery("(max-width: 925px)");

	const toggleMenu = () => setOpen(!open);

	const isActive = (path: string) => router.pathname === path;
	return (
		<>
			<NavWrapper isLandingPage={isLandingPage}>
				<Logo
					onClick={() => {
						if (isLoggedIn && !isLandingPage) {
							router.push(clientRoutes.homePage);
						}
					}}
				>
					Maw<span>souq</span>
				</Logo>

				{isMobile ? (
					<HamburgerMenu onClick={toggleMenu}>
						<span />
						<span />
						<span />
					</HamburgerMenu>
				) : (
					<NavLinks>
						<NavLink href="/homePage" isActive={isActive("/homePage")}>
							Home
						</NavLink>
						<NavLink href="/how-it-works" isActive={isActive("/how-it-works")}>
							How it works
						</NavLink>
						<NavLink href="/benefits" isActive={isActive("/benefits")}>
							Benefits
						</NavLink>
						<NavLink href="/contactPage" isActive={isActive("/contact")}>
							Contact
						</NavLink>
						<NavLink href="/about-us" isActive={isActive("/about-us")}>
							About us
						</NavLink>
					</NavLinks>
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
