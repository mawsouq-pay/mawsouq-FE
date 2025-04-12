import React from "react";
import { colors } from "@/constants/theme";
import { useAuthStore, useLocaleStore } from "@/store";
import MSText from "@/components/Shared/MSText";
import { FormIcon, HoldIcon, DeliverIcon, ApproveIcon } from "@/assets/icons";
import { motion } from "framer-motion";
import MSButton from "@/components/Shared/MSButton";
import { useRouter } from "next/router";

import {
	Wrapper,
	FeaturesContainer,
	StepCard,
	CircleWrapper,
	StepCircle,
	Line,
} from "./HowItWorks.styles";
import { enTexts, arTexts } from "./types";
import { clientRoutes } from "@/routes";

export const howItWorksSteps = [
	{
		number: 1,
		title: "Seller Creates Transaction",
		description: "Set up product details and generate a secure payment link",
		icon: <FormIcon color={colors.green} />,
	},
	{
		number: 2,
		title: "Buyer Pays via Paymob",
		description: "Payment is secured and held in escrow until delivery",
		icon: <HoldIcon color={colors.green} />,
	},
	{
		number: 3,
		title: "Seller Delivers Product",
		description: "Complete the service or ship the product to the buyer",
		icon: <DeliverIcon color={colors.green} />,
	},
	{
		number: 4,
		title: "Buyer Confirms",
		description: "Funds are released to the seller after confirmation",
		icon: <ApproveIcon color={colors.green} />,
	},
];

const HowItWorks = () => {
	const router = useRouter();

	const { locale } = useLocaleStore();
	const textObj = locale === "en" ? enTexts : arTexts;
	const { isLoggedIn } = useAuthStore();

	const onCtaPress = () => {
		if (!isLoggedIn) {
			router.push(clientRoutes.register);
			return;
		}
		router.push(clientRoutes.startTransaction);
	};

	return (
		<Wrapper>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				<MSText
					fontSize="24px"
					mobileFontSize="20px"
					fontWeight="bold"
					color={colors.black}
				>
					{textObj.title}
				</MSText>

				<MSText
					fontSize="16px"
					mobileFontSize="14px"
					fontWeight="400"
					color={colors.gray600}
					style={{ margin: "16px 4% 0" }}
				>
					{textObj.description}
				</MSText>
			</motion.div>

			<FeaturesContainer>
				{howItWorksSteps.map((step, index) => (
					<StepCard key={index}>
						<CircleWrapper>
							<StepCircle>
								<MSText fontWeight="600" fontSize="22px">
									{step.number}
								</MSText>
							</StepCircle>
							{index < howItWorksSteps.length - 1 && <Line />}
						</CircleWrapper>

						<MSText fontSize="18px" fontWeight="600" color={colors.black}>
							{step.title}
						</MSText>
						<MSText fontSize="16px" color={colors.gray600}>
							{step.description}
						</MSText>
					</StepCard>
				))}
			</FeaturesContainer>

			<MSButton
				title={textObj.cta}
				style={{ height: 45 }}
				onClick={onCtaPress}
			/>
		</Wrapper>
	);
};

export default HowItWorks;
