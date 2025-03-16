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
						title={text.getStarted}
						style={{
							backgroundColor: "#0D3B66",
							padding: "5px 12px",
							borderRadius: 8,
						}}
						fontColor="white"
						onClick={() => router.push(clientRoutes.register)}
					/>
					{/* <MSButton
						title={text.register}
						style={{
							backgroundColor: "transparent",
							padding: 0,
							textDecoration: "underline",
						}}
						fontColor="black"
						onClick={() => router.push(clientRoutes.register)}
					/> */}
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
					background: "none",
					padding: "5px 12px",
					marginInlineStart: 30,
					marginInlineEnd: "-50px",
				}}
				fontColor="black"
			/>
		</>
	);
};

export default NavButtons;
