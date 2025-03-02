import React from "react";
import { NavItem, NavLinkss } from "../NavBar.styles";

const NavLinks = () => {
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
					How it Works
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
					Benefits
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
					Contact
				</NavLinkss>
			</NavItem>
		</>
	);
};

export default NavLinks;
