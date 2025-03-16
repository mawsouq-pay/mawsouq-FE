import React from "react";
import {
	HeroContainer,
	HeroContent,
	HeroTitle,
	HeroSubtitle,
	HeroButton,
	FrameDive,
} from "./HeroBanner.styles";
import { useLocaleStore } from "@/store/LocaleStore";
import { heroBannerText } from "./types";
import { useAuthStore } from "@/store";
import router from "next/router";
import { clientRoutes } from "@/routes";
import Image from "next/image";
import ReleaseFrame from "@/assets/images/ENFrame.png";

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
						router.push(
							isLoggedIn ? clientRoutes.startTransaction : clientRoutes.register
						);
					}}
				>
					{text.buttonText}
				</HeroButton>
			</HeroContent>
			<FrameDive>
				<Image src={ReleaseFrame} alt="Release" height={500} width={350} />
			</FrameDive>
		</HeroContainer>
	);
};

export default HeroBanner;
