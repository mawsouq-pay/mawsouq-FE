import React from "react";
import { OrderPaymentSummaryProps } from "./types";
import { MainWrapper, RowDiv } from "./OrderPaymentSummary.styles";
import PaymentSummarySection from "../PaymentSummarySection";
import MSText from "../MSText";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { colors } from "@/constants/theme";
import PaymentIcon from "@mui/icons-material/Payment";
const OrderPaymentSummary = (props: OrderPaymentSummaryProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const { price, escrowFee, totalDue } = props;

	return (
		<MainWrapper>
			<RowDiv>
				<MSText fontSize={"16px"} fontWeight={"600"} color={colors.gray}>
					{text.paymentSummary}
				</MSText>
				<PaymentIcon />
			</RowDiv>

			<PaymentSummarySection
				price={price}
				escrowFee={escrowFee}
				totalDue={totalDue}
			/>
		</MainWrapper>
	);
};

export default OrderPaymentSummary;
