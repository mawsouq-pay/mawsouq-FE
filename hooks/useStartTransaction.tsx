import { useState, useEffect } from "react";
import queryClient from "@/client/reactQClient";
import { RolesEnum } from "@/constants";
import { useCreateOrder } from "@/hooks/orderHooks";
import { StartTransactionData } from "@/components/Features/CreateTransaction/StartTransactionCard/types";
import RoleSelection from "@/components/Features/CreateTransaction/RoleSelection";
import TransactionForm from "@/components/Features/CreateTransaction/TransactionForm";
import ShareLink from "@/components/Features/CreateTransaction/ShareLink";
import { CreateOrderInput } from "@/types/ordersTypes";
import { useGetUserPayoutOptions } from "./authHooks";
import { useManagePayout } from "./useManagePayout";
import { PayoutDetailsT } from "@/types/authenticationTypes";
import { useNotification } from "@/store/SnackBarStore";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";

export const useStartTransaction = () => {
	const { showSuccessNotification } = useNotification();
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { mutate: createOrder, isPending, error } = useCreateOrder();
	const {
		data: userPayoutOptionsData,
		isPending: getUserPayoutOptionsLoading,
	} = useGetUserPayoutOptions();
	const {
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

	const steps = ["Transaction Details", "Share Link"];

	useEffect(() => {
		if (
			formData.role === RolesEnum.SELLER &&
			!getUserPayoutOptionsLoading &&
			userPayoutOptionsData?.payoutOptions?.length === 0
		) {
			setPayoutModalOpen(true);
		}
	}, [formData.role, userPayoutOptionsData, getUserPayoutOptionsLoading]);
	console.log(error, "EERROR");
	const renderStep = () => {
		return (
			<>
				{/* {activeStep === 0 && (
					<RoleSelection initialValues={formData} onSubmit={handleNext} />
				)} */}
				{activeStep === 0 && (
					<TransactionForm
						initialValues={formData}
						onSubmit={handleConfirmOrder}
						onBack={handleBack}
					/>
				)}
				{activeStep === 1 && (
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

	const handleNext = (updatedData: Partial<StartTransactionData>) => {
		setFormData((prev) => ({ ...prev, ...updatedData }));
		setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
	};

	const handleConfirmOrder = (updatedData: StartTransactionData) => {
		handleNext(updatedData);
		console.log(updatedData, "updatedData");
		const orderData: CreateOrderInput = {
			...updatedData,
			price: parseFloat(updatedData.price),
			deliveryDate: new Date(updatedData.deliveryDate),
			description: updatedData.description,
		};
		console.log(orderData, "Order");
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
		setPayoutModalOpen(false);
		setPayoutModalFormOpen(true);
	};

	const onPayoutFormSubmit = (details: PayoutDetailsT) => {
		createUserPayoutMethod(details);
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
	};
};
