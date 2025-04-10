import React from "react";
import { NavItem, NavLinkss } from "../NavBar.styles";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import MSText from "../../MSText";

const NavLinks = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	return (
		<>
			<NavItem>
				<NavLinkss
					to="howItWorks"
					smooth={true}
					duration={500}
					spy={true}
					offset={0}
				>
					<MSText fontWeight="600">{text.howItWorks}</MSText>
				</NavLinkss>
			</NavItem>
			<NavItem>
				<NavLinkss
					to="benefits"
					smooth={true}
					duration={500}
					spy={true}
					offset={-121}
				>
					<MSText fontWeight="600">{text.msBenefits}</MSText>
				</NavLinkss>
			</NavItem>
			<NavItem>
				<NavLinkss
					to="contact"
					smooth={true}
					duration={500}
					spy={true}
					offset={-141}
				>
					<MSText fontWeight="600">{text.contact}</MSText>
				</NavLinkss>
			</NavItem>
		</>
	);
};

export default NavLinks;
