import React, { useState } from "react";
import {
	NavWrapper,
	NavbarContainer,
	NavMenu,
	NavBtn,
	MenuButton,
} from "./NavBar.styles";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import { MenuIcon, X } from "lucide-react";
import { useMediaQuery } from "@mui/material";
import SidebarNav from "./SideBarNav";
import MawsouqLogo from "@/assets/images/Logo.png";
import Image from "next/image";
const Navbar = ({ isLandingPage = false }: { isLandingPage?: boolean }) => {
	const [open, setOpen] = useState(false);
	const isMobile = useMediaQuery("(max-width: 925px)");

	const toggleMenu = () => setOpen(!open);

	return (
		<>
			<NavWrapper isLandingPage={isLandingPage}>
				<NavbarContainer>
					<Image src={MawsouqLogo} alt="Mawsouq image" />
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
		</>
	);
};

export default Navbar;
