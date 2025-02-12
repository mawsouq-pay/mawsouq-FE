import { useState } from "react";
import { useRouter } from "next/router";
import {
	useCreatePaymentLink,
	useSellerRelease,
	useUpdateOrderStatus,
} from "@/hooks/orderHooks";
import {
	OrderStatusEnum,
	orderProgressBarData,
	orderStatusObject,
	orderStatusConfirmationMessages,
} from "@/constants";
import { clientRoutes } from "@/routes";
import queryClient from "@/client/reactQClient";

export const useOrderActions = (
	orderId: string,
	isFetcherSeller: boolean,
	orderStatus: keyof typeof OrderStatusEnum
) => {
	const router = useRouter();
	const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

	const { mutate: createLink, isPending: createLinkPending } =
		useCreatePaymentLink();
	const { mutate: updateOrder, isPending: updateOrderPending } =
		useUpdateOrderStatus();
	const { mutate: sellerRelease, isPending: sellerReleasePending } =
		useSellerRelease();

	const statusMessage = orderStatusConfirmationMessages[orderStatus];
	const { messageForSeller, messageForBuyer, sellerCTA, buyerCTA, nextStatus } =
		orderProgressBarData[orderStatus];
	const orderStatusText = orderStatusObject[orderStatus].text;

	const message = isFetcherSeller ? messageForSeller : messageForBuyer;
	const buttonCta = isFetcherSeller ? sellerCTA : buyerCTA;

	const handleCtaClick = () => {
		setIsConfirmModalOpen(false);

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

	return {
		statusMessage,
		orderStatusText,
		message,
		buttonCta,
		isConfirmModalOpen,
		setIsConfirmModalOpen,
		handleCtaClick,
		loadingAndDisable,
	};
};
