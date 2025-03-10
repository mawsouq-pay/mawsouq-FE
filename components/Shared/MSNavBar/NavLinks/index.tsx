import React from "react";
import { NavItem, NavLinkss } from "../NavBar.styles";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";

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
					{text.howItWorks}
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
					{text.msBenefits}
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
					{text.contact}
				</NavLinkss>
			</NavItem>
		</>
	);
};

export default NavLinks;
