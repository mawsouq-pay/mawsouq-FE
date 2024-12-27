import React from "react";
import {
	HeroWrapper,
	InputFieldDiv,
	DescriptionWrapper,
	HeroInputsWrapper,
	TitleWrapper,
	PaddingContainer,
	Divider,
	StyledButton,
	SubmitWrapper,
} from "./HeroSection.styles";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSText from "../MSText";
import { colors } from "@/constants/theme";
import Navbar from "../NavBar";
import ScribbledCircleText from "../ScribbledCircleText";

const HeroSection = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	return (
		<HeroWrapper>
			<Navbar />
			<PaddingContainer>
				<TitleWrapper>
					<MSText
						fontSize="3.5rem"
						fontWeight="bold"
						color={colors.white}
						style={{ display: "flex", flexDirection: "column" }}
					>
						{text.secureEveryTransaction}
						<ScribbledCircleText text="Confidence" />
					</MSText>
				</TitleWrapper>
				<DescriptionWrapper>
					<MSText fontSize="1.5rem" color={colors.white}>
						{text.mawsouqMission}
					</MSText>
				</DescriptionWrapper>
				<HeroInputsWrapper>
					<InputFieldDiv>
						<MSText fontSize="16px" color={colors.white}>
							{text.imSelling}
						</MSText>
						<Divider />
					</InputFieldDiv>
					<InputFieldDiv>
						<MSText fontSize="16px" color={colors.white}>
							{text.for}
						</MSText>
						<Divider />
					</InputFieldDiv>
				</HeroInputsWrapper>
				<SubmitWrapper>
					<StyledButton type="submit">{text.getStartedNow}</StyledButton>
					<MSText
						fontSize="14px"
						mobileFontSize="12px"
						color={colors.white}
						style={{
							width: "auto",
							wordWrap: "break-word",
							paddingTop: "10px",
							textAlign: "start",
						}}
					>
						{text.moneyStaysSecure}
					</MSText>
				</SubmitWrapper>
			</PaddingContainer>
		</HeroWrapper>
	);
};

export default HeroSection;
