import React from "react";
import MSText from "../MSText";
import {
	MainWrapper,
	ItemsContainer,
	ItemWrapper,
	LabelValue,
	TextValue,
	Divider,
	TotalWrapper,
} from "./PaymentSummarySection.styles";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { PaymentSummarySectionProps } from "./types";
import { colors } from "@/constants/theme";

const PaymentSummarySection = (props: PaymentSummarySectionProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { amount, escrowFee, totalDue } = props;

	const paymentItems = [
		{
			title: text.price,
			value: `EGP ${amount}`,
			fontWeight: "600",
			fontSize: "16px",
			mobileFontSize: "14px",
			color: colors.gray,
		},
		{
			title: text.escrowFee,
			value: `EGP ${escrowFee}`,
			fontWeight: "400",
			fontSize: "16px",
			mobileFontSize: "14px",
			colors: colors.red,
		},
	];

	return (
		<MainWrapper>
			<ItemsContainer>
				{paymentItems.map((item, index) => (
					<ItemWrapper key={index}>
						<LabelValue>
							<MSText
								color={colors.black}
								fontSize={item.fontSize}
								mobileFontSize={item.mobileFontSize}
								fontWeight={item.fontWeight}
							>
								{item.title}
							</MSText>
						</LabelValue>
						<TextValue>
							<MSText
								color={item.colors}
								fontSize={item.fontSize}
								mobileFontSize={item.mobileFontSize}
								fontWeight={item.fontWeight}
							>
								{item.value}
							</MSText>
						</TextValue>
					</ItemWrapper>
				))}
				<Divider />
				<TotalWrapper>
					<LabelValue>
						<MSText fontSize="18px" fontWeight="bold">
							{text.totalDue}
						</MSText>
					</LabelValue>
					<TextValue>
						<MSText fontSize="18px" fontWeight="bold" color={colors.black}>
							EGP {totalDue}
						</MSText>
					</TextValue>
				</TotalWrapper>
			</ItemsContainer>
		</MainWrapper>
	);
};

export default PaymentSummarySection;
