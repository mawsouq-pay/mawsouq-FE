import React from "react";
import { OrderPaymentSummaryProps } from "./types";
import { MainWrapper, RowDiv } from "./OrderPaymentSummary.styles";
import MSText from "../../../Shared/MSText";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { colors } from "@/constants/theme";
import PaymentIcon from "@mui/icons-material/Payment";
import MSPaymentSummarySection from "../../../Shared/MSPaymentSummarySection";
const OrderPaymentSummary = (props: OrderPaymentSummaryProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const { price, escrowFee, totalDue } = props;

	return (
		<MainWrapper>
			<RowDiv>
				<MSText
					fontSize="18px"
					mobileFontSize="16px"
					fontWeight="700"
					color={colors.black}
				>
					{text.paymentSummary}
				</MSText>
				<PaymentIcon />
			</RowDiv>

			<MSPaymentSummarySection
				price={price}
				escrowFee={escrowFee}
				totalDue={totalDue}
			/>
		</MainWrapper>
	);
};

export default OrderPaymentSummary;
