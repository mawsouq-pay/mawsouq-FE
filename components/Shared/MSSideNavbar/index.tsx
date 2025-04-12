import React from "react";
import { Tooltip } from "@mui/material";
import {
	CirclePlusIcon,
	GlobeIcon,
	HomeIcon,
	LogOut,
	Menu,
	UserIcon,
	X,
} from "lucide-react";
import { useAuthStore, useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import {
	SidebarContainer,
	ToggleButton,
	NavList,
	NavItem,
	LogoItem,
} from "./MSSideNavbar.styles";
import { clientRoutes } from "@/routes";
import router from "next/router";
import { localeEnum } from "@/store/LocaleStore";
import { MSLogo } from "@/assets/icons";
import MSText from "../MSText";

const Sidebar = () => {
	const { isSideNavbarOpen, setIsSideNavbarOpen, locale, setLocale } =
		useLocaleStore();
	const { logout } = useAuthStore();
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
				<div>
					{isSideNavbarOpen && (
						<LogoItem>
							<MSLogo />
						</LogoItem>
					)}
					<Tooltip
						title={text.myTransactions}
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
							{isSideNavbarOpen && (
								<MSText fontSize="16px">{text.myTransactions}</MSText>
							)}
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
							{isSideNavbarOpen && (
								<MSText fontSize="16px">{text.startTransaction}</MSText>
							)}
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
							<UserIcon size={22} />
							{isSideNavbarOpen && (
								<MSText fontSize="16px">{text.profilePage}</MSText>
							)}
						</NavItem>
					</Tooltip>
				</div>
				<div>
					<Tooltip
						title={locale === "en" ? "العربية" : "English"}
						placement="right"
						arrow
						disableHoverListener={isSideNavbarOpen}
					>
						<NavItem isOpen={isSideNavbarOpen} onClick={toggleLanguage}>
							<GlobeIcon size={22} />
							{isSideNavbarOpen && (
								<MSText fontSize="16px">
									{locale === "en" ? "العربية" : "English"}
								</MSText>
							)}
						</NavItem>
					</Tooltip>

					<Tooltip
						title={locale === "en" ? "العربية" : "English"}
						placement="right"
						arrow
						disableHoverListener={isSideNavbarOpen}
					>
						<NavItem isOpen={isSideNavbarOpen} onClick={logout}>
							<LogOut size={22} />
							{isSideNavbarOpen && (
								<MSText fontSize="16px">{text.logout}</MSText>
							)}
						</NavItem>
					</Tooltip>
				</div>
			</NavList>
		</SidebarContainer>
	);
};

export default Sidebar;
