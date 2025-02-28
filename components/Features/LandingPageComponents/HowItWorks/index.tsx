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

const HowItWorks = () => {
	return (
		<HowItWorksContainer>
			<ScribbledCircleText text={"How Mawsouq Works"} />
			<FeaturesGrid>
				{/* Feature 1: Secure Deposits */}
				<FeatureCard>
					<FeatureImage>
						<Image src={Step1} alt="Secure Deposits" width={200} height={100} />
					</FeatureImage>
					<FeatureContent>
						<MSText fontSize="16px" mobileFontSize="16px" fontWeight={"600"}>
							Buyer and Seller agree on terms
						</MSText>

						<MSText fontSize="16px" mobileFontSize="14px">
							The seller creates an order containing details of the item and the
							price.
						</MSText>
					</FeatureContent>
				</FeatureCard>

				{/* Feature 2: Track and Manage */}
				<FeatureCard>
					<FeatureImage>
						<Image
							src={Step2}
							alt="Track and Manage"
							width={200}
							height={100}
						/>
					</FeatureImage>
					<FeatureContent>
						<MSText fontSize="16px" mobileFontSize="16px" fontWeight={"600"}>
							Buyer deposits money into mawsouq's account
						</MSText>
						<MSText fontSize="16px" mobileFontSize="14px">
							The buyer deposits money into mawsouq's secure account ensuring
							both parties are protected.
						</MSText>
					</FeatureContent>
				</FeatureCard>

				<FeatureCard>
					<FeatureImage>
						<Image
							src={Step3}
							alt="Track and Manage"
							width={200}
							height={100}
						/>
					</FeatureImage>
					<FeatureContent>
						<MSText fontSize="16px" mobileFontSize="16px" fontWeight={"600"}>
							Seller Delivers the item
						</MSText>
						<MSText fontSize="16px" mobileFontSize="14px">
							Once money is secured , seller delivers the item as described in
							the order.
						</MSText>
					</FeatureContent>
				</FeatureCard>

				{/* Feature 4: Confirmation & Security */}
				<FeatureCard>
					<FeatureImage>
						<Image
							src={Step4}
							alt="Secure Confirmation"
							width={200}
							height={100}
						/>
					</FeatureImage>
					<FeatureContent>
						<MSText fontSize="16px" mobileFontSize="16px" fontWeight={"600"}>
							Buyer Releases money
						</MSText>
						<MSText fontSize="16px" mobileFontSize="14px">
							Once the order is delivered as agreed, release the deposit. If
							there’s an issue, Mawsouq ensures both are protected.
						</MSText>
					</FeatureContent>
				</FeatureCard>
			</FeaturesGrid>
		</HowItWorksContainer>
	);
};

export default HowItWorks;
