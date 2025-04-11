import React from "react";
import styled from "styled-components";
import { colors } from "@/constants/theme";
import { useLocaleStore } from "@/store";
import MSText from "@/components/Shared/MSText";
import { media } from "@/helpers/mediaQueryHelper";
import {
	FormIcon,
	HoldIcon,
	DeliverIcon,
	ApproveIcon,
	ArrowDownScribbledIcon,
} from "@/assets/icons";
import { textTr } from "@/constants/locales";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import MSButton from "@/components/Shared/MSButton";

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
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const isMobile = useMediaQuery("(max-width: 925px)");

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
					{text.howItWorks}
				</MSText>

				<MSText
					fontSize="16px"
					mobileFontSize="14px"
					fontWeight="400"
					color={colors.gray600}
					style={{ margin: "16px 4% 0" }}
				>
					{text.howItWorksDescription}
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

			<MSButton title="Create Your First Payment Link" style={{ height: 45 }} />
		</Wrapper>
	);
};

export default HowItWorks;

const Wrapper = styled.div`
	padding-top: 60px;
	padding-bottom: 2rem;
	align-items: center;
	text-align: center;
`;

export const FeaturesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
	padding: 4rem 2rem;
	gap: 24px;

	${media.below925`
    flex-direction: column;
    align-items: center;
  `}
`;

const StepCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	flex: 1;
	min-width: 200px;
	position: relative;
	gap: 10px;
`;

const CircleWrapper = styled.div`
	position: relative;
	margin-bottom: 16px;
`;

const StepCircle = styled.div`
	width: 60px;
	height: 60px;
	background-color: ${colors.mintGreen};
	color: ${colors.green};
	font-size: 24px;
	font-weight: 700;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2;
`;

const Line = styled.div`
	position: absolute;
	top: 50%;
	left: 100%;
	transform: translateY(-50%);
	height: 2px;
	width: 60px;
	background-color: ${colors.green};

	@media (max-width: 925px) {
		display: none;
	}
`;
