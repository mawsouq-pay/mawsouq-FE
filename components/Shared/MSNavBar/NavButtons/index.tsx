import React from "react";
import { useRouter } from "next/router";
import { useAuthStore } from "@/store";
import { useLocaleStore, localeEnum } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { clientRoutes } from "@/routes";
import MSButton from "../../MSButton";
import { GlobeIcon } from "lucide-react";
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
							backgroundColor: `${colors.green}`,
							padding: "5px 12px",
							borderRadius: 8,
						}}
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

			<div
				style={{
					background: "none",
					padding: "5px 2px",
					marginInlineStart: 10,
					marginInlineEnd: "-50px",
				}}
			>
				<LanguageToggle locale={locale} toggleLanguage={toggleLanguage} />
			</div>
		</>
	);
};
const LanguageToggle = ({
	locale,
	toggleLanguage,
}: {
	locale: string;
	toggleLanguage: () => void;
}) => (
	<div style={{ display: "flex", flexDirection: "row", gap: 4 }}>
		<GlobeIcon color={colors.green} onClick={toggleLanguage} />
	</div>
);

export default NavButtons;
