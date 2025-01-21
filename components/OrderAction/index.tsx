import React from "react";
import { MainWrapper, MessageDiv, StyledButton } from "./OrderAction.styles";
import MSText from "../MSText";
import { colors } from "@/constants/theme";
import { OrderActionProps } from "./types";
import {
	OrderStatusEnum,
	orderProgressBarData,
	orderStatusObject,
} from "@/constants";
import { useCreatePaymentLink, useUpdateOrderStatus } from "@/hooks/orderHooks";
import { clientRoutes } from "@/routes";
import MSButton from "../MSButton";
import { useRouter } from "next/router";

const OrderAction = (props: OrderActionProps) => {
	const { isFetcherSeller, orderStatus, orderId } = props;
	const router = useRouter();
	const { mutate: createLink, isPending: createLinkPending } =
		useCreatePaymentLink();
	const { mutate: updateOrder, isPending: updateOrderPending } =
		useUpdateOrderStatus();
	const { messageForSeller, messageForBuyer, sellerCTA, buyerCTA, nextStatus } =
		orderProgressBarData[orderStatus];
	const orderStatusText = orderStatusObject[orderStatus].text;
	const message = isFetcherSeller ? messageForSeller : messageForBuyer;
	const buttonCta = isFetcherSeller ? sellerCTA : buyerCTA;

	const onCtaClick = () => {
		if (orderStatus === OrderStatusEnum.PENDING && !isFetcherSeller) {
			createLink(
				{ orderId },
				{
					onSuccess: (response) => {
						router.push({
							pathname: clientRoutes.paymentPage,
							query: { iframeLink: response?.data?.iframeLink },
						});
					},
				}
			);
		} else if (isFetcherSeller) {
			if (orderStatus === OrderStatusEnum.IN_PROGRESS) {
				updateOrder(
					{ orderId, newStatus: OrderStatusEnum.IN_TRANSIT },
					{
						onSuccess: () => {
							router.reload();
						},
					}
				);
			} else if (buttonCta === "Submit Dispute Details") {
				console.log("Submit dispute details (Seller).");
			}
		} else {
			if (
				orderStatus === OrderStatusEnum.IN_TRANSIT &&
				nextStatus === OrderStatusEnum.DELIVERED
			) {
				updateOrder(
					{ orderId, newStatus: nextStatus },
					{
						onSuccess: () => {
							router.reload();
						},
					}
				);
			} else if (buttonCta === "Submit Dispute Details") {
				console.log("Submit dispute details (Buyer).");
			}
		}
	};
	const loadingAndDisable = createLinkPending || updateOrderPending;
	return (
		<MainWrapper>
			<MSText fontSize={"16px"} mobileFontSize={"14px"} color={colors.gray}>
				{orderStatusText}
			</MSText>
			<MessageDiv>
				<MSText fontSize={"16px"} color={colors.black} fontWeight={"600"}>
					{message}
				</MSText>
			</MessageDiv>

			{buttonCta != null && (
				<MSButton
					onClick={onCtaClick}
					title={buttonCta}
					loading={loadingAndDisable}
					disabled={loadingAndDisable}
				/>
			)}
		</MainWrapper>
	);
};

export default OrderAction;
