import React, { useState } from "react";
import {
	NavWrapper,
	Logo,
	NavbarContainer,
	NavMenu,
	NavBtn,
	MenuButton,
} from "./NavBar.styles";
import { useAuthStore } from "@/store";
import { useRouter } from "next/router";
import { clientRoutes } from "@/routes";
import UserNavbar from "./UserNavbar";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import { MenuIcon, X } from "lucide-react";
import { useMediaQuery } from "@mui/material";
import SidebarNav from "./SideBarNav";

const Navbar = ({ isLandingPage = false }: { isLandingPage?: boolean }) => {
	const { isLoggedIn } = useAuthStore();
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const isMobile = useMediaQuery("(max-width: 925px)");

	const toggleMenu = () => setOpen(!open);

	return (
		<>
			{isLandingPage ? (
				<NavWrapper isLandingPage={isLandingPage}>
					<NavbarContainer>
						<Logo
							onClick={() =>
								isLoggedIn &&
								!isLandingPage &&
								router.push(clientRoutes.homePage)
							}
						>
							Mawsouq
						</Logo>

						{isMobile ? (
							<MenuButton onClick={toggleMenu} open={open}>
								{open ? <X size={28} /> : <MenuIcon size={28} />}
							</MenuButton>
						) : (
							<>
								<NavMenu>
									<NavLinks />
								</NavMenu>
								<NavBtn>
									<NavButtons />
								</NavBtn>
							</>
						)}
					</NavbarContainer>

					{isMobile && <SidebarNav open={open} toggleMenu={toggleMenu} />}
				</NavWrapper>
			) : (
				<UserNavbar />
			)}
		</>
	);
};

export default Navbar;
