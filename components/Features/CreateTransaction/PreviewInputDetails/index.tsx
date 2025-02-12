import React from "react";
import MSText from "@/components/Shared/MSText";
import { colors } from "@/constants/theme";
import { PreviewDetailsProps } from "./types";
import {
	MainWrapper,
	ItemsContainer,
	ItemWrapper,
	LabelValue,
	TextValue,
	ButtonsContainer,
	BackButton,
} from "./PreviewInputDetails.style";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSButton from "../../../Shared/MSButton";
import MSPaymentSummarySection from "@/components/Shared/MSPaymentSummarySection";

const PreviewDetailsInput = ({
	formData,
	onConfirm,
	onBack,
}: PreviewDetailsProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const details = [
		{ label: `${text.transactionTitle}:`, value: formData.transactionTitle },
		{ label: `${text.description}:`, value: formData.description },
		{ label: `${text.price}:`, value: `EGP ${formData.price}` },
		{ label: `${text.deliverDate}:`, value: formData.deliveryDate },
		{ label: `${text.buyerEmail}:`, value: formData.otherPartyEmail },
		{ label: `${text.buyerPhone}:`, value: formData.otherPartyPhone },
	];

	return (
		<MainWrapper>
			<ItemsContainer>
				{details.map((item, index) => (
					<ItemWrapper key={index}>
						<LabelValue>
							<MSText color={colors.LabelValue}>{item.label}</MSText>
						</LabelValue>
						<TextValue>
							<MSText color={colors.black}>{item.value}</MSText>
						</TextValue>
					</ItemWrapper>
				))}
			</ItemsContainer>
			<MSPaymentSummarySection
				price={parseInt(formData.price)}
				escrowFee={50}
				totalDue={parseInt(formData.price) + 50}
			/>

			<ButtonsContainer>
				<BackButton onClick={onBack}>{text.back}</BackButton>
				<MSButton
					title={text.createOrder}
					onClick={onConfirm}
					type="submit"
					style={{
						height: 40,
						width: "fit-content",
						alignSelf: "flex-end",
					}}
				/>
			</ButtonsContainer>
		</MainWrapper>
	);
};

export default PreviewDetailsInput;
