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

const howItWorksIcons = [
	<FormIcon color={colors.green} />,
	<HoldIcon color={colors.green} />,
	<DeliverIcon color={colors.green} />,
	<ApproveIcon color={colors.green} />,
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
		<Wrapper id="HowItWorksS">
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
				{textObj.steps.map((step, index) => (
					<StepCard key={index}>
						<CircleWrapper>
							<StepCircle>
								{howItWorksIcons[index]}
								{/* <MSText fontWeight="600" fontSize="22px">
									{index + 1}
								</MSText> */}
							</StepCircle>
							{index < textObj.steps.length - 1 && <Line />}
						</CircleWrapper>

						{/*  */}

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
