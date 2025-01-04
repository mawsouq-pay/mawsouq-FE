import React from "react";
import { OrderPaymentSummaryProps } from "./types";
import { MainWrapper } from "./OrderPaymentSummary.styles";
import PaymentSummarySection from "../PaymentSummarySection";
import MSText from "../MSText";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { colors } from "@/constants/theme";

const OrderPaymentSummary = (props: OrderPaymentSummaryProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const { price, escrowFee, totalDue } = props;

	return (
		<MainWrapper>
			<MSText fontSize={"16px"} fontWeight={"600"} color={colors.gray}>
				{text.orderDetails}
			</MSText>
			<PaymentSummarySection
				price={price}
				escrowFee={totalDue - price}
				totalDue={totalDue}
			/>
		</MainWrapper>
	);
};

export default OrderPaymentSummary;
