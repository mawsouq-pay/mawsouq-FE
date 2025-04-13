import React from "react";
import { Drawer } from "@mui/material";
import { ArrowRightCircle, MenuIcon, X } from "lucide-react";
import { MenuButton, NavAnchor, Sidebar, SidebarLink } from "../NavBar.styles";
import { useAuthStore, useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import MSText from "../../MSText";
import styled from "styled-components";
import { colors } from "@/constants/theme";
import MSButton from "../../MSButton";
import { localeEnum } from "@/store/LocaleStore";
import { clientRoutes } from "@/routes";
import { useRouter } from "next/router";
import { MSLogo } from "@/assets/icons";

const CustomDrawer = styled(Drawer)`
	.MuiDrawer-paper {
		width: 100%;
		height: fit-content;
		border-radius: 0px 0px 20px 20px;
		padding-bottom: 20px;
		background: ${colors.green};
	}
`;

const MobileMenuNav = ({
	open,
	toggleMenu,
}: {
	open: boolean;
	toggleMenu: () => void;
}) => {
	const { locale, setLocale } = useLocaleStore();
	const { logout, isLoggedIn } = useAuthStore();
	const text = textTr(locale);
	const router = useRouter();
	const toggleLanguage = () => {
		setLocale(locale === localeEnum.en ? localeEnum.ar : localeEnum.en);
	};

	const navLinks = [
		{ name: text.howItWorks, to: "HowItWorksS", offset: 0, isRoute: false },
		{ name: text.msBenefits, to: "BenefitsS", offset: -121, isRoute: false },
		{ name: "Product", to: "ProductS", offset: -141, isRoute: false },
		{ name: "FAQs", to: "FAQS", offset: -141, isRoute: false },
		{ name: text.aboutUs, to: clientRoutes.aboutUs, isRoute: true },
		{ name: text.contactUs, to: clientRoutes.contactUs, isRoute: true },
	];

	return (
		<CustomDrawer
			anchor="top"
			open={open}
			onClose={toggleMenu}
			transitionDuration={300}
		>
			<div
				style={{
					borderRadius: "0px 0px 20px 20px",
					paddingBottom: 20,
					backgroundColor: "white",
					paddingTop: 20,
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						paddingLeft: 15,
						paddingRight: 15,
					}}
				>
					<MSLogo width={110} height={40} fill={colors.green} />

					<MenuButton onClick={toggleMenu} open={open}>
						{open ? <X size={28} /> : <MenuIcon size={28} />}
					</MenuButton>
				</div>

				<Sidebar>
					{navLinks.map((link) =>
						link.isRoute ? (
							<SidebarLink
								key={link.to}
								onClick={() => {
									router.push(link.to);
									toggleMenu();
								}}
							>
								<ArrowRightCircle size={15} color={colors.green} />
								<MSText fontSize="16px">{link.name}</MSText>
							</SidebarLink>
						) : (
							<NavAnchor
								key={link.to}
								to={link.to}
								smooth
								duration={500}
								spy
								offset={link.offset}
								onClick={toggleMenu}
							>
								<ArrowRightCircle size={15} color={colors.green} />
								<MSText fontSize="16px">{link.name}</MSText>
							</NavAnchor>
						)
					)}

					{!isLoggedIn ? (
						<>
							<MSButton
								title={text.login}
								style={{ width: "100%", marginTop: 10 }}
								onClick={() => router.push(clientRoutes.login)}
							/>
							<MSButton
								title={text.register}
								style={{
									backgroundColor: "transparent",
									width: "100%",
									marginTop: 4,
									border: "1px solid green",
								}}
								fontColor={colors.black}
								onClick={() => router.push(clientRoutes.register)}
							/>
						</>
					) : (
						<MSButton
							title={text.logout}
							style={{ width: "100%", marginTop: 10 }}
							onClick={logout}
						/>
					)}
				</Sidebar>
			</div>
		</CustomDrawer>
	);
};

export default MobileMenuNav;
