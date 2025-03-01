import MSText from "@/components/Shared/MSText";
import React from "react";
import {
	HeroContainer,
	HeroContent,
	HeroTitle,
	HeroSubtitle,
	HeroButton,
	HeroImage,
	IframeOverlay,
} from "./HeroBanner.styles";
import { colors } from "@/constants/theme";
import useTypewriter from "@/hooks/useTypeWriter";
import { useLocaleStore } from "@/store/LocaleStore";
import { heroBannerText } from "./types";

const HeroBanner = () => {
	const { locale } = useLocaleStore();
	const text = heroBannerText[locale];

	const displayText = useTypewriter(text.textList, 100);

	return (
		<HeroContainer>
			<HeroContent>
				<MSText
					style={{ paddingTop: 24, color: `${colors.buttonGreenBackground}` }}
					fontSize={"1.5rem"}
					fontWeight="600"
					mobileFontSize={"1.5rem"}
					color={colors.white}
				>
					{text.builtFor} <span>{displayText}</span>
				</MSText>
				<HeroTitle>{text.title}</HeroTitle>
				<HeroSubtitle>{text.subtitle}</HeroSubtitle>
				<HeroButton>{text.buttonText}</HeroButton>
			</HeroContent>
			<HeroImage>
				{/* <Image
            src={FrameLaptopImage}
            alt="Desktop Frame"
            style={{
                width: "100%",
                height: "auto",
                display: "block",
            }}
            layout="responsive"
        /> */}
				<IframeOverlay
					src="https://www.youtube.com/embed/19g66ezsKAg"
					allowFullScreen
					title="Mawsouq Video"
				/>
			</HeroImage>
		</HeroContainer>
	);
};

export default HeroBanner;
