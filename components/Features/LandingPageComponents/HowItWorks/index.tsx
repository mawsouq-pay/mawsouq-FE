import React from "react";
import {
	FeaturesContainer,
	FeatureItem,
	FeatureIcon,
} from "./HowItWorks.styles";

import { useLocaleStore } from "@/store";
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
		description: "The seller submits the details of the product or service.",
		descriptionAr: "البائع بيحدد تفاصيل الطلب.",
	},
	{
		icon: <HoldIcon color="#01796f" />,
		description:
			"The buyer pays through Mawsouq, and the money is held securely.",
		descriptionAr: "الـمشتري بيدفع من خلال Mawsouq، والفلوس بتتأمن.",
	},
	{
		icon: <DeliverIcon color="#01796f" />,
		description: "The seller prepares and delivers the order.",
		descriptionAr: "البائع بيجهز وبيسلّم المنتج أو الخدمة.",
	},
	{
		icon: <ApproveIcon color="#01796f" />,
		description: "The buyer confirms that everything was delivered as agreed.",
		descriptionAr: "الـمشتري بيأكد إن الطلب اتسلم زي ما اتفقوا.",
	},
	{
		icon: <ReleaseIcon color="#01796f" />,
		description: "Mawsouq safely releases the payment to the seller.",
		descriptionAr: "Mawsouq بيحوّل الفلوس للبائع بأمان.",
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
			style={
				{
					// backgroundColor: "#ecf9ee",
					// paddingTop: "70px",
				}
			}
		>
			{/* <div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<MSText
					fontWeight="bold"
					fontSize="2rem"
					mobileFontSize="22px"
					color={colors.darkGreen}
					style={{ textAlign: "center" }}
				>
					{text.howMawsouqActs}
				</MSText>
			</div> */}
			<div>
				<MSText
					fontSize="24px"
					mobileFontSize="20px"
					fontWeight="bold"
					color={colors.black}
					style={{
						display: "inline-block",
						borderBottom: `3px solid ${colors.green}`,
						paddingBottom: "5px",
						marginLeft: "4%",
					}}
				>
					{text.howItWorks}
				</MSText>{" "}
				<FeaturesContainer>
					{selectedFeatures.map((feature, index) => (
						<React.Fragment key={index}>
							<FeatureItem>
								<FeatureIcon>{feature.icon}</FeatureIcon>
								<MSText
									fontSize="20px"
									// fontWeight="600"
									color={"#2C2D2D"}
									style={{ maxWidth: "300" }}
								>
									{locale == "ar" ? feature.descriptionAr : feature.description}
								</MSText>
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
