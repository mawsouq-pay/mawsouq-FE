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

export const howItWorksFeatures = [
	{
		icon: <FormIcon color="#01796f" />,
		description: "The seller adds the details of the product or service.",
		descriptionAr: "يقوم البائع بإضافة المنتج.",
	},
	{
		icon: <HoldIcon color="#01796f" />,
		description: "The buyer pays using Mawsouq, and is held safely.",
		descriptionAr: "يدفع المشتري باستخدام Mawsouq.",
	},
	{
		icon: <DeliverIcon color="#01796f" />,
		description: "The seller delivers the product or service.",
		descriptionAr: "البائع يسلم المنتج أو الخدمة	",
	},
	{
		icon: <ApproveIcon color="#01796f" />,
		description: "The buyer confirms receiving product as described.",
		descriptionAr: "الـمشتري يوافق على الاستلام",
	},
	{
		icon: <ReleaseIcon color="#01796f" />,
		description: "Mawsouq releases the money to the seller safely.",
		descriptionAr: "Mawsouq يحوّل الفلوس للبائع",
	},
];

const HowItWorks = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const selectedFeatures = howItWorksFeatures;
	const isMobile = useMediaQuery("(max-width: 925px)");

	return (
		<div
			id="howItWorks"
			style={{
				backgroundColor: "#ecf9ee",
				paddingTop: "70px",
				borderRadius: 40,
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<MSText
					fontWeight="bold"
					fontSize="2rem"
					mobileFontSize="22px"
					color={colors.green}
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
								<FeatureDescription>
									{locale == "ar" ? feature.descriptionAr : feature.description}
								</FeatureDescription>
							</FeatureItem>
							{index < selectedFeatures.length - 1 &&
								(!isMobile ? (
									<ArrowDownScribbledIcon
										style={{
											transform:
												locale === "ar" ? "rotate(90deg)" : "rotate(-90deg)",
											marginTop: 10,
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
