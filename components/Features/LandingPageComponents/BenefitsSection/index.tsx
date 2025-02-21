import React from "react";
import MSText from "@/components/Shared/MSText";
import { colors } from "@/constants/theme";
import {
	BenefitsWrapper,
	BenefitsContainer,
	BenefitCard,
	BenefitIcon,
	BenefitsDescription,
} from "./BenefitsSection.styles";
import { benefits } from "./types";
import ScribbledCircleText from "../ScribbledCircleText";
import MSAnimatedDiv from "@/components/Shared/MSAnimated/MSAnimatedDiv";

const BenefitsSection = () => {
	return (
		<MSAnimatedDiv>
			<BenefitsWrapper id="benefits">
				<div style={{ paddingBottom: 50 }}>
					<ScribbledCircleText text="Why Choose Us?" />
				</div>
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
		</MSAnimatedDiv>
	);
};

export default BenefitsSection;
