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
	Header,
	ArrowIcon,
	CollapsibleContainer,
	Content,
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

const OrderBody = (props: OrderBodyProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { orderId } = props;
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen((prev: any) => !prev);
	};
	const { data, isLoading, error } = useFetchOrderById(orderId as string);

	return (
		<MSErrorAndLoadingWrapper
			isLoading={isLoading}
			error={error}
			displayErrorReason={true}
		>
			<MSText fontSize="32px" fontWeight="700" color={colors.black}>
				{text.orderDetails}
			</MSText>
			<ActionBox>
				<MSText fontSize="14px" fontWeight="600" color={colors.red}>
					action needed
				</MSText>
			</ActionBox>

			<OrderProgress status={data?.order?.status || "PENDING"} />

			<MainWrapper>
				<InfoSection>
					<OrderAction
						orderId={data?.order?._id ?? ""}
						isFetcherSeller={data?.order?.isFetcherSeller ?? false}
						orderStatus={data?.order.status ?? "PENDING"}
					/>
					<CollapsibleContainer>
						<Header onClick={toggleOpen}>
							<MSText fontSize="20px" fontWeight="bold" color={colors.black}>
								Order Details
							</MSText>
							<ArrowIcon isOpen={isOpen}>▼</ArrowIcon>
						</Header>
						<Content isOpen={isOpen}>
							<OrderPaymentSummary
								price={data?.order.price || 0}
								escrowFee={20}
								totalDue={(data?.order?.price || 0) + 20}
							/>
							<OrderInfo
								transactionTitle={data?.order?.transactionTitle || ""}
								description={data?.order?.description || ""}
								price={data?.order?.price || 0}
								status={data?.order?.status || "PENDING"}
								deliveryDate={data?.order?.deliveryDate || ""}
							/>
						</Content>
					</CollapsibleContainer>
				</InfoSection>
				<HistorySection>
					<OrderHistory statusHistory={data?.order.statusHistory} />
				</HistorySection>
			</MainWrapper>
		</MSErrorAndLoadingWrapper>
	);
};

export default OrderBody;
