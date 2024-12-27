import React, { useState } from "react";
import HowItWorksStepTimeline from "../HowItWorksStepTimeline";
import {
	Wrapper,
	TitleWrapper,
	StepsAndImagesWrapper,
} from "./HowItWorksSection.styles";
import MSText from "../MSText";
import { colors } from "@/constants/theme";
import OrderSuccessImage from "@/assets/images/order_success.png";
import TestImage from "@/assets/images/test.png";

const HowItWorksSection = () => {
	const [activeStep, setActiveStep] = useState(0);
	const steps = [
		{
			title: "Buyer and Seller Agree on Terms",
			description:
				"Either the buyer or seller can register an account with TradeSafe and create a transaction in minutes.",
			imageSource: OrderSuccessImage,
		},
		{
			title: "Buyer Deposits Funds with TradeSafe",
			description:
				"The buyer deposits the funds in full. TradeSafe issues a signed, QR-secured letter of comfort to the seller.",
			imageSource: TestImage,
		},
	];
	return (
		<Wrapper>
			<TitleWrapper>
				<MSText fontSize="2.5rem" fontWeight="bold" color={colors.black}>
					How It Works
				</MSText>
				<MSText color={colors.lightBlack}>
					Mawsouq's escrow protects buyers and sellers by holding the buyer’s{" "}
					<br />
					funds in an escrow holding account until the seller delivers the goods{" "}
					<br />
					or fulfils their obligations. Buyers get what they paid for, and
					<br />
					sellers are guaranteed payment.
				</MSText>
			</TitleWrapper>
			<StepsAndImagesWrapper>
				<HowItWorksStepTimeline
					steps={steps}
					activeStep={activeStep}
					setActiveStep={setActiveStep}
				/>{" "}
			</StepsAndImagesWrapper>
		</Wrapper>
	);
};

export default HowItWorksSection;
