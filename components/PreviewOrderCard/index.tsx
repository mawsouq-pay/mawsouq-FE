import React from "react";
import {
	FormField,
	FormWrapper,
	PreviewText,
	PreviewTextArea,
} from "./PreviewOrderCard.styles";
import { colors } from "../../constants/theme";
import MSButton from "../MSButton";
import MSText from "../MSText";
import PaymentSummarySection from "../PaymentSummarySection";
import ErrorAndLoadingWrapper from "../ErrorAndLoadingWrapper";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";

const PreviewOrderCard = (props: PreviewOrderCardProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const {
		transactionTitle,
		itemName,
		description,
		quantity,
		deliveryDate,
		otherPartyEmail,
		otherPartyPhone,
		error,
		isPending,
	} = props;
	return (
		<ErrorAndLoadingWrapper
			isLoading={isPending}
			error={error}
			displayErrorReason={true}
		>
			<FormWrapper>
				<MSText
					fontSize="35px"
					mobileFontSize="24px"
					fontWeight="600"
					style={{ marginBottom: "16px", textAlign: "center" }}
				>
					Preview Order Summary
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

				<FormField>
					<MSText fontSize="14px" fontWeight="500" color={colors.gray}>
						Other Party Email
					</MSText>
					<PreviewText>{otherPartyEmail}</PreviewText>
				</FormField>

				<FormField>
					<MSText fontSize="14px" fontWeight="500" color={colors.gray}>
						Other Party Phone
					</MSText>
					<PreviewText>{otherPartyPhone}</PreviewText>
				</FormField>
				<PaymentSummarySection price={40} escrowFee={20} totalDue={60} />

				<MSButton title="Confirm" style={{ width: "100%" }} />
			</FormWrapper>
		</ErrorAndLoadingWrapper>
	);
};

export default PreviewOrderCard;
