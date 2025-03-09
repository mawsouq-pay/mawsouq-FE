import {
	OrderStatusEnum,
	orderProgressBarData,
	orderStatusConfirmationMessages,
} from "@/constants";
import { useState } from "react";
import {
	useCreatePaymentLink,
	useUpdateOrderStatus,
	useSellerRelease,
	useCaptureOrder,
} from "./orderHooks";
import { useLocaleStore } from "@/store";

export const useOrderActions = (
	orderId: string,
	isFetcherSeller: boolean,
	orderStatus: OrderStatusEnum,
	setIsDisputeFormOpen: (value: boolean) => void
) => {
	const { locale } = useLocaleStore();
	const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
	const [selectedAction, setSelectedAction] = useState<(() => void) | null>(
		null
	);

	const { mutate: createLink, isPending: createLinkPending } =
		useCreatePaymentLink();
	const { mutate: updateOrder, isPending: updateOrderPending } =
		useUpdateOrderStatus();
	const { mutate: sellerRelease, isPending: sellerReleasePending } =
		useSellerRelease(locale);
	const { mutate: captureOrder, isPending: captureOrderPending } =
		useCaptureOrder();

	const popupStatusMessage = orderStatusConfirmationMessages[orderStatus];
	const orderData = orderProgressBarData[orderStatus];

	const message = isFetcherSeller
		? orderData.messageForSeller
		: orderData.messageForBuyer;
	const orderStatusText = orderStatus;

	const actionHandlers: Record<string, () => void> = {
		createPaymentLink: () => createLink({ orderId }),
		updateOrderToInTransit: () =>
			updateOrder({ orderId, newStatus: OrderStatusEnum.IN_TRANSIT }),
		updateOrderToDelivered: () =>
			updateOrder({ orderId, newStatus: OrderStatusEnum.DELIVERED }),
		releasePayment: () => sellerRelease({ orderId }),
		openDispute: () => setIsDisputeFormOpen(true),
	};

	const actions = (
		isFetcherSeller ? orderData.sellerActions : orderData.buyerActions
	).map((action) => ({
		...action,
		handler: actionHandlers[action.key],
	}));

	const handleOpenConfirmationModal = (actionHandler: () => void) => {
		setSelectedAction(() => actionHandler);
		setIsConfirmModalOpen(true);
	};
	const handleCloseConfirmationModal = () => {
		setSelectedAction(null);
		setIsConfirmModalOpen(false);
	};
	const handleConfirmAction = () => {
		if (selectedAction) {
			setIsConfirmModalOpen(false);
			selectedAction();
			setSelectedAction(null);
		}
	};

	const loadingAndDisable =
		createLinkPending || updateOrderPending || sellerReleasePending;

	return {
		popupStatusMessage,
		message,
		orderStatusText,
		actions,
		isConfirmModalOpen,
		setIsConfirmModalOpen,
		handleOpenConfirmationModal,
		handleConfirmAction,
		loadingAndDisable,
		handleCloseConfirmationModal,
	};
};
