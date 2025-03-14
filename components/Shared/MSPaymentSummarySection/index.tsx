import React from "react";
import {
	MainWrapper,
	ItemsContainer,
	ItemWrapper,
	LabelValue,
	TextValue,
	TotalWrapper,
} from "./PaymentSummarySection.styles";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { PaymentSummarySectionProps } from "./types";
import { colors } from "@/constants/theme";
import { Divider } from "@mui/material";
import MSText from "../MSText";
import { AlertCircleIcon } from "lucide-react";

const MSPaymentSummarySection = ({
	price,
	escrowFee,
	totalDue,
}: PaymentSummarySectionProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const paymentItems = [
		{
			title: text.price,
			value: `EGP ${price}`,
			fontSize: "16px",
			fontWeight: "500",
			color: colors.black,
		},
		{
			title: text.escrowFee,
			value: `EGP ${escrowFee}`,
			fontSize: "16px",
			fontWeight: "500",
			color: colors.red,
			description: text.escrowFeeDescription,
		},
	];

	return (
		<MainWrapper>
			<ItemsContainer>
				{paymentItems.map((item, index) => (
					<ItemWrapper key={index}>
						<>
							<LabelValue>
								<MSText
									color={colors.black}
									fontSize={item.fontSize}
									fontWeight={item.fontWeight}
								>
									{item.title}
								</MSText>
								{item?.description && (
									<MSText
										fontSize={"12px"}
										fontWeight={"500"}
										color={colors.gray}
									>
										<AlertCircleIcon
											size={12}
											style={{ paddingTop: 2 }}
											color={colors.green}
										/>
										{item.description}
									</MSText>
								)}
							</LabelValue>
							<TextValue>
								<MSText
									fontSize={item.fontSize}
									fontWeight={item.fontWeight}
									color={item.color}
								>
									{item.value}
								</MSText>
							</TextValue>
						</>
					</ItemWrapper>
				))}
				<Divider style={{ margin: "10px 0" }} />

				<TotalWrapper>
					<LabelValue>
						<MSText fontSize="16px" fontWeight="700" color={colors.black}>
							{text.totalDue}
						</MSText>
					</LabelValue>
					<TextValue>
						<MSText fontSize="16px" fontWeight="700" color={colors.black}>
							EGP {totalDue}
						</MSText>
					</TextValue>
				</TotalWrapper>
			</ItemsContainer>
		</MainWrapper>
	);
};

export default MSPaymentSummarySection;
