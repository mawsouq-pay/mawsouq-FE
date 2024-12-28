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

const HeroSection = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const steps = [
		{ label: "Buyers and seller agree on terms", isActive: false },
		{ label: "Buyers pays Mawsouq", isActive: true },
		{ label: "Seller transfers the domain name", isActive: false },
		{ label: "Buyer approves the domain name", isActive: false },
		{ label: "Mawsouq.com pays the seller", isActive: false },
	];
	return (
		<HeroWrapper>
			<Navbar isLandingPage={true} />
			<RowDiv>
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
						<StyledButton>
							<MSText
								fontSize="18px"
								mobileFontSize="15px"
								color={colors.white}
							>
								Start A Transaction
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
