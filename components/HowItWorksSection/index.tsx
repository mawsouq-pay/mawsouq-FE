import React, { useEffect, useRef, useState } from "react";
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
import StartTransactionImage from "@/assets/images/start_transaction.png";

const HowItWorksSection = () => {
	const [activeStep, setActiveStep] = useState(0);
	const stopAnimRef = useRef(false);
	const stopAnimation = () => {
		stopAnimRef.current = true;
	};
	const steps = [
		{
			title: "Buyer and Seller Agree on Terms",
			description:
				"The buyer and seller agree on the details of the transaction, including the item, price, and delivery timeline, and register on Mawsouq.",
			imageSource: StartTransactionImage,
		},
		{
			title: "Buyer Secures Funds with Mawsouq",
			description:
				"The buyer deposits the agreed amount into Mawsouq’s secure escrow account, ensuring both parties are protected.",
			imageSource: StartTransactionImage,
		},
		{
			title: "Seller Delivers the Goods or Services",
			description:
				"Once the funds are secured, the seller proceeds to deliver the goods or provide the agreed services as per the transaction terms.",
			imageSource: StartTransactionImage,
		},
		{
			title: "Buyer Confirms Receipt",
			description:
				"After receiving the goods or services, the buyer reviews and confirms that everything is as agreed.",
			imageSource: StartTransactionImage,
		},
		{
			title: "Mawsouq Releases the Funds",
			description:
				"Once the buyer confirms receipt, Mawsouq releases the funds to the seller, ensuring a secure and smooth transaction.",
			imageSource: StartTransactionImage,
		},
	];
	useEffect(() => {
		const timer = setInterval(() => {
			if (!stopAnimRef.current) {
				setActiveStep((prevStep) => (prevStep + 1) % steps.length);
			}
		}, 5000);

		return () => clearInterval(timer);
	}, [steps.length]);

	return (
		<Wrapper>
			<TitleWrapper>
				<MSText fontSize="3.5rem" fontWeight="bold" color={colors.black}>
					How It Works
				</MSText>
				<MSText color={colors.lightBlack} fontSize="18px">
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
					stopAnimation={stopAnimation}
				/>{" "}
			</StepsAndImagesWrapper>
		</Wrapper>
	);
};

export default HowItWorksSection;
