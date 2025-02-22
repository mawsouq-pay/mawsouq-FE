import React, { useState } from "react";

import { Drawer, useMediaQuery } from "@mui/material";
import { useLocaleStore } from "@/store/LocaleStore";
import { useRouter } from "next/router";
import { clientRoutes } from "@/routes";
import { useAuthStore } from "@/store";
import {
	NavWrapper,
	NavbarContainer,
	Logo,
	NavMenu,
	NavItem,
	NavLinkss,
	NavBtn,
} from "./UserNavbar.styles";
import MSButton from "../../MSButton";
import { textTr } from "@/constants/locales";
import HamburgerDropdown from "../HamburgerDropdown";
import { userButtonsList } from "./types";

const UserNavbar = () => {
	const { isLoggedIn, logout } = useAuthStore();
	const router = useRouter();

	const { locale } = useLocaleStore();

	return (
		<>
			<NavWrapper>
				<NavbarContainer>
					<Logo
						onClick={() => {
							router.push(clientRoutes.startTransaction);
						}}
					>
						Maw<span>souq</span>
					</Logo>

					{true ? (
						<HamburgerDropdown buttonsList={userButtonsList(locale)} />
					) : (
						<>
							<NavMenu>
								<NavItem>
									<NavLinkss
										to="howItWorks"
										activeClass="active"
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
										activeClass="active"
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
										to="about"
										activeClass="active"
										smooth={true}
										duration={500}
										spy={true}
										offset={-141}
									>
										Contact
									</NavLinkss>
								</NavItem>
							</NavMenu>
							<NavBtn>
								<MSButton title="Logout" onClick={logout} />
							</NavBtn>
						</>
					)}
				</NavbarContainer>
			</NavWrapper>
		</>
	);
};

export default UserNavbar;
