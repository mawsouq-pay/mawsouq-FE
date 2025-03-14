import { useFetchOrderById } from "@/hooks/orderHooks";
import React, { useState } from "react";
import MSText from "@/components/Shared/MSText";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { colors } from "@/constants/theme";
import {
	MainWrapper,
	InfoSection,
	HistorySection,
	ActionBox,
	TopSection,
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
				fontSize="20px"
				mobileFontSize="18px"
				fontWeight="700"
				color={colors.black}
			>
				{text.orderDetails}
			</MSText>
			<ActionBox>
				<MSText fontSize="14px" fontWeight="600" color={colors.red}>
					action needed
				</MSText>
			</ActionBox>
			<TopSection>
				<OrderProgress
					status={data?.order?.status || OrderStatusEnum.PENDING_PAYMENT}
				/>
				{isOrderPendingJoin && (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							marginTop: 40,
						}}
					>
						<ShareLinkSection
							isPendingSeller={isPendingSeller}
							orderId={orderId}
						/>
					</div>
				)}
				<OrderAction
					orderId={data?.order?._id ?? ""}
					isFetcherSeller={data?.order?.isFetcherSeller ?? false}
					orderStatus={data?.order.status ?? OrderStatusEnum.PENDING_PAYMENT}
				/>
			</TopSection>
			<MainWrapper>
				<InfoSection>
					<MSText
						fontSize="20px"
						mobileFontSize="18px"
						fontWeight="700"
						color={colors.black}
						style={{
							marginBottom: 10,
							borderBottom: `3px solid ${colors.green}`,
							width: "120px",
						}}
					>
						{text.orderDetails}
					</MSText>{" "}
					<OrderPaymentSummary
						price={data?.order.price || 0}
						escrowFee={data?.order.fees || 0}
						totalDue={(data?.order?.price || 0) + (data?.order.fees || 0)}
					/>
					<OrderInfo
						transactionTitle={data?.order?.transactionTitle || ""}
						description={data?.order?.description || ""}
						price={data?.order?.price || 0}
						status={data?.order?.status || OrderStatusEnum.PENDING_PAYMENT}
						deliveryDate={data?.order?.deliveryDate || ""}
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
