import React from "react";
import { useRouter } from "next/router";
import { useAuthStore } from "@/store";
import { useLocaleStore, localeEnum } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { clientRoutes } from "@/routes";
import MSButton from "../../MSButton";
import { colors } from "@/constants/theme";

const NavButtons = () => {
	const { isLoggedIn, logout } = useAuthStore();
	const router = useRouter();
	const { locale, setLocale } = useLocaleStore();
	const text = textTr(locale);

	const toggleLanguage = () => {
		setLocale(locale === localeEnum.en ? localeEnum.ar : localeEnum.en);
	};

	return (
		<>
			{!isLoggedIn ? (
				<>
					<MSButton
						title={text.login}
						style={{
							backgroundColor: "transparent",
							padding: "0px 12px",
							textDecoration: "underline",
						}}
						fontColor="black"
						onClick={() => router.push(clientRoutes.login)}
					/>
					<MSButton
						title={text.register}
						style={{
							backgroundColor: "transparent",
							padding: 0,
							textDecoration: "underline",
						}}
						fontColor="black"
						onClick={() => router.push(clientRoutes.register)}
					/>
				</>
			) : (
				<MSButton
					title={text.logout}
					style={{
						backgroundColor: "transparent",
						padding: 0,
						textDecoration: "underline",
					}}
					fontColor="black"
					onClick={logout}
				/>
			)}

			<MSButton
				title={locale === "en" ? "العربية 🌍" : "En 🌍"}
				onClick={toggleLanguage}
				style={{
					backgroundColor: "#ddf8ed",
					padding: " 0 2px",
					marginInlineStart: 30,
					marginInlineEnd: "-50px",
				}}
				fontColor="black"
			/>
		</>
	);
};

export default NavButtons;
