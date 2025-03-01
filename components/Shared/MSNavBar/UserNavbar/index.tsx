import React from "react";

import { useLocaleStore } from "@/store/LocaleStore";
import { useRouter } from "next/router";
import { clientRoutes } from "@/routes";
import { NavWrapper, NavbarContainer, Logo } from "./UserNavbar.styles";
import HamburgerDropdown from "../HamburgerDropdown";
import { userButtonsList } from "./types";

const UserNavbar = () => {
	const router = useRouter();
	const { locale } = useLocaleStore();

	return (
		<>
			<NavWrapper>
				<NavbarContainer>
					<Logo
						onClick={() => {
							router.push(clientRoutes.homePage);
						}}
					>
						Maw<span>souq</span>
					</Logo>

					<HamburgerDropdown buttonsList={userButtonsList(locale)} />
				</NavbarContainer>
			</NavWrapper>
		</>
	);
};

export default UserNavbar;
