import React from "react";
import {
	FormField,
	FormWrapper,
	PaymentSummaryDiv,
	PreviewText,
	PreviewTextArea,
} from "./PreviewOrderCard.styles";
import { colors } from "../../../../constants/theme";
import MSText from "../../../Shared/MSText";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSButton from "../../../Shared/MSButton";
import PaymentSummarySection from "../../../Shared/MSPaymentSummarySection";

const PreviewOrderCard = (props: PreviewOrderCardProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const {
		transactionTitle,
		itemName,
		description,
		quantity,
		deliveryDate,
		onConfirmPress,
	} = props;
	return (
		<FormWrapper>
			<MSText
				fontSize="35px"
				mobileFontSize="24px"
				fontWeight="600"
				style={{
					marginBottom: "25px",
					marginTop: "12px",
					textAlign: "center",
				}}
			>
				{text.previewOrder}
			</MSText>

			<FormField>
				<MSText fontSize="14px" fontWeight="500" color={colors.gray}>
					{text.transactionTitle}
				</MSText>
				<PreviewText>{transactionTitle}</PreviewText>
			</FormField>

			<FormField>
				<MSText fontSize="14px" fontWeight="500" color={colors.gray}>
					{text.itemName}
				</MSText>
				<PreviewText>{itemName}</PreviewText>
			</FormField>

			<FormField>
				<MSText fontSize="14px" fontWeight="500" color={colors.gray}>
					{text.description}
				</MSText>
				<PreviewTextArea>{description}</PreviewTextArea>
			</FormField>

			<FormField>
				<MSText fontSize="14px" fontWeight="500" color={colors.gray}>
					{text.quantity}
				</MSText>
				<PreviewText>{quantity}</PreviewText>
			</FormField>

			<FormField>
				<MSText fontSize="14px" fontWeight="500" color={colors.gray}>
					{text.deliverDate}
				</MSText>
				<PreviewText>{deliveryDate}</PreviewText>
			</FormField>

			<PaymentSummaryDiv>
				<MSText fontSize={"16px"} mobileFontSize={"14px"} color={colors.gray}>
					{text.paymentSummary}
				</MSText>
				<PaymentSummarySection price={40} escrowFee={20} totalDue={60} />
			</PaymentSummaryDiv>

			<MSButton
				title={text.approve}
				style={{ width: "100%" }}
				onClick={onConfirmPress}
			/>
		</FormWrapper>
	);
};

export default PreviewOrderCard;
