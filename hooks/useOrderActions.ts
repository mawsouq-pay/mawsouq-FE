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
	useFetchOrderById,
} from "./orderHooks";
import { useAuthStore, useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import { useNotification } from "@/store/SnackBarStore";
import { AxiosError } from "axios";
import { useSendEmail } from "./useSendEmail";
import { useRateOrder } from "./ratingHooks";
import { sendEmail } from "@/helpers/sendEmail";
export const useOrderActions = (
	orderId: string,
	isFetcherSeller: boolean,
	orderStatus: OrderStatusEnum
) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { user } = useAuthStore();
	const {
		showAxiosErrorNotification,
		showErrorNotification,
		showSuccessNotification,
	} = useNotification();

	const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
	const [selectedAction, setSelectedAction] = useState<(() => void) | null>(
		null
	);
	const [isDisputeFormOpen, setIsDisputeFormOpen] = useState(false);
	const [isRateModalOpen, setIsRateModalOpen] = useState(false);
	const [popupStatusMessage, setPopupStatusMessage] = useState<{
		title: OrderConfirmationMessages;
		message: OrderConfirmationMessages;
	} | null>({
		title: OrderConfirmationMessages.ORDER_PENDING_PAYMENT_TITLE,
		message: OrderConfirmationMessages.ORDER_PENDING_PAYMENT_MESSAGE,
	});

	const {
		data: orderDetails,
		isLoading,
		error,
	} = useFetchOrderById(orderId as string);
	const { sendEmail: sendEmailToUs } = useSendEmail();
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
	const { mutate: rateOrder, isPending: isRateOrderPending } = useRateOrder();

	const orderData = orderProgressBarData[orderStatus];

	const message = isFetcherSeller
		? orderData.messageForSeller
		: orderData.messageForBuyer;
	const orderStatusText = text[orderStatus];

	const actionHandlers: Record<string, () => void> = {
		createPaymentLink: () => createLink({ orderId }),
		updateOrderToInTransit: () =>
			updateOrder({ orderId, newStatus: OrderStatusEnum.IN_TRANSIT }),
		updateOrderToDelivered: () =>
			updateOrder({ orderId, newStatus: OrderStatusEnum.DELIVERED }),
		releasePayment: () => releasePayment(),
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

	const releasePayment = () => {
		console.log("here");
		sellerRelease(
			{ orderId },
			{
				onSuccess: (response) => {
					setIsRateModalOpen(true);
				},
			}
		);
	};

	const cancelRatingModal = () => {
		setIsRateModalOpen(false);
	};
	const submitRateModal = (values: { rating: number; comment: string }) => {
		rateOrder(
			{ orderId, rating: values.rating, comment: values.comment },
			{
				onSuccess: (response) => {
					showSuccessNotification("RatingSent");
					setIsRateModalOpen(false);
				},
			}
		);
	};
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
		await sendEmailToUs({
			name: `DISPUTE FOR ${orderId}`,
			subject: "New Dispute Submitted",
			message: `A new dispute has been submitted for order ID: ${orderId}.\n\nType: ${values.type}\n\nDescription: ${values.description}`,
		});
		await sendDisputeEmail(values.type, values.description);
	};

	const sendDisputeEmail = async (
		type: DisputeTypeEnum,
		description: string
	) => {
		const otherPartyEmail = isFetcherSeller
			? orderDetails?.order?.buyer?.email
			: orderDetails?.order?.seller?.email;
		try {
			await sendEmail(
				[otherPartyEmail ?? ""],
				text.DISPUTED,
				"disputeNotificationEmail",
				{
					senderName: user?.name,
					disputeType: type,
					description,
					orderId,
					orderTitle: orderDetails?.order?.transactionTitle,
					orderTotal: orderDetails?.order?.price,
					orderDate: orderDetails?.order?.deliveryDate,
				}
			);

			showSuccessNotification(text.disputeSentToOther);
		} catch (error) {
			showErrorNotification(text.disputeEmailFailedToOther);
		}
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
		submitRateModal,
		cancelRatingModal,
		isRateModalOpen,
		isRateOrderPending,
	};
};
