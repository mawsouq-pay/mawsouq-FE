import React from "react";
import {
	HowItWorksContainer,
	FeaturesGrid,
	FeatureCard,
	FeatureContent,
	FeatureImage,
} from "./HowItWorks.styles";
import Image from "next/image";
import Step1 from "@/assets/images/step1.png";
import Step2 from "@/assets/images/step2.png";
import Step3 from "@/assets/images/step3.png";
import Step4 from "@/assets/images/step4.png";

import MSText from "@/components/Shared/MSText";
import ScribbledCircleText from "../ScribbledCircleText";
import { useLocaleStore } from "@/store/LocaleStore";
import { howItWorksText } from "./types";

const HowItWorks = () => {
	const { locale } = useLocaleStore();
	const text = howItWorksText[locale];

	return (
		<HowItWorksContainer id="howItWorks">
			<ScribbledCircleText text={text.title} />
			<FeaturesGrid>
				{/* Step 1 */}
				<FeatureCard>
					<FeatureImage>
						<Image src={Step1} alt={text.step1Title} width={200} height={100} />
					</FeatureImage>
					<FeatureContent>
						<MSText
							fontSize="16px"
							mobileFontSize="16px"
							fontWeight={"600"}
							style={{
								textAlign: "left",
							}}
						>
							{text.step1Title}
						</MSText>
						<MSText
							fontSize="16px"
							mobileFontSize="14px"
							style={{
								textAlign: "left",
							}}
						>
							{text.step1Description}
						</MSText>
					</FeatureContent>
				</FeatureCard>

				{/* Step 2 */}
				<FeatureCard>
					<FeatureImage>
						<Image src={Step2} alt={text.step2Title} width={200} height={100} />
					</FeatureImage>
					<FeatureContent>
						<MSText
							fontSize="16px"
							mobileFontSize="16px"
							fontWeight={"600"}
							style={{
								textAlign: "left",
							}}
						>
							{text.step2Title}
						</MSText>
						<MSText
							fontSize="16px"
							mobileFontSize="14px"
							style={{
								textAlign: "left",
							}}
						>
							{text.step2Description}
						</MSText>
					</FeatureContent>
				</FeatureCard>

				{/* Step 3 */}
				<FeatureCard>
					<FeatureImage>
						<Image src={Step3} alt={text.step3Title} width={200} height={100} />
					</FeatureImage>
					<FeatureContent>
						<MSText
							fontSize="16px"
							mobileFontSize="16px"
							fontWeight={"600"}
							style={{
								textAlign: "left",
							}}
						>
							{text.step3Title}
						</MSText>
						<MSText
							fontSize="16px"
							mobileFontSize="14px"
							style={{
								textAlign: "left",
							}}
						>
							{text.step3Description}
						</MSText>
					</FeatureContent>
				</FeatureCard>

				{/* Step 4 */}
				<FeatureCard>
					<FeatureImage>
						<Image src={Step4} alt={text.step4Title} width={200} height={100} />
					</FeatureImage>
					<FeatureContent>
						<MSText
							fontSize="16px"
							mobileFontSize="16px"
							fontWeight={"600"}
							style={{
								textAlign: "left",
							}}
						>
							{text.step4Title}
						</MSText>
						<MSText
							fontSize="16px"
							mobileFontSize="14px"
							style={{
								textAlign: "left",
							}}
						>
							{text.step4Description}
						</MSText>
					</FeatureContent>
				</FeatureCard>
			</FeaturesGrid>
		</HowItWorksContainer>
	);
};

export default HowItWorks;
