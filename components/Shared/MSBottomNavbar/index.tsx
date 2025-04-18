import React from "react";
import { useRouter } from "next/router";
import { HomeIcon, CirclePlusIcon, UserIcon } from "lucide-react";
import { clientRoutes } from "@/routes";
import { BottomNavContainer, NavItem } from "./MSBottomNavbar.styles";

const MobileBottomNav = () => {
	const router = useRouter();

	const isActive = (route: string) => router.pathname === route;

	return (
		<BottomNavContainer>
			<NavItem
				isActive={isActive(clientRoutes.homePage)}
				onClick={() => router.push(clientRoutes.homePage)}
			>
				<HomeIcon size={24} />
			</NavItem>

			<NavItem
				isActive={isActive(clientRoutes.startTransaction)}
				onClick={() => router.push(clientRoutes.startTransaction)}
			>
				<CirclePlusIcon size={24} />
			</NavItem>

			<NavItem
				isActive={isActive(clientRoutes.profilePage)}
				onClick={() => router.push(clientRoutes.profilePage)}
			>
				<UserIcon size={24} />
			</NavItem>
		</BottomNavContainer>
	);
};

export default MobileBottomNav;
