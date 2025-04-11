import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MSButton from "@/components/Shared/MSButton";
import { colors } from "@/constants/theme";
import MSText from "@/components/Shared/MSText";

const ProductPreviewSection = () => {
	const sellerSteps = [
		{
			number: 1,
			title: "Create payment links in seconds",
			description:
				"Enter product details, price, and generate a secure payment link",
		},
		{
			number: 2,
			title: "Track your orders",
			description:
				"Monitor payment status, view buyer details, and manage all transactions",
		},
		{
			number: 3,
			title: "Get paid instantly",
			description:
				"Receive funds directly to your bank account once the buyer confirms delivery",
		},
	];

	const buyerSteps = [
		{
			number: 1,
			title: "Click the payment link",
			description:
				"Receive a payment link from the seller via chat or social media",
		},
		{
			number: 2,
			title: "Pay securely",
			description: "Make a secure payment through our trusted payment provider",
		},
		{
			number: 3,
			title: "Confirm receipt",
			description:
				"Verify you've received the product or service before payment is released",
		},
	];

	return (
		<Section>
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<MSText
						fontSize="32px"
						fontWeight="700"
						style={{ textAlign: "center", color: colors.jetBlack }}
					>
						The Mawsouq Experience
					</MSText>
					<MSText
						fontSize="18px"
						style={{ textAlign: "center", color: colors.gray600, marginTop: 8 }}
					>
						See how our platform works for both buyers and sellers
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
							For Sellers
						</MSText>
						<Steps>
							{sellerSteps.map((step) => (
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
							<div
								style={{
									width: "100px",
									height: "30px",
									borderRadius: 6,
									backgroundColor: colors.lightGray,
								}}
							></div>
							<div
								style={{
									padding: 10,
									backgroundColor: colors.mintGreen,
									flexDirection: "row",
									display: "flex",
									justifyContent: "space-between",
									marginTop: 10,
								}}
							>
								<MSText fontSize="14px" fontWeight="500">
									Transaction Summary
								</MSText>
								<MSText color={colors.green} fontSize="14px">
									Active
								</MSText>
							</div>

							<SummaryRow>
								<Label>Product</Label>
								<Value>Custom Logo Design</Value>
							</SummaryRow>
							<SummaryRow>
								<Label>Amount</Label>
								<Value>EGP 1,200</Value>
							</SummaryRow>
							<SummaryRow>
								<Label>Status</Label>
								<Value status="pending">Waiting for delivery</Value>
							</SummaryRow>
							<SummaryRow>
								<Label>Buyer</Label>
								<Value>Mohamed K.</Value>
							</SummaryRow>
							<ButtonWrapper>
								<MSButton title="Mark as Delivered" />
							</ButtonWrapper>
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
							For Buyers
						</MSText>
						<Steps>
							{buyerSteps.map((step) => (
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
							<MSText
								fontSize="16px"
								fontWeight="600"
								style={{ marginBottom: 8 }}
							>
								Custom Logo Design
							</MSText>
							<MSText
								fontSize="14px"
								color={colors.gray600}
								style={{ marginBottom: 12 }}
							>
								from Graphic Design Services
							</MSText>
							<SummaryRow>
								<Label>Amount:</Label>
								<Value>EGP 1,200</Value>
							</SummaryRow>
							<Notice>Product has been delivered</Notice>
							<MSButton title="Confirm Receipt" style={{ marginTop: 16 }} />
							<ReportLink>Report an issue</ReportLink>
						</Card>
					</motion.div>
				</Grid>
			</Container>
		</Section>
	);
};

export default ProductPreviewSection;

const Section = styled.section`
	/* background: ${colors.lightGray}; */
	padding: 64px 0;
`;

const Container = styled.div`
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 24px;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 48px;
	margin-top: 48px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

const Steps = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 32px;
`;

const Step = styled.li`
	display: flex;
	align-items: flex-start;
`;

const StepCircle = styled.div`
	width: 24px;
	height: 24px;
	background-color: ${colors.green};
	color: white;
	font-size: 12px;
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 9999px;
	margin-top: 4px;
`;

const StepContent = styled.div`
	margin-left: 12px;
`;

const Card = styled.div`
	background: white;
	border-radius: 16px;
	padding: 24px;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
`;

const SummaryRow = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 14px;
	margin-bottom: 8px;
`;

const Label = styled.span`
	color: ${colors.gray600};
`;

const Value = styled.span<{ status?: string }>`
	color: ${({ status }) =>
		status === "pending" ? colors.red : colors.semiBlack};
	font-weight: 500;
`;

const Notice = styled.div`
	margin-top: 16px;
	text-align: center;
	background-color: ${colors.mintGreen};
	color: ${colors.green};
	padding: 8px;
	border-radius: 8px;
	font-size: 14px;
`;

const ButtonWrapper = styled.div`
	margin-top: 16px;
`;

const ReportLink = styled.a`
	display: block;
	margin-top: 16px;
	text-align: center;
	color: ${colors.gray500};
	font-size: 14px;
	text-decoration: underline;
	cursor: pointer;
`;
