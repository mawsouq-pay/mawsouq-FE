import OrderHistory from "@/components/OrderHistory";
import OrderPaymentSummary from "@/components/OrderPaymentSummary";
import OrderProgress from "@/components/OrderProgress";
import { useFetchOrderById } from "@/hooks/orderHooks";
import React from "react";
import MSText from "@/components/MSText";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { colors } from "@/constants/theme";
import OrderAction from "@/components/OrderAction";
import OrderInfo from "@/components/OrderInfo";
import {
	MainWrapper,
	InfoSection,
	HistorySection,
	ActionBox,
} from "./OrderBody.styles";
import { OrderBodyProps } from "./types";

const OrderBody = (props: OrderBodyProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { orderId } = props;

	const { data, isLoading, error } = useFetchOrderById(orderId as string);
	console.log("-----------------ORDER DETAILS---------", data);
	return (
		<>
			<MSText
				fontSize={"40px"}
				fontWeight={"600"}
				color={colors.black}
				style={{ paddingBottom: 10 }}
			>
				{text.orderDetails}
			</MSText>
			<ActionBox>
				<MSText fontSize={"14px"} color={colors.red}>
					Action needed from buyer/seller
				</MSText>
			</ActionBox>

			<OrderProgress status={data?.order?.status || "PENDING"} />

			<MainWrapper>
				<InfoSection>
					<OrderAction
						isFetcherSeller={data?.order?.isFetcherSeller ?? false}
						orderStatus={data?.order.status ?? "PENDING"}
					/>
					<OrderInfo
						transactionTitle={data?.order?.transactionTitle || ""}
						itemName={data?.order?.itemName || ""}
						description={data?.order.description || ""}
						price={data?.order?.price || 0}
						status={data?.order?.status || "PENDING"}
						deliveryDate={data?.order?.deliveryDate || ""}
					/>

					<OrderPaymentSummary
						price={data?.order.price || 0}
						escrowFee={20}
						totalDue={(data?.order?.price || 0) + 20}
					/>
				</InfoSection>
				<HistorySection>
					<OrderHistory statusHistory={data?.order.statusHistory} />
				</HistorySection>
			</MainWrapper>
		</>
	);
};

export default OrderBody;
