import React from "react";
import {
	HeroContainer,
	HeroContent,
	HeroTitle,
	HeroSubtitle,
	HeroButton,
	HeroImage,
} from "./HeroBanner.styles";
import { useLocaleStore } from "@/store/LocaleStore";
import { heroBannerText } from "./types";
import { useAuthStore } from "@/store";
import router from "next/router";
import { clientRoutes } from "@/routes";

const HeroBanner = () => {
	const { locale } = useLocaleStore();
	const text = heroBannerText[locale];
	const { isLoggedIn } = useAuthStore();
	return (
		<HeroContainer>
			<HeroContent>
				<HeroTitle>{text.title}</HeroTitle>
				<HeroSubtitle>{text.subtitle}</HeroSubtitle>
				<HeroButton
					onClick={() => {
						if (isLoggedIn) {
							router.push(clientRoutes.startTransaction);
						} else {
							router.push(clientRoutes.register);
						}
					}}
				>
					{text.buttonText}
				</HeroButton>
			</HeroContent>
			<HeroImage></HeroImage>
		</HeroContainer>
	);
};

export default HeroBanner;
