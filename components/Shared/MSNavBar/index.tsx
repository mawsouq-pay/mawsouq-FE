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
import { GlobeIcon, MenuIcon, X } from "lucide-react";
import { useMediaQuery } from "@mui/material";
import SidebarNav from "./SideBarNav";
import { MSLogo } from "@/assets/icons";
import { useLocaleStore } from "@/store";
import { localeEnum } from "@/store/LocaleStore";
import MSText from "../MSText";

const Navbar = ({ isLandingPage = false }: { isLandingPage?: boolean }) => {
	const [open, setOpen] = useState(false);
	const isMobile = useMediaQuery("(max-width: 925px)");

	const toggleMenu = () => setOpen(!open);
	const { locale, setLocale } = useLocaleStore();
	const toggleLanguage = () => {
		setLocale(locale === localeEnum.en ? localeEnum.ar : localeEnum.en);
	};
	if (!isMobile) return null;
	return (
		<>
			<NavWrapper isLandingPage={isLandingPage}>
				<NavbarContainer>
					<MSLogo width={90} height={40} />
					{isMobile ? (
						isLandingPage ? (
							<MenuButton onClick={toggleMenu} open={open}>
								{open ? <X size={28} /> : <MenuIcon size={28} />}
							</MenuButton>
						) : (
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									gap: 4,
								}}
							>
								<GlobeIcon color="white" onClick={toggleLanguage} />
								<MSText fontWeight="400">
									{locale === "en" ? "عر" : "En"}
								</MSText>
							</div>
						)
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
