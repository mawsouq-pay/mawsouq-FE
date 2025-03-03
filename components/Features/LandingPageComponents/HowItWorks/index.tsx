// import React from "react";
// import {
// 	HowItWorksContainer,
// 	FeaturesGrid,
// 	FeatureCard,
// 	FeatureContent,
// 	FeatureImage,
// } from "./HowItWorks.styles";
// import Image from "next/image";
// import Step1 from "@/assets/images/step1.png";
// import Step2 from "@/assets/images/step2.png";
// import Step3 from "@/assets/images/step3.png";
// import Step4 from "@/assets/images/step4.png";

// import MSText from "@/components/Shared/MSText";
// import ScribbledCircleText from "../ScribbledCircleText";
// import { useLocaleStore } from "@/store/LocaleStore";
// import { howItWorksText } from "./types";

// const HowItWorks = () => {
// 	const { locale } = useLocaleStore();
// 	const text = howItWorksText[locale];

// 	return (
// 		<HowItWorksContainer id="howItWorks">
// 			<ScribbledCircleText text={text.title} />
// 			<FeaturesGrid>
// 				{/* Step 1 */}
// 				<FeatureCard>
// 					<FeatureImage>
// 						<Image src={Step1} alt={text.step1Title} width={200} height={100} />
// 					</FeatureImage>
// 					<FeatureContent>
// 						<MSText
// 							fontSize="16px"
// 							mobileFontSize="16px"
// 							fontWeight={"600"}
// 							style={{
// 								textAlign: "left",
// 							}}
// 						>
// 							{text.step1Title}
// 						</MSText>
// 						<MSText
// 							fontSize="16px"
// 							mobileFontSize="14px"
// 							style={{
// 								textAlign: "left",
// 							}}
// 						>
// 							{text.step1Description}
// 						</MSText>
// 					</FeatureContent>
// 				</FeatureCard>

// 				{/* Step 2 */}
// 				<FeatureCard>
// 					<FeatureImage>
// 						<Image src={Step2} alt={text.step2Title} width={200} height={100} />
// 					</FeatureImage>
// 					<FeatureContent>
// 						<MSText
// 							fontSize="16px"
// 							mobileFontSize="16px"
// 							fontWeight={"600"}
// 							style={{
// 								textAlign: "left",
// 							}}
// 						>
// 							{text.step2Title}
// 						</MSText>
// 						<MSText
// 							fontSize="16px"
// 							mobileFontSize="14px"
// 							style={{
// 								textAlign: "left",
// 							}}
// 						>
// 							{text.step2Description}
// 						</MSText>
// 					</FeatureContent>
// 				</FeatureCard>

// 				{/* Step 3 */}
// 				<FeatureCard>
// 					<FeatureImage>
// 						<Image src={Step3} alt={text.step3Title} width={200} height={100} />
// 					</FeatureImage>
// 					<FeatureContent>
// 						<MSText
// 							fontSize="16px"
// 							mobileFontSize="16px"
// 							fontWeight={"600"}
// 							style={{
// 								textAlign: "left",
// 							}}
// 						>
// 							{text.step3Title}
// 						</MSText>
// 						<MSText
// 							fontSize="16px"
// 							mobileFontSize="14px"
// 							style={{
// 								textAlign: "left",
// 							}}
// 						>
// 							{text.step3Description}
// 						</MSText>
// 					</FeatureContent>
// 				</FeatureCard>

// 				{/* Step 4 */}
// 				<FeatureCard>
// 					<FeatureImage>
// 						<Image src={Step4} alt={text.step4Title} width={200} height={100} />
// 					</FeatureImage>
// 					<FeatureContent>
// 						<MSText
// 							fontSize="16px"
// 							mobileFontSize="16px"
// 							fontWeight={"600"}
// 							style={{
// 								textAlign: "left",
// 							}}
// 						>
// 							{text.step4Title}
// 						</MSText>
// 						<MSText
// 							fontSize="16px"
// 							mobileFontSize="14px"
// 							style={{
// 								textAlign: "left",
// 							}}
// 						>
// 							{text.step4Description}
// 						</MSText>
// 					</FeatureContent>
// 				</FeatureCard>
// 			</FeaturesGrid>
// 		</HowItWorksContainer>
// 	);
// };

// export default HowItWorks;
import React from "react";
import {
	FeaturesContainer,
	FeatureItem,
	FeatureIcon,
	FeatureTitle,
	FeatureDescription,
	Divider,
} from "./HowItWorks.styles";
import { CreditCard, Lock, PackageCheck, ExternalLink } from "lucide-react";
import MSText from "@/components/Shared/MSText";
import { useLocaleStore } from "@/store";
import ScribbledCircleText from "../ScribbledCircleText";

export const securityFeatures = {
	en: [
		{
			icon: <CreditCard size={25} color="#01796f" />,
			title: "Pay",
			description:
				"Make secure payments through Mawsouq, ensuring your money is protected.",
		},
		{
			icon: <Lock size={25} color="#01796f" />,
			title: "Hold",
			description:
				"Your payment is held securely until the seller delivers as agreed.",
		},
		{
			icon: <PackageCheck size={25} color="#01796f" />,
			title: "Confirm",
			description:
				"Once you receive the order as expected, confirm the delivery.",
		},
		{
			icon: <ExternalLink size={25} color="#01796f" />,
			title: "Release",
			description:
				"After confirmation, the payment is safely released to the seller.",
		},
	],
	ar: [
		{
			icon: <CreditCard size={25} color="#01796f" />,
			title: "ادفع",
			description: "قم بالدفع بأمان عبر Mawsouq لضمان حماية أموالك.",
		},
		{
			icon: <Lock size={25} color="#01796f" />,
			title: "احتجز",
			description:
				"يتم الاحتفاظ بالدفع بأمان حتى يقوم البائع بالتسليم كما هو متفق عليه.",
		},
		{
			icon: <PackageCheck size={25} color="#01796f" />,
			title: "أكد",
			description: "بمجرد استلام الطلب كما هو متوقع، قم بتأكيد التسليم.",
		},
		{
			icon: <ExternalLink size={25} color="#01796f" />,
			title: "حرر",
			description: "بعد التأكيد، يتم إصدار الدفعة بأمان إلى البائع.",
		},
	],
};

const HowItWorks = () => {
	const { locale } = useLocaleStore();
	const selectedFeatures = securityFeatures[locale];
	return (
		<div id="howItWorks">
			<div
				style={{
					display: "flex",
					marginTop: "100px",
					justifyContent: "center",
				}}
			>
				<ScribbledCircleText text="A transaction in 4 steps" />
			</div>
			<FeaturesContainer>
				{selectedFeatures.map((feature, index) => (
					<FeatureItem key={index}>
						<FeatureIcon>{feature.icon}</FeatureIcon>
						<Divider />
						<FeatureTitle>{feature.title}</FeatureTitle>
						<FeatureDescription>{feature.description}</FeatureDescription>
					</FeatureItem>
				))}
			</FeaturesContainer>
		</div>
	);
};

export default HowItWorks;
