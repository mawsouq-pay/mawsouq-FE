import React from "react";
import {
	HeroContainer,
	HeroContent,
	HeroTitle,
	HeroSubtitle,
	HeroButton,
	FrameDive,
	MarqueeWrapper,
	MarqueeText,
	FlexRow,
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
			<FlexRow>
				<HeroContent>
					<HeroTitle>{text.title}</HeroTitle>
					<HeroSubtitle>{text.subtitle}</HeroSubtitle>
					<HeroButton
						onClick={() => {
							router.push(
								isLoggedIn
									? clientRoutes.startTransaction
									: clientRoutes.register
							);
						}}
					>
						{text.buttonText}
					</HeroButton>
				</HeroContent>
				<FrameDive>
					<Image src={ReleaseFrame} alt="Release" height={350} width={300} />
					<MarqueeWrapper>
						<MarqueeText>
							All payments are secured and processed by Paymob
						</MarqueeText>
					</MarqueeWrapper>
				</FrameDive>
			</FlexRow>
		</HeroContainer>
	);
};

export default HeroBanner;
