import React, { useEffect, useState } from "react";
import {
	HeroWrapper,
	InputFieldDiv,
	DescriptionWrapper,
	HeroInputsWrapper,
	TitleWrapper,
	PaddingContainer,
	StyledButton,
	SubmitWrapper,
	RowDiv,
	ListWrapper,
} from "./HeroSection.styles";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSText from "../MSText";
import { colors } from "@/constants/theme";
import Navbar from "../NavBar";
import ScribbledCircleText from "../ScribbledCircleText";
import HeroList from "../HeroList";
import useCustomBreakpoint from "@/helpers/screenSizes";
import Divider, { dividerClasses } from "@mui/material/Divider";

const HeroSection = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { isMobile, xxl } = useCustomBreakpoint();

	const steps = [
		{ label: "Buyers and seller agree on terms", isActive: false },
		{ label: "Buyers pays Mawsouq", isActive: true },
		{ label: "Seller transfers the domain name", isActive: false },
		{ label: "Buyer approves the domain name", isActive: false },
		{ label: "Mawsouq.com pays the seller", isActive: false },
	];

	const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
	const [fade, setFade] = useState(true);
	const sentences = [
		"Handmade crafts",
		"Jewelry and personalized accessories",
		"Pre-owned electronics",
		"Event planning and catering services",
		"Organic foods and health supplements",
	];
	useEffect(() => {
		const intervalId = setInterval(() => {
			setFade(false);
			setTimeout(() => {
				setCurrentSentenceIndex(
					(prevIndex) => (prevIndex + 1) % sentences.length
				);
				setFade(true);
			}, 500);
		}, 3000);
		return () => clearInterval(intervalId);
	}, [sentences.length]);

	return (
		<HeroWrapper>
			<Navbar isLandingPage={true} />
			<RowDiv style={{ flexDirection: isMobile ? "column" : "row" }}>
				<PaddingContainer>
					<TitleWrapper>
						<MSText
							fontSize={xxl ? "3rem" : "2rem"}
							mobileFontSize={"2.5rem"}
							fontWeight="bold"
							color={colors.white}
							style={{
								alignItems: isMobile ? "center" : "flex-start",
								justifyContent: "center",
							}}
						>
							<span style={{ display: "inline" }}>
								{text.secureEveryTransaction}
							</span>
							{"  "}
							<ScribbledCircleText text={text.confidence} />
						</MSText>
					</TitleWrapper>
					<DescriptionWrapper>
						<MSText
							fontSize={"1.125rem"}
							mobileFontSize={"1rem"}
							color={colors.white}
						>
							{text.mawsouqMission}
						</MSText>
					</DescriptionWrapper>
					<HeroInputsWrapper>
						<InputFieldDiv>
							<MSText>
								<span style={{ color: colors.labelColor }}>{text.im}</span>{" "}
								<span style={{ color: colors.white }}>{text.Selling}</span>
							</MSText>
							<Divider
								orientation="vertical"
								flexItem
								sx={{ backgroundColor: colors.labelColor }}
							/>
							<MSText
								color={colors.white}
								style={{
									transition: "opacity 0.5s ease",
									opacity: fade ? 1 : 0,
								}}
							>
								{sentences[currentSentenceIndex]}
							</MSText>
						</InputFieldDiv>
						<InputFieldDiv>
							<MSText color={colors.labelColor}>{text.for} £</MSText>
							<MSText color={colors.white}>300</MSText>
						</InputFieldDiv>
					</HeroInputsWrapper>
					<SubmitWrapper>
						<StyledButton>
							<MSText
								fontSize={"18px"}
								mobileFontSize="15px"
								color={colors.white}
							>
								Start a Transaction
							</MSText>
						</StyledButton>
						<MSText
							fontSize="16px"
							mobileFontSize="14px"
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
				<ListWrapper>
					<HeroList
						title="Effortless and Secure Transactions Made Easy"
						steps={steps}
					/>
				</ListWrapper>
			</RowDiv>
		</HeroWrapper>
	);
};

export default HeroSection;
