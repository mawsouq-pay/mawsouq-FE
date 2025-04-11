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
import { benefitsText } from "./types";
import { colors } from "@/constants/theme";
import { textTr } from "@/constants/locales";

const MawsouqBenefits = () => {
	const { locale } = useLocaleStore();
	const text = benefitsText[locale];
	const text2 = textTr(locale);

	return (
		<Wrapper>
			<MSText
				fontSize="24px"
				mobileFontSize="20px"
				fontWeight="bold"
				color={colors.black}
			>
				{text2.mawsouqBenefits}
			</MSText>

			<MSText
				fontSize="16px"
				mobileFontSize="14px"
				fontWeight="400"
				color={colors.gray600}
				style={{ margin: "16px 4% 0" }}
			>
				{text2.howItWorksDescription}
			</MSText>

			<BenefitsContainer id="benefits">
				<BenefitsGrid>
					<BenefitItem>
						<BenefitIcon>
							<ShieldCheck size={30} color={colors.green} />
						</BenefitIcon>
						<MSText
							fontWeight="600"
							fontSize="16px"
							color={colors.semiBlack}
							style={{ marginTop: 10, marginBottom: 5 }}
						>
							{text.safePaymentsTitle}
						</MSText>
						<MSText fontSize="14px" color={colors.gray600}>
							{text.safePaymentsDescription}
						</MSText>
					</BenefitItem>

					<BenefitItem>
						<BenefitIcon>
							<ListOrdered size={30} color={colors.green} />
						</BenefitIcon>
						<MSText
							fontWeight="600"
							fontSize="16px"
							color={colors.semiBlack}
							style={{ marginTop: 10, marginBottom: 5 }}
						>
							{text.easyProcessTitle}
						</MSText>
						<MSText fontSize="14px" color={colors.gray600}>
							{text.easyProcessDescription}
						</MSText>
					</BenefitItem>

					<BenefitItem>
						<BenefitIcon>
							<Vault size={30} color={colors.green} />
						</BenefitIcon>
						<MSText
							fontWeight="600"
							fontSize="16px"
							color={colors.semiBlack}
							style={{ marginTop: 10, marginBottom: 5 }}
						>
							{text.buyerProtectionTitle}
						</MSText>
						<MSText fontSize="14px" color={colors.gray600}>
							{text.buyerProtectionDescription}
						</MSText>
					</BenefitItem>

					<BenefitItem>
						<BenefitIcon>
							<Loader size={30} color={colors.green} />
						</BenefitIcon>
						<MSText
							fontWeight="600"
							fontSize="16px"
							color={colors.semiBlack}
							style={{ marginTop: 10, marginBottom: 5 }}
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
