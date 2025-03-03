import React from "react";
import {
	BenefitsContainer,
	BenefitsGrid,
	BenefitItem,
	BenefitIcon,
	BenefitTitle,
	BenefitDescription,
} from "./MawsouqBenefits.styles";

import { ShieldCheck, ListOrdered, Vault, Loader } from "lucide-react";
import MSText from "@/components/Shared/MSText";
import { useLocaleStore } from "@/store/LocaleStore";
import { benefitsText } from "./types";

const MawsouqBenefits = () => {
	const { locale } = useLocaleStore();
	const text = benefitsText[locale];

	return (
		<BenefitsContainer id="benefits">
			{/* <MSText
				color="#222"
				fontSize="2rem"
				fontWeight="bold"
				style={{ paddingLeft: "20px", paddingRight: "20px" }}
			>
				{text.title}
			</MSText> */}
			<BenefitsGrid>
				<BenefitItem>
					<BenefitIcon>
						<ShieldCheck size={30} color="#01796f" />
					</BenefitIcon>
					<BenefitTitle style={{ textAlign: "start" }}>
						{text.safePaymentsTitle}
					</BenefitTitle>
					<BenefitDescription>
						{text.safePaymentsDescription}
					</BenefitDescription>
				</BenefitItem>

				<BenefitItem>
					<BenefitIcon>
						<ListOrdered size={30} color="#01796f" />
					</BenefitIcon>
					<BenefitTitle>{text.easyProcessTitle}</BenefitTitle>
					<BenefitDescription>{text.easyProcessDescription}</BenefitDescription>
				</BenefitItem>

				<BenefitItem>
					<BenefitIcon>
						<Vault size={30} color="#01796f" />
					</BenefitIcon>
					<BenefitTitle>{text.buyerProtectionTitle}</BenefitTitle>
					<BenefitDescription>
						{text.buyerProtectionDescription}
					</BenefitDescription>
				</BenefitItem>

				<BenefitItem>
					<BenefitIcon>
						<Loader size={30} color="#01796f" />
					</BenefitIcon>
					<BenefitTitle>{text.trustedSellersTitle}</BenefitTitle>
					<BenefitDescription>
						{text.trustedSellersDescription}
					</BenefitDescription>
				</BenefitItem>
			</BenefitsGrid>
		</BenefitsContainer>
	);
};

export default MawsouqBenefits;
