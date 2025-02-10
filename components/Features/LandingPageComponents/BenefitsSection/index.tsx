import React from "react";
import MSText from "@/components/Shared/MSText";
import { colors } from "@/constants/theme";
import {
	BenefitsWrapper,
	BenefitsTitle,
	BenefitsContainer,
	BenefitCard,
	BenefitIcon,
	BenefitsDescription,
} from "./BenefitsSection.styles";
import { benefits } from "./types";

const BenefitsSection = () => {
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
