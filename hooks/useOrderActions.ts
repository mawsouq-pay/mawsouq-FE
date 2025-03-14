import {
	DisputeTypeEnum,
	OrderActionT,
	OrderConfirmationMessages,
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
	useCreateDispute,
} from "./orderHooks";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import { useNotification } from "@/store/SnackBarStore";
import { AxiosError } from "axios";
import { useSendEmail } from "./useSendEmail";

export const useOrderActions = (
	orderId: string,
	isFetcherSeller: boolean,
	orderStatus: OrderStatusEnum
) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { showAxiosErrorNotification, showSuccessNotification } =
		useNotification();

	const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
	const [selectedAction, setSelectedAction] = useState<(() => void) | null>(
		null
	);
	const [isDisputeFormOpen, setIsDisputeFormOpen] = useState(false);

	const [popupStatusMessage, setPopupStatusMessage] = useState<{
		title: OrderConfirmationMessages;
		message: OrderConfirmationMessages;
	} | null>({
		title: OrderConfirmationMessages.ORDER_PENDING_PAYMENT_TITLE,
		message: OrderConfirmationMessages.ORDER_PENDING_PAYMENT_MESSAGE,
	});

	const { sendEmail } = useSendEmail();
	const { mutate: createLink, isPending: createLinkPending } =
		useCreatePaymentLink();
	const { mutate: updateOrder, isPending: updateOrderPending } =
		useUpdateOrderStatus();
	const { mutate: sellerRelease, isPending: sellerReleasePending } =
		useSellerRelease(locale);
	const { mutate: captureOrder, isPending: captureOrderPending } =
		useCaptureOrder();
	const { mutate: createDispute, isPending: isCreateDisputePending } =
		useCreateDispute();

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

	const actions: (OrderActionT & { handler: () => void })[] = (
		isFetcherSeller ? orderData.sellerActions : orderData.buyerActions
	).map((action) => ({
		...action,
		handler: actionHandlers[action.key],
	}));

	const handleOpenConfirmationModal = (
		action: OrderActionT & { handler: () => void }
	) => {
		setSelectedAction(() => action.handler);
		setPopupStatusMessage(orderStatusConfirmationMessages[action.status]);
		setIsConfirmModalOpen(true);
	};

	const handleCloseConfirmationModal = () => {
		setSelectedAction(null);
		setPopupStatusMessage(null);
		setIsConfirmModalOpen(false);
	};

	const handleConfirmAction = () => {
		if (selectedAction) {
			setIsConfirmModalOpen(false);
			selectedAction();
			setSelectedAction(null);
			setPopupStatusMessage(null);
		}
	};

	const loadingAndDisable =
		createLinkPending || updateOrderPending || sellerReleasePending;

	const submitDispute = async (values: {
		type: DisputeTypeEnum;
		description: string;
	}) => {
		createDispute(
			{
				orderId: orderId,
				type: values.type,
				description: values.description,
			},
			{
				onSuccess() {
					showSuccessNotification(text.disputeSentSuccessfully);
					setIsDisputeFormOpen(false);
				},
				onError(error) {
					console.log(error);
					showAxiosErrorNotification(error as AxiosError);
				},
			}
		);
		await sendEmail({
			name: `DISPUTE FOR ${orderId}`,
			subject: "New Dispute Submitted",
			message: `A new dispute has been submitted for order ID: ${orderId}.\n\nType: ${values.type}\n\nDescription: ${values.description}`,
		});
	};
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
		isDisputeFormOpen,
		setIsDisputeFormOpen,
		submitDispute,
	};
};
