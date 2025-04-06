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
import { textTr } from "@/constants/locales";
import MSText from "@/components/Shared/MSText";
import { colors } from "@/constants/theme";

const HeroBanner = () => {
	const { locale } = useLocaleStore();
	const text = heroBannerText[locale];
	const { isLoggedIn } = useAuthStore();
	const translation = textTr(locale);

	return (
		<HeroContainer>
			<FlexRow>
				<HeroContent>
					<MSText
						fontSize="3.5rem"
						mobileFontSize="2.2rem"
						fontWeight="bold"
						style={{ marginTop: 10 }}
					>
						{text.title}
					</MSText>
					<MSText
						fontSize="1.5rem"
						mobileFontSize="1rem"
						color={colors.lightBlack}
						style={{ marginTop: 10, marginBottom: 10 }}
					>
						{text.subtitle}
					</MSText>
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
				<FrameDive isArabic={locale === "ar"}>
					<Image
						src={ReleaseFrame}
						priority
						loading="eager"
						alt="Release"
						height={350}
						width={300}
					/>
					<MarqueeWrapper>
						<MarqueeText>{translation.securedByPaymob}</MarqueeText>
					</MarqueeWrapper>
				</FrameDive>
			</FlexRow>
		</HeroContainer>
	);
};

export default HeroBanner;
