import { useState } from "react";
import {
	useUpdateOrderStatus,
	useSellerRelease,
	useCreateDispute,
	useFetchOrderById,
} from "./orderHooks";
import { useAuthStore, useLocaleStore } from "@/store";
import { useNotification } from "@/store/SnackBarStore";
import { textTr } from "@/constants/locales";
import {
	DisputeTypeEnum,
	OrderStatusEnum,
	orderProgressBarData,
	orderStatusConfirmationMessages,
	OrderConfirmationMessages,
} from "@/constants";
import { useSendEmail } from "./useSendEmail";
import { useRateOrder } from "./ratingHooks";
import { sendEmail } from "@/helpers/sendEmail";
import { AxiosError } from "axios";

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

	const { data: orderDetails } = useFetchOrderById(orderId);
	const { mutate: updateOrder, isPending: updateOrderPending } =
		useUpdateOrderStatus();
	const { mutate: sellerRelease, isPending: sellerReleasePending } =
		useSellerRelease(locale);

	const { mutate: createDispute, isPending: isCreateDisputePending } =
		useCreateDispute();
	const { mutate: rateOrder, isPending: isRateOrderPending } = useRateOrder();
	const { sendEmail: sendEmailToUs } = useSendEmail();

	const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
	const [selectedAction, setSelectedAction] = useState<(() => void) | null>(
		null
	);
	const [isDisputeFormOpen, setIsDisputeFormOpen] = useState(false);
	const [isRateModalOpen, setIsRateModalOpen] = useState(false);
	const [popupStatusMessage, setPopupStatusMessage] = useState<{
		title: OrderConfirmationMessages;
		message: OrderConfirmationMessages;
	} | null>(null);

	const orderData = orderProgressBarData[orderStatus];
	const message = isFetcherSeller
		? orderData.messageForSeller
		: orderData.messageForBuyer;
	const orderStatusText = text[orderStatus];

	const handleMarkAsOutForDelivery = () =>
		updateOrder({
			orderId,
			newStatus: OrderStatusEnum.IN_TRANSIT,
		});

	const handleReleasePayment = () => {
		sellerRelease(
			{ orderId },
			{
				onSuccess: () => setIsRateModalOpen(true),
			}
		);
	};

	const handleOpenDisputeForm = () => setIsDisputeFormOpen(true);

	const handleOpenConfirmationModal = (
		actionCallback: () => void,
		status: OrderStatusEnum
	) => {
		setSelectedAction(() => actionCallback);
		setPopupStatusMessage(orderStatusConfirmationMessages[status]);
		setIsConfirmModalOpen(true);
	};

	const handleCloseConfirmationModal = () => {
		setSelectedAction(null);
		setPopupStatusMessage(null);
		setIsConfirmModalOpen(false);
	};

	const handleConfirmAction = () => {
		if (selectedAction) {
			selectedAction();
			handleCloseConfirmationModal();
		}
	};

	const submitDispute = async (values: {
		type: DisputeTypeEnum;
		description: string;
	}) => {
		createDispute(
			{ orderId, type: values.type, description: values.description },
			{
				onSuccess: () => {
					showSuccessNotification(text.disputeSentSuccessfully);
					setIsDisputeFormOpen(false);
				},
				onError: (error) => showAxiosErrorNotification(error as AxiosError),
			}
		);
		await sendEmailToUs({
			name: `DISPUTE FOR ${orderId}`,
			subject: "New Dispute Submitted",
			message: `New dispute on order ${orderId}\nType: ${values.type}\nDescription: ${values.description}`,
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

	const submitRateModal = (values: { rating: number; comment: string }) => {
		rateOrder(
			{ orderId, rating: values.rating, comment: values.comment },
			{
				onSuccess: () => {
					showSuccessNotification("ratingSentSuccessfully");
					setIsRateModalOpen(false);
				},
			}
		);
	};

	const cancelRatingModal = () => {
		setIsRateModalOpen(false);
	};

	const loadingAndDisable =
		updateOrderPending || sellerReleasePending || isCreateDisputePending;

	return {
		message,
		orderStatusText,
		isConfirmModalOpen,
		popupStatusMessage,
		handleOpenConfirmationModal,
		handleConfirmAction,
		handleCloseConfirmationModal,
		isDisputeFormOpen,
		setIsDisputeFormOpen,
		submitDispute,
		submitRateModal,
		cancelRatingModal,
		isRateModalOpen,
		isRateOrderPending,
		handleMarkAsOutForDelivery,
		handleReleasePayment,
		handleOpenDisputeForm,
		loadingAndDisable,
		sellerReleasePending,
		updateOrderPending,
	};
};
