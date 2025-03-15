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
import { Nb1Icon } from "@/assets/icons";

export const securityFeatures = {
	en: [
		{
			icon: <CreditCard size={25} color="#01796f" />,
			title: "Pay",
			description:
				"Make secure payments through Mawsouq, ensuring your money is protected.",
		},
		{
			icon: <Lock color="#01796f" />,
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
		<div
			id="howItWorks"
			style={{
				backgroundColor: "#ecf9ee",
				paddingTop: "80px",
				borderRadius: 40,
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<ScribbledCircleText text="A transaction in 4 steps" />
			</div>
			<FeaturesContainer>
				{selectedFeatures.map((feature, index) => (
					<FeatureItem key={index}>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								gap: 10,
								alignItems: "center",
							}}
						>
							<FeatureIcon>{feature.icon}</FeatureIcon>
							<FeatureTitle>{feature.title}</FeatureTitle>
						</div>
						<Divider />

						<FeatureDescription>{feature.description}</FeatureDescription>
					</FeatureItem>
				))}
			</FeaturesContainer>
		</div>
	);
};

export default HowItWorks;
