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
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const { showSuccessNotification } = useNotification();

	const {
		mutate: createOrder,
		isPending: isCreatingOrder,
		error: createOrderError,
	} = useCreateOrder();

	const {
		userPayoutOptions: payoutOptions,
		getUserPayoutOptionsLoading,
		createUserPayoutMethod,
		isPending: isCreatingPayout,
		payoutModalOpen: isPayoutFormOpen,
		setPayoutModalOpen: setPayoutFormOpen,
	} = useManagePayout();

	const [formData, setFormData] = useState<StartTransactionData>({
		role: RolesEnum.SELLER,
		transactionTitle: "",
		description: "",
		price: "",
		deliveryDate: "",
	});
	const [orderId, setOrderId] = useState<string | null>(null);
	const [activeStep, setActiveStep] = useState(0);
	const [isPayoutPromptOpen, setIsPayoutPromptOpen] = useState(false);

	const steps = [
		text.startTransaction,
		text.transactionDetails,
		text.shareLink,
	];

	const nextStep = () =>
		setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
	const prevStep = () => setActiveStep((prev) => Math.max(prev - 1, 0));
	const resetSteps = () => setActiveStep(0);

	const renderStep = () => {
		switch (activeStep) {
			case 0:
				return (
					<SellerPrompt
						onSubmit={handleSellerPromptSubmit}
						disableButton={getUserPayoutOptionsLoading}
					/>
				);
			case 1:
				return (
					<TransactionForm
						initialValues={formData}
						onSubmit={handleConfirmOrder}
						onBack={prevStep}
						disableButton={getUserPayoutOptionsLoading}
					/>
				);
			case 2:
				return (
					<ShareLink
						isPending={isCreatingOrder}
						error={createOrderError}
						navigateToFirstStep={resetSteps}
						orderId={orderId}
						isPendingSeller={formData.role === RolesEnum.BUYER}
					/>
				);
			default:
				return null;
		}
	};

	const handleSellerPromptSubmit = () => {
		if (shouldShowPayoutModal()) return;
		nextStep();
	};

	const shouldShowPayoutModal = () => {
		const noPayoutOptions =
			!getUserPayoutOptionsLoading && payoutOptions?.length === 0;
		if (formData.role === RolesEnum.SELLER && noPayoutOptions) {
			trackOpenedPayoutPrompt();
			setIsPayoutPromptOpen(true);
			return true;
		}
		return false;
	};

	const handleConfirmOrder = (updatedData: StartTransactionData) => {
		setFormData((prev) => ({ ...prev, ...updatedData }));
		nextStep();

		const orderPayload: CreateOrderInput = {
			...updatedData,
			price: parseFloat(updatedData.price),
			deliveryDate: new Date(updatedData.deliveryDate),
			description: updatedData.description,
			fees: 50,
		};

		trackOrderSubmitted(orderPayload);

		createOrder(orderPayload, {
			onSuccess: (response) => {
				const newOrderId = response?.data?.order?._id ?? null;
				setOrderId(newOrderId);
				queryClient.invalidateQueries({ queryKey: ["fetchOrders"] });
				showSuccessNotification(text.orderSuccessfullyCreated);
			},
		});
	};

	const handlePayoutPromptSubmit = () => {
		trackConfirmPayoutPrompt();
		setIsPayoutPromptOpen(false);
		setPayoutFormOpen(true);
	};

	const handlePayoutFormSubmit = (details: PayoutDetailsT) => {
		createUserPayoutMethod(details, {
			onSuccess: () => {
				setPayoutFormOpen(false);
				nextStep();
			},
		});
	};

	const handlePayoutFormCancel = () => {
		trackCancelPayoutDetails();
		setPayoutFormOpen(false);
	};

	return {
		steps,
		activeStep,
		renderStep,
		isPayoutPromptOpen,
		setIsPayoutPromptOpen,
		handlePayoutPromptSubmit,
		isPayoutFormOpen,
		handlePayoutFormSubmit,
		isCreatingPayout,
		handlePayoutFormCancel,
	};
};
