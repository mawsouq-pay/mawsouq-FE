import React from "react";
import { Drawer } from "@mui/material";
import {
	ArrowRightCircle,
	HeartCrack,
	SidebarCloseIcon,
	StarIcon,
} from "lucide-react";
import { Sidebar, SidebarLink } from "../NavBar.styles";
import NavButtons from "../NavButtons";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import MSText from "../../MSText";
import styled from "styled-components";
import { colors } from "@/constants/theme";
import MSButton from "../../MSButton";
import { localeEnum } from "@/store/LocaleStore";
import { clientRoutes } from "@/routes";
import { useRouter } from "next/router";

const CustomDrawer = styled(Drawer)`
	.MuiDrawer-paper {
		width: 100%;
		height: 60vh;
		border-radius: 0px 0px 20px 20px;
		//transition: transform 0.3s ease-in-out;
		margin-top: 50px;
	}
`;

const SidebarNav = ({
	open,
	toggleMenu,
}: {
	open: boolean;
	toggleMenu: () => void;
}) => {
	const { locale, setLocale } = useLocaleStore();
	const text = textTr(locale);
	const router = useRouter();
	const toggleLanguage = () => {
		setLocale(locale === localeEnum.en ? localeEnum.ar : localeEnum.en);
	};
	return (
		<CustomDrawer
			anchor="right"
			open={open}
			onClose={toggleMenu}
			transitionDuration={300}
		>
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

					<MSText fontSize="14px">{text.howItWorks}</MSText>
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

					<MSText fontSize="14px">{text.msBenefits}</MSText>
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

					<MSText fontSize="14px">{text.contact}</MSText>
				</SidebarLink>
				<MSButton
					title={locale === "en" ? "العربية 🌍" : "En 🌍"}
					onClick={toggleLanguage}
					style={{
						backgroundColor: "#ddf8ed",
						//padding: " 0 2px",
						// width: "100%",
					}}
					fontColor="black"
				/>
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
			</Sidebar>
		</CustomDrawer>
	);
};

export default SidebarNav;
