import React from "react";
import styled from "styled-components";
import { colors } from "@/constants/theme";
import MSText from "@/components/Shared/MSText";
import MSButton from "@/components/Shared/MSButton";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";

const CTASection = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const isArabic = locale === "ar";
	const features = [
		text.refundIfSellerDoesntDeliver,
		text.trackYourOrder,
		text.support247,
	];
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
						mobileFontSize="24px"
						fontWeight="700"
						color={colors.jetBlack}
						style={{ textAlign: "center", marginBottom: 16 }}
					>
						Protect your work. Sell with confidence.
					</MSText>

					<MSText
						fontSize="18px"
						mobileFontSize="16px"
						color={colors.gray600}
						style={{ textAlign: "center", marginBottom: 32 }}
					>
						Join hundreds of sellers who use Mawsouq to securely receive
						payments for their products and services.
					</MSText>

					<ButtonRow>
						<MSButton title="Get Started Free" />
						<MSButton
							title="Learn More"
							style={{ borderColor: colors.green, color: colors.green }}
						/>
					</ButtonRow>

					<motion.div
						className="mt-12"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<FeaturesRow>
							{features.map((item) => (
								<ListItem key={item}>
									<Check size={16} color={colors.green} />
									<MSText fontSize="14px" style={{ marginInlineStart: 8 }}>
										{item}
									</MSText>
								</ListItem>
							))}
						</FeaturesRow>
					</motion.div>
				</motion.div>
			</Container>
		</Section>
	);
};

export default CTASection;

const Section = styled.section`
	background: ${colors.mintGreen};
	padding: 70px 0;
`;

const Container = styled.div`
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 24px;
`;

const ButtonRow = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 16px;
	margin-bottom: 40px;
`;

const FeaturesRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 24px;
`;
const ListItem = styled.div`
	display: flex;
	align-items: center;
`;
