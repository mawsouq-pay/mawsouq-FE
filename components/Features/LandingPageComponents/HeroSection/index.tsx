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
import { colors } from "@/constants/theme";
import ScribbledCircleText from "../ScribbledCircleText";
import HeroList from "../HeroList";
import useCustomBreakpoint from "@/helpers/screenSizes";
import Divider, { dividerClasses } from "@mui/material/Divider";
import MSText from "@/components/Shared/MSText";
import MSNavbar from "@/components/Shared/MSNavBar";
import useTypewriter from "@/hooks/useTypeWriter";
import Link from "next/link";
import MSAnimatedDiv from "@/components/Shared/MSAnimated/MSAnimatedDiv";

const HeroSection = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { isMobile, xxl } = useCustomBreakpoint();
	const textList = [
		"Marketplaces",
		"eCommerce",
		"Individuals",
		"Startups",
		"YOU",
	];

	const displayText = useTypewriter(textList, 100);

	const steps = [
		{ label: "Buyers and seller agree on terms", isActive: false },
		{ label: "Buyers pays Mawsouq", isActive: true },
		{ label: "Seller transfers the item to the buyer", isActive: false },
		{ label: "Buyer approves the item", isActive: false },
		{ label: "Mawsouq.com pays the seller", isActive: false },
	];

	return (
		<MSAnimatedDiv>
			<HeroWrapper>
				<RowDiv style={{ flexDirection: isMobile ? "column" : "row" }}>
					<PaddingContainer>
						<TitleWrapper>
							<MSText
								fontSize={xxl ? "4rem" : "3rem"}
								mobileFontSize={"2.5rem"}
								fontWeight="900"
								color={colors.white}
								style={{
									alignItems: isMobile ? "center" : "flex-start",
									justifyContent: "center",
								}}
							>
								<span style={{ display: "inline" }}>
									{text.secureEveryTransaction}
								</span>
								{"   "}
								<ScribbledCircleText text={text.confidence} />
							</MSText>
						</TitleWrapper>

						<MSText
							style={{ paddingTop: 24, color: "#98e2c6" }}
							fontSize={"2rem"}
							fontWeight="600"
							mobileFontSize={"1.5rem"}
							color={colors.white}
						>
							Built for <span>{displayText}</span>
						</MSText>
						<DescriptionWrapper>
							<MSText
								fontSize={"1.125rem"}
								mobileFontSize={"1rem"}
								color={colors.white}
							>
								{text.mawsouqMission}
							</MSText>
						</DescriptionWrapper>

						<SubmitWrapper>
							<Link
								style={{ textDecoration: "none" }}
								href={"/startTransaction"}
							>
								<StyledButton>
									<MSText
										fontSize={"18px"}
										mobileFontSize="15px"
										color={colors.white}
									>
										Start a Transaction
									</MSText>
								</StyledButton>
							</Link>
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
		</MSAnimatedDiv>
	);
};

export default HeroSection;
