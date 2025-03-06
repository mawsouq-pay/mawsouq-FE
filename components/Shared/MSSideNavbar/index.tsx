import React from "react";
import { Tooltip } from "@mui/material";
import {
	CirclePlusIcon,
	EarthIcon,
	HomeIcon,
	Menu,
	SettingsIcon,
	X,
} from "lucide-react";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import {
	SidebarContainer,
	ToggleButton,
	NavList,
	NavItem,
} from "./MSSideNavbar.styles";
import MawsouqLogo from "@/assets/images/Logo.png";
import Image from "next/image";
import { clientRoutes } from "@/routes";
import router from "next/router";
import { localeEnum } from "@/store/LocaleStore";

const Sidebar = () => {
	const { isSideNavbarOpen, setIsSideNavbarOpen, locale, setLocale } =
		useLocaleStore();
	const text = textTr(locale);

	const isActive = (route: string) => router.pathname === route;
	const toggleLanguage = () => {
		setLocale(locale === localeEnum.en ? localeEnum.ar : localeEnum.en);
	};

	return (
		<SidebarContainer isOpen={isSideNavbarOpen}>
			<ToggleButton onClick={() => setIsSideNavbarOpen(!isSideNavbarOpen)}>
				{isSideNavbarOpen ? <X /> : <Menu />}
			</ToggleButton>

			<NavList>
				{isSideNavbarOpen && (
					<NavItem isOpen={isSideNavbarOpen}>
						<Image src={MawsouqLogo} alt="Mawsouq image" />
					</NavItem>
				)}

				<Tooltip
					title="Home"
					placement="right"
					arrow
					disableHoverListener={isSideNavbarOpen}
				>
					<NavItem
						isOpen={isSideNavbarOpen}
						isActive={isActive(clientRoutes.homePage)}
						onClick={() => router.push(clientRoutes.homePage)}
					>
						<HomeIcon size={22} />
						{isSideNavbarOpen && <span>Home</span>}
					</NavItem>
				</Tooltip>

				<Tooltip
					title={text.startTransaction}
					placement="right"
					arrow
					disableHoverListener={isSideNavbarOpen}
				>
					<NavItem
						isOpen={isSideNavbarOpen}
						isActive={isActive(clientRoutes.startTransaction)}
						onClick={() => router.push(clientRoutes.startTransaction)}
					>
						<CirclePlusIcon size={22} />
						{isSideNavbarOpen && <span>{text.startTransaction}</span>}
					</NavItem>
				</Tooltip>

				<Tooltip
					title={text.profilePage}
					placement="right"
					arrow
					disableHoverListener={isSideNavbarOpen}
				>
					<NavItem
						isOpen={isSideNavbarOpen}
						isActive={isActive(clientRoutes.profilePage)}
						onClick={() => router.push(clientRoutes.profilePage)}
					>
						<SettingsIcon size={22} />
						{isSideNavbarOpen && <span>{text.profilePage}</span>}
					</NavItem>
				</Tooltip>

				<Tooltip
					title={locale === "en" ? "العربية" : "English"}
					placement="right"
					arrow
					disableHoverListener={isSideNavbarOpen}
				>
					<NavItem isOpen={isSideNavbarOpen} onClick={toggleLanguage}>
						<EarthIcon size={22} />
						{isSideNavbarOpen && (
							<span>{locale === "en" ? "العربية" : "English"}</span>
						)}
					</NavItem>
				</Tooltip>
			</NavList>
		</SidebarContainer>
	);
};

export default Sidebar;
