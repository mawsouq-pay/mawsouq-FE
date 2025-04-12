import { useFetchOrderById } from "@/hooks/orderHooks";
import React from "react";
import MSText from "@/components/Shared/MSText";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { colors } from "@/constants/theme";
import {
	MainWrapper,
	InfoSection,
	HistorySection,
	TopSection,
	ProgressWrapper,
} from "./OrderBody.styles";
import { OrderBodyProps } from "./types";
import MSErrorAndLoadingWrapper from "../../../Shared/MSErrorAndLoadingWrapper";
import OrderInfo from "../OrderInfo";
import {
	OrderAction,
	OrderHistory,
	OrderPaymentSummary,
	OrderProgress,
} from "..";
import { OrderStatusEnum } from "@/constants";
import ShareLinkSection from "../ShareLinkSection";

const OrderBody = (props: OrderBodyProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { orderId } = props;
	const { data, isLoading, error } = useFetchOrderById(orderId as string);
	const isOrderPendingJoin =
		data?.order?.status === OrderStatusEnum.PENDING_PAYMENT;
	const isPendingSeller = !data?.order?.seller;

	return (
		<MSErrorAndLoadingWrapper
			isLoading={isLoading}
			error={error}
			displayErrorReason={true}
		>
			<MSText
				fontSize="22px"
				mobileFontSize="20px"
				fontWeight="600"
				color={colors.black}
				style={{
					borderBottom: `3px solid ${colors.green}`,
					width: "180px",
				}}
			>
				{text.trackYourOrder}
			</MSText>
			<TopSection>
				<ProgressWrapper>
					<OrderProgress
						status={data?.order?.status || OrderStatusEnum.PENDING_PAYMENT}
					/>
				</ProgressWrapper>

				{isOrderPendingJoin && (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							marginTop: 20,
							marginBottom: 2,
						}}
					>
						<ShareLinkSection
							isPendingSeller={isPendingSeller}
							orderId={orderId}
						/>
					</div>
				)}
				{!isOrderPendingJoin && (
					<OrderAction
						orderId={data?.order?._id ?? ""}
						isFetcherSeller={data?.order?.isFetcherSeller ?? false}
						orderStatus={data?.order.status ?? OrderStatusEnum.PENDING_PAYMENT}
					/>
				)}
			</TopSection>
			<MainWrapper>
				<InfoSection>
					<MSText
						fontSize="20px"
						mobileFontSize="18px"
						fontWeight="600"
						color={colors.black}
						style={{
							marginBottom: 10,
							// borderBottom: `3px solid ${colors.green}`,
							width: "135px",
						}}
					>
						{text.orderDetails}
					</MSText>{" "}
					<OrderInfo
						transactionTitle={data?.order?.transactionTitle || ""}
						description={data?.order?.description || ""}
						price={data?.order?.price || 0}
						status={data?.order?.status || OrderStatusEnum.PENDING_PAYMENT}
						deliveryDate={data?.order?.deliveryDate || ""}
					/>
					<OrderPaymentSummary
						price={data?.order.price || 0}
						escrowFee={data?.order.fees || 0}
						totalDue={(data?.order?.price || 0) + (data?.order.fees || 0)}
					/>
				</InfoSection>
				<HistorySection>
					<OrderHistory statusHistory={data?.order.statusHistory} />
				</HistorySection>
			</MainWrapper>
		</MSErrorAndLoadingWrapper>
	);
};

export default OrderBody;
