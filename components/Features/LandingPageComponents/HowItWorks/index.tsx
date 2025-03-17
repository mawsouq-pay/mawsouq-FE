import React from "react";
import {
	FeaturesContainer,
	FeatureItem,
	FeatureIcon,
	FeatureDescription,
} from "./HowItWorks.styles";
import {
	CreditCard,
	Lock,
	PackageCheck,
	ExternalLink,
	ClipboardList,
} from "lucide-react";
import { useLocaleStore } from "@/store";
import ScribbledCircleText from "../ScribbledCircleText";
import Image from "next/image";
import ArrowScribble from "@/assets/images/ArrowScribbled.png";
import {
	ApproveIcon,
	ArrowDownScribbledIcon,
	DeliverIcon,
	FormIcon,
	HoldIcon,
	ReleaseIcon,
} from "@/assets/icons";
import { textTr } from "@/constants/locales";
import MSText from "@/components/Shared/MSText";
import { colors } from "@/constants/theme";
import { useMediaQuery } from "@mui/material";

export const howItWorksFeatures = {
	en: [
		{
			icon: <FormIcon color="#01796f" />,
			description: "The seller adds the details of the product or service.",
		},
		{
			icon: <HoldIcon color="#01796f" />,
			description: "The buyer pays using Mawsouq, and is held safely.",
		},
		{
			icon: <DeliverIcon color="#01796f" />,
			description: "The seller delivers the product or service.",
		},
		{
			icon: <ApproveIcon color="#01796f" />,
			description: "The buyer confirms receiving product as described.",
		},
		{
			icon: <ReleaseIcon color="#01796f" />,
			description: "Mawsouq releases the money to the seller safely.",
		},
	],
	ar: [
		{
			icon: <ClipboardList size={40} color="#01796f" />,
			description: "يقوم البائع بإضافة المنتج.",
		},
		{
			icon: <CreditCard size={40} color="#01796f" />,
			description: "يدفع المشتري باستخدام Mawsouq.",
		},
		{
			icon: <Lock size={40} color="#01796f" />,
			description: "البائع يسلم المنتج أو الخدمة	",
		},
		{
			icon: <PackageCheck size={40} color="#01796f" />,
			description: "الـمشتري يوافق على الاستلام",
		},
		{
			icon: <ExternalLink size={40} color="#01796f" />,
			description: "Mawsouq يحوّل الفلوس للبائع",
		},
	],
};

const HowItWorks = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const selectedFeatures = howItWorksFeatures[locale];
	const isMobile = useMediaQuery("(max-width: 925px)");

	return (
		<div
			id="howItWorks"
			style={{
				backgroundColor: `${colors.backgroundColor}`,
				paddingTop: "70px",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<MSText
					fontWeight="600"
					fontSize="2rem"
					mobileFontSize="22px"
					color={"#01796f"}
					style={{ textAlign: "center" }}
				>
					{text.howMawsouqActs}
				</MSText>
			</div>
			<div style={{ marginTop: 15 }}>
				<FeaturesContainer>
					{selectedFeatures.map((feature, index) => (
						<React.Fragment key={index}>
							<FeatureItem>
								<FeatureIcon>{feature.icon}</FeatureIcon>
								<FeatureDescription>{feature.description}</FeatureDescription>
							</FeatureItem>
							{index < selectedFeatures.length - 1 &&
								(!isMobile ? (
									<Image
										src={ArrowScribble}
										alt="Release"
										height={20}
										width={100}
										style={{
											marginTop: 10,
											transform: locale === "ar" ? "rotate(180deg)" : "none",
										}}
									/>
								) : (
									<ArrowDownScribbledIcon />
								))}
						</React.Fragment>
					))}
				</FeaturesContainer>
			</div>
		</div>
	);
};

export default HowItWorks;
