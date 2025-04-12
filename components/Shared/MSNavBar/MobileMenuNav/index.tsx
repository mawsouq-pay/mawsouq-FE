import React from "react";
import { Drawer } from "@mui/material";
import { ArrowRightCircle, MenuIcon, X } from "lucide-react";
import { MenuButton, Sidebar, SidebarLink } from "../NavBar.styles";
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
					<SidebarLink
						to="howItWorks"
						smooth
						duration={500}
						spy
						offset={0}
						onClick={toggleMenu}
					>
						<ArrowRightCircle size={15} color={`${colors.green}`} />

						<MSText fontSize="16px">{text.howItWorks}</MSText>
					</SidebarLink>
					<SidebarLink
						to="benefits"
						smooth
						duration={500}
						spy
						offset={-121}
						onClick={toggleMenu}
					>
						<ArrowRightCircle size={15} color={`${colors.green}`} />

						<MSText fontSize="16px">{text.msBenefits}</MSText>
					</SidebarLink>
					<SidebarLink
						to="contact"
						smooth
						duration={500}
						spy
						offset={-141}
						onClick={toggleMenu}
					>
						<ArrowRightCircle size={15} color={`${colors.green}`} />

						<MSText fontSize="16px">{text.contact}</MSText>
					</SidebarLink>
					<MSButton
						title={locale === "en" ? "العربية 🌍" : "En 🌍"}
						onClick={() => {
							toggleLanguage();
							toggleMenu();
						}}
						style={{
							backgroundColor: "#ddf8ed",
						}}
						fontColor="black"
					/>
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
