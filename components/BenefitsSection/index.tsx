import React from "react";
import styled from "styled-components";
import MSText from "@/components/MSText";
import { colors } from "@/constants/theme";
import {
	BenefitsWrapper,
	BenefitsTitle,
	BenefitsContainer,
	BenefitCard,
	BenefitIcon,
	BenefitsDescription,
} from "./BenefitsSection.styles";

const BenefitsSection = () => {
	const benefits = [
		{
			icon: "🔒",
			title: "Secure Transactions",
			description: "Your payments are protected until the deal is complete.",
		},
		{
			icon: "🚀",
			title: "Fast and Easy",
			description: "Set up transactions in just a few minutes.",
		},
		{
			icon: "📊",
			title: "Real-Time Tracking",
			description: "Monitor the status of your transactions anytime, anywhere.",
		},
		{
			icon: "🤝",
			title: "Trustworthy",
			description: "Building trust between buyers and sellers.",
		},
	];

	return (
		<BenefitsWrapper>
			<BenefitsTitle>Why Choose Us?</BenefitsTitle>
			<BenefitsContainer>
				{benefits.map((benefit, index) => (
					<BenefitCard key={index}>
						<BenefitIcon>{benefit.icon}</BenefitIcon>
						<MSText fontSize="1.5rem" fontWeight="600" color={colors.white}>
							{benefit.title}
						</MSText>
						<BenefitsDescription>{benefit.description}</BenefitsDescription>
					</BenefitCard>
				))}
			</BenefitsContainer>
		</BenefitsWrapper>
	);
};

export default BenefitsSection;
