import { useState } from "react";
import { useRouter } from "next/router";
import {
	useCaptureOrder,
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
import queryClient from "@/client/reactQClient";
import { useNotification } from "@/store/SnackBarStore";
import { AxiosError } from "axios";

export const useOrderActions = (
	orderId: string,
	isFetcherSeller: boolean,
	orderStatus: OrderStatusEnum,
	setIsDisputeFormOpen: (value: boolean) => void
) => {
	const router = useRouter();
	const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
	const {
		showErrorNotification,
		showSuccessNotification,
		showAxiosErrorNotification,
	} = useNotification();

	const { mutate: createLink, isPending: createLinkPending } =
		useCreatePaymentLink();
	const { mutate: updateOrder, isPending: updateOrderPending } =
		useUpdateOrderStatus();
	const { mutate: sellerRelease, isPending: sellerReleasePending } =
		useSellerRelease();
	const { mutate: captureOrder, isPending: captureOrderPending } =
		useCaptureOrder();
	const statusMessage = orderStatusConfirmationMessages[orderStatus];
	const { messageForSeller, messageForBuyer, sellerCTA, buyerCTA, nextStatus } =
		orderProgressBarData[orderStatus];
	const orderStatusText = orderStatusObject[orderStatus].text;

	const message = isFetcherSeller ? messageForSeller : messageForBuyer;
	const buttonCta = isFetcherSeller ? sellerCTA : buyerCTA;

	const handleConfirmRelease = () => {
		setIsConfirmModalOpen(false);
		//sellerRelease({ orderId });
	};

	const handleDispute = () => {
		setIsConfirmModalOpen(false);
		setIsDisputeFormOpen(true);
	};

	const handleCtaClick = () => {
		setIsConfirmModalOpen(false);

		// Buyer: Make Payment
		if (orderStatus === OrderStatusEnum.PENDING_PAYMENT && !isFetcherSeller) {
			createLink(
				{ orderId },
				{
					onSuccess: (response) => {
						window.location.href = response?.data?.iframeLink;
						queryClient.invalidateQueries({
							queryKey: ["fetchOrderById", orderId],
						});
					},
					onError: () => {
						showErrorNotification("Error occurred while processing payment.");
					},
				}
			);
		}

		// Seller Actions
		else if (isFetcherSeller) {
			if (orderStatus === OrderStatusEnum.IN_PROGRESS) {
				updateOrder({ orderId, newStatus: OrderStatusEnum.IN_TRANSIT });
			} else if (buttonCta === "Submit Dispute Details") {
				setIsDisputeFormOpen(true);
			}
		}

		// Buyer Actions
		else {
			if (
				orderStatus === OrderStatusEnum.IN_TRANSIT &&
				nextStatus === OrderStatusEnum.DELIVERED
			) {
				updateOrder({ orderId, newStatus: nextStatus });
			}
		}
	};

	const handleCaptureOrder = () => {
		captureOrder(
			{ orderId },
			{
				onSuccess: (response, variables) => {
					const { orderId } = variables;
					queryClient.setQueryData(
						["fetchOrderById", orderId],
						(oldData: any) => {
							if (!oldData) return oldData;
							return {
								...oldData,
								order: {
									...oldData.order,
									status: OrderStatusEnum.COMPLETED,
								},
							};
						}
					);
				},
				onError(error) {
					console.log("-----ERROR IN UPDATING STATUS-------", error);
					showAxiosErrorNotification(error as AxiosError);
				},
			}
		);
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
		handleConfirmRelease,
		handleDispute,
		loadingAndDisable,
		handleCaptureOrder,
	};
};
