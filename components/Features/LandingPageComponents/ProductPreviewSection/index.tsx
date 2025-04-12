import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "@/constants/theme";
import MSText from "@/components/Shared/MSText";
import SellerMSExpEng from "@/assets/images/SellerMSExpEng.png";
import BuyerMSExpEng from "@/assets/images/BuyerMSExpEn.png";
import SellerMSExpAr from "@/assets/images/SellerMSExpAr.png";
import BuyerMSExpAr from "@/assets/images/BuyerMSExpAr.png";
import Image from "next/image";
import {
	Section,
	Container,
	Grid,
	Steps,
	Step,
	StepCircle,
	StepContent,
	Card,
	BuyerCard,
} from "./ProductPreviewSection.styles";
import { useLocaleStore } from "@/store";
import { arTexts, enTexts } from "./types";

export const ProductPreviewSection = () => {
	const { locale } = useLocaleStore();
	const text = locale === "ar" ? arTexts : enTexts;

	return (
		<Section>
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<MSText
						fontSize="32px"
						fontWeight="700"
						style={{ textAlign: "center", color: colors.jetBlack }}
					>
						{text.heading}
					</MSText>
					<MSText
						fontSize="18px"
						style={{ textAlign: "center", color: colors.gray600, marginTop: 8 }}
					>
						{text.subheading}
					</MSText>
				</motion.div>

				<Grid>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<MSText
							fontSize="24px"
							fontWeight="600"
							style={{ color: colors.jetBlack, marginBottom: 16 }}
						>
							{text.forSellers}
						</MSText>
						<Steps>
							{text.sellerSteps.map((step) => (
								<Step key={step.number}>
									<StepCircle>{step.number}</StepCircle>
									<StepContent>
										<MSText
											fontSize="16px"
											fontWeight="500"
											style={{ marginBottom: 4 }}
										>
											{step.title}
										</MSText>
										<MSText fontSize="14px" color={colors.gray600}>
											{step.description}
										</MSText>
									</StepContent>
								</Step>
							))}
						</Steps>

						<Card>
							<Image
								src={locale === "ar" ? SellerMSExpAr : SellerMSExpEng}
								alt="Seller Experience"
								style={{ width: "100%", height: "auto" }}
							/>
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<MSText
							fontSize="24px"
							fontWeight="600"
							style={{ color: colors.jetBlack, marginBottom: 16 }}
						>
							{text.forBuyers}
						</MSText>
						<Steps>
							{text.buyerSteps.map((step) => (
								<Step key={step.number}>
									<StepCircle>{step.number}</StepCircle>
									<StepContent>
										<MSText
											fontSize="16px"
											fontWeight="500"
											style={{ marginBottom: 4 }}
										>
											{step.title}
										</MSText>
										<MSText fontSize="14px" color={colors.gray600}>
											{step.description}
										</MSText>
									</StepContent>
								</Step>
							))}
						</Steps>

						<BuyerCard>
							<Image
								src={locale === "ar" ? BuyerMSExpAr : BuyerMSExpEng}
								alt="Buyer Experience"
								style={{ width: "100%", height: "auto" }}
							/>
						</BuyerCard>
					</motion.div>
				</Grid>
			</Container>
		</Section>
	);
};

export default ProductPreviewSection;
