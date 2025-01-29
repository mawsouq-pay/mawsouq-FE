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
import {
	useCreatePaymentLink,
	useSellerRelease,
	useUpdateOrderStatus,
} from "@/hooks/orderHooks";
import { clientRoutes } from "@/routes";
import MSButton from "../MSButton";
import { useRouter } from "next/router";
import queryClient from "@/client/reactQClient";

const OrderAction = (props: OrderActionProps) => {
	const { isFetcherSeller, orderStatus, orderId } = props;
	const router = useRouter();
	const { mutate: createLink, isPending: createLinkPending } =
		useCreatePaymentLink();
	const { mutate: updateOrder, isPending: updateOrderPending } =
		useUpdateOrderStatus();

	const { mutate: sellerRelease, isPending: sellerReleasePending } =
		useSellerRelease();
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
						queryClient.invalidateQueries({
							queryKey: ["fetchOrderById", orderId],
						});
					},
				}
			);
		} else if (isFetcherSeller) {
			if (orderStatus === OrderStatusEnum.IN_PROGRESS) {
				updateOrder({ orderId, newStatus: OrderStatusEnum.IN_TRANSIT });
			} else if (buttonCta === "Submit Dispute Details") {
				console.log("Submit dispute details (Seller).");
			}
		} else {
			if (
				orderStatus === OrderStatusEnum.IN_TRANSIT &&
				nextStatus === OrderStatusEnum.DELIVERED
			) {
				updateOrder({ orderId, newStatus: nextStatus });
			} else if (
				orderStatus === OrderStatusEnum.DELIVERED &&
				nextStatus === OrderStatusEnum.COMPLETED
			) {
				sellerRelease({ orderId });
			} else if (buttonCta === "Submit Dispute Details") {
				console.log("Submit dispute details (Buyer).");
			}
		}
	};
	const loadingAndDisable =
		createLinkPending || updateOrderPending || sellerReleasePending;
	return (
		<MainWrapper>
			<MSText
				fontSize="20px"
				mobileFontSize="16px"
				fontWeight="700"
				color={colors.darkGray}
			>
				{" "}
				{orderStatusText}
			</MSText>
			<MessageDiv>
				<MSText fontSize="16px" color={colors.black} fontWeight="500">
					{message}
				</MSText>
			</MessageDiv>

			{buttonCta && (
				<MSButton
					onClick={onCtaClick}
					title={buttonCta}
					loading={loadingAndDisable}
					disabled={loadingAndDisable}
					style={{
						height: 40,
						width: "fit-content",
					}}
				/>
			)}
		</MainWrapper>
	);
};

export default OrderAction;
