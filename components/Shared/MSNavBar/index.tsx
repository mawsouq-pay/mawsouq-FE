import React, { useState } from "react";
import { MenuIcon, X, GlobeIcon } from "lucide-react";
import { MSLogo } from "@/assets/icons";
import { useMediaQuery } from "@mui/material";
import MSButton from "@/components/Shared/MSButton";
import { colors } from "@/constants/theme";
import {
	CTAWrapper,
	Container,
	Header,
	LogoWrapper,
	MenuButton,
	NavAnchor,
	NavLinks,
	NavRow,
} from "./NavBar.styles";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import { localeEnum } from "@/store/LocaleStore";
import MobileMenuNav from "./MobileMenuNav";
import MSText from "../MSText";
import { clientRoutes } from "@/routes";
import { useRouter } from "next/router";
import MobileHomeNav from "./MobileHomeNav";
import CompanyDropdown from "./CompanyDropdown";

const Navbar = ({ isLandingPage = false }: { isLandingPage?: boolean }) => {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const isMobile = useMediaQuery("(max-width: 925px)");
	const toggleMenu = () => setOpen(!open);
	const { locale, setLocale } = useLocaleStore();
	const text = textTr(locale);
	const toggleLanguage = () => {
		setLocale(locale === localeEnum.en ? localeEnum.ar : localeEnum.en);
	};
	const navLinks = [
		{ name: text.howItWorks, to: "HowItWorksS" },
		{ name: text.msBenefits, to: "BenefitsS" },
		{ name: "Product", to: "ProductS" },
		{ name: "FAQs", to: "FAQS" },
	];

	if (!isMobile && !isLandingPage) return null;
	if (isMobile && !isLandingPage) return <MobileHomeNav />;
	return (
		<Header>
			<Container>
				<NavRow>
					<LogoWrapper>
						<MSLogo width={110} height={40} fill={colors.green} />
					</LogoWrapper>

					<NavLinks>
						{navLinks.map((link) => (
							<NavAnchor
								to={link.to}
								smooth={true}
								duration={500}
								spy={true}
								offset={-141}
							>
								<MSText fontWeight="500" fontSize="14px">
									{link.name}
								</MSText>
							</NavAnchor>
						))}
						<CompanyDropdown />
					</NavLinks>

					<CTAWrapper>
						{isMobile
							? isLandingPage && (
									<MenuButton onClick={toggleMenu} open={open}>
										{open ? <X size={20} /> : <MenuIcon size={20} />}
									</MenuButton>
								)
							: isLandingPage && (
									<MSButton
										title={text.getStarted}
										onClick={() => router.push(clientRoutes.register)}
									/>
								)}
						<LanguageToggle toggleLanguage={toggleLanguage} />
					</CTAWrapper>
				</NavRow>
			</Container>
			{isMobile && <MobileMenuNav open={open} toggleMenu={toggleMenu} />}
		</Header>
	);
};
export default Navbar;
const LanguageToggle = ({ toggleLanguage }: { toggleLanguage: () => void }) => (
	<div
		style={{
			display: "flex",
			flexDirection: "row",
			gap: "4px",
		}}
	>
		<GlobeIcon color={colors.lightBlack} onClick={toggleLanguage} size={20} />
	</div>
);
