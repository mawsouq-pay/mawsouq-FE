import React from "react";
import {
	BenefitsContainer,
	BenefitsGrid,
	BenefitItem,
	BenefitIcon,
} from "./MawsouqBenefits.styles";
import styled from "styled-components";

import { ShieldCheck, ListOrdered, Vault, Loader } from "lucide-react";
import MSText from "@/components/Shared/MSText";
import { useLocaleStore } from "@/store/LocaleStore";
import { arTexts, benefitsText, enTexts } from "./types";
import { colors } from "@/constants/theme";
import { textTr } from "@/constants/locales";

const MawsouqBenefits = () => {
	const { locale } = useLocaleStore();
	const text = benefitsText[locale];
	const textObj = locale === "en" ? enTexts : arTexts;

	return (
		<Wrapper>
			<MSText
				fontSize="24px"
				mobileFontSize="20px"
				fontWeight="bold"
				color={colors.black}
			>
				{textObj.title}
			</MSText>

			<MSText
				fontSize="16px"
				mobileFontSize="14px"
				fontWeight="400"
				color={colors.gray600}
				style={{ margin: "16px 4% 0" }}
			>
				{textObj.description}
			</MSText>

			<BenefitsContainer id="benefits">
				<BenefitsGrid>
					<BenefitItem>
						<BenefitIcon>
							<ShieldCheck size={28} strokeWidth={1.3} color={colors.green} />
						</BenefitIcon>
						<MSText
							fontWeight="600"
							fontSize="18px"
							color={colors.semiBlack}
							style={{
								marginBottom: 10,
								display: "flex",
								width: "100%",
							}}
						>
							{text.safePaymentsTitle}
						</MSText>
						<MSText fontSize="14px" color={colors.gray600}>
							{text.safePaymentsDescription}
						</MSText>
					</BenefitItem>

					<BenefitItem>
						<BenefitIcon>
							<ListOrdered size={28} strokeWidth={1.3} color={colors.green} />
						</BenefitIcon>
						<MSText
							fontWeight="600"
							fontSize="18px"
							color={colors.semiBlack}
							style={{ marginBottom: 10 }}
						>
							{text.easyProcessTitle}
						</MSText>
						<MSText fontSize="14px" color={colors.gray600}>
							{text.easyProcessDescription}
						</MSText>
					</BenefitItem>

					<BenefitItem>
						<BenefitIcon>
							<Vault size={28} strokeWidth={1.3} color={colors.green} />
						</BenefitIcon>
						<MSText
							fontWeight="600"
							fontSize="18px"
							color={colors.semiBlack}
							style={{ marginBottom: 10 }}
						>
							{text.buyerProtectionTitle}
						</MSText>
						<MSText fontSize="14px" color={colors.gray600}>
							{text.buyerProtectionDescription}
						</MSText>
					</BenefitItem>

					<BenefitItem>
						<BenefitIcon>
							<Loader size={28} strokeWidth={1.3} color={colors.green} />
						</BenefitIcon>
						<MSText
							fontWeight="600"
							fontSize="18px"
							color={colors.semiBlack}
							style={{ marginBottom: 10 }}
						>
							{text.trustedSellersTitle}
						</MSText>
						<MSText fontSize="14px" color={colors.gray600}>
							{text.trustedSellersDescription}
						</MSText>
					</BenefitItem>
				</BenefitsGrid>
			</BenefitsContainer>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding-top: 80px;
	padding-bottom: 80px;
	align-items: center;
	text-align: center;
	background-color: ${colors.mintGreen};
	margin-top: 50px;
`;

export default MawsouqBenefits;
