import { useState } from "react";
import queryClient from "@/client/reactQClient";
import { RolesEnum } from "@/constants";
import { useCreateOrder } from "@/hooks/orderHooks";
import { StartTransactionData } from "@/components/Features/CreateTransaction/StartTransactionCard/types";
import TransactionForm from "@/components/Features/CreateTransaction/TransactionForm";
import ShareLink from "@/components/Features/CreateTransaction/ShareLink";
import { CreateOrderInput } from "@/types/ordersTypes";
import { useManagePayout } from "./useManagePayout";
import { PayoutDetailsT } from "@/types/authenticationTypes";
import { useNotification } from "@/store/SnackBarStore";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import SellerPrompt from "@/components/Features/CreateTransaction/SellerPrompt";
import {
	trackCancelPayoutDetails,
	trackConfirmPayoutPrompt,
	trackOpenedPayoutPrompt,
	trackOrderSubmitted,
} from "@/helpers/tracking";

export const useStartTransaction = () => {
	const { showSuccessNotification } = useNotification();
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const { mutate: createOrder, isPending, error } = useCreateOrder();
	const {
		userPayoutOptions: userPayoutOptionsData,
		getUserPayoutOptionsLoading,
		createUserPayoutMethod,
		isPending: createUserPayoutPending,
		payoutModalOpen: payoutModalFormOpen,
		setPayoutModalOpen: setPayoutModalFormOpen,
	} = useManagePayout();

	const [payoutModalOpen, setPayoutModalOpen] = useState(false);
	const [formData, setFormData] = useState<StartTransactionData>({
		role: RolesEnum.SELLER,
		transactionTitle: "",
		description: "",
		price: "",
		deliveryDate: "",
	});

	const [orderId, setOrderId] = useState<string | null>(null);
	const [activeStep, setActiveStep] = useState(0);
	const steps = [text.approve, text.transactionDetails, text.shareLink];

	const renderStep = () => {
		return (
			<>
				{activeStep === 0 && (
					<SellerPrompt
						onSubmit={submitSellerPrompt}
						disableButton={getUserPayoutOptionsLoading}
					/>
				)}
				{activeStep === 1 && (
					<TransactionForm
						initialValues={formData}
						onSubmit={handleConfirmOrder}
						onBack={handleBack}
						disableButton={getUserPayoutOptionsLoading}
					/>
				)}
				{activeStep === 2 && (
					<ShareLink
						isPending={isPending}
						error={error}
						navigateToFirstStep={navigateToFirstStep}
						orderId={orderId}
						isPendingSeller={formData.role === RolesEnum.BUYER}
					/>
				)}
			</>
		);
	};

	const submitSellerPrompt = () => {
		if (checkPayoutOptions()) return;

		setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
	};
	const checkPayoutOptions = () => {
		if (
			formData.role === RolesEnum.SELLER &&
			!getUserPayoutOptionsLoading &&
			userPayoutOptionsData?.length === 0
		) {
			trackOpenedPayoutPrompt();
			setPayoutModalOpen(true);
			return true;
		}
		return false;
	};

	const handleConfirmOrder = (updatedData: StartTransactionData) => {
		setFormData((prev) => ({ ...prev, ...updatedData }));
		setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));

		const orderData: CreateOrderInput = {
			...updatedData,
			price: parseFloat(updatedData.price),
			deliveryDate: new Date(updatedData.deliveryDate),
			description: updatedData.description,
			fees: 50,
		};
		trackOrderSubmitted(orderData);
		createOrder(orderData, {
			onSuccess: (response) => {
				const newOrderId = response?.data?.order?._id;
				setOrderId(newOrderId);
				queryClient.invalidateQueries({ queryKey: ["fetchOrders"] });
				showSuccessNotification(text.orderSuccessfullyCreated);
			},
		});
	};

	const handleBack = () => {
		setActiveStep((prev) => Math.max(prev - 1, 0));
	};

	const navigateToFirstStep = () => {
		setActiveStep(0);
	};

	const onPayoutRequiredModalSubmit = () => {
		trackConfirmPayoutPrompt();
		setPayoutModalOpen(false);
		setPayoutModalFormOpen(true);
	};

	const onPayoutFormSubmit = (details: PayoutDetailsT) => {
		createUserPayoutMethod(details);
	};
	const onPayoutFormCancel = () => {
		setPayoutModalFormOpen(false);
		trackCancelPayoutDetails();
	};
	return {
		steps,
		formData,
		orderId,
		activeStep,
		error,
		handleConfirmOrder,
		handleBack,
		navigateToFirstStep,
		renderStep,
		payoutModalOpen,
		setPayoutModalOpen,
		onPayoutRequiredModalSubmit,
		payoutModalFormOpen,
		setPayoutModalFormOpen,
		onPayoutFormSubmit,
		createUserPayoutPending,
		getUserPayoutOptionsLoading,
		onPayoutFormCancel,
	};
};
