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

export const useStartTransaction = () => {
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
		role: RolesEnum.BUYER,
		transactionTitle: "",
		description: "",
		price: "",
		deliveryDate: "",
	});
	const [orderId, setOrderId] = useState<string | null>(null);
	const [activeStep, setActiveStep] = useState(0);

	const steps = ["Role", "Transaction Details", "Share Link"];

	useEffect(() => {
		if (
			formData.role === RolesEnum.SELLER &&
			!getUserPayoutOptionsLoading &&
			userPayoutOptionsData?.payoutOptions?.length === 0
		) {
			setPayoutModalOpen(true);
		}
	}, [formData.role, userPayoutOptionsData, getUserPayoutOptionsLoading]);

	const renderStep = () => {
		return (
			<>
				{activeStep === 0 && (
					<RoleSelection initialValues={formData} onSubmit={handleNext} />
				)}
				{activeStep === 1 && (
					<TransactionForm
						initialValues={formData}
						onSubmit={handleConfirmOrder}
						onBack={handleBack}
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

	const handleNext = (updatedData: Partial<StartTransactionData>) => {
		setFormData((prev) => ({ ...prev, ...updatedData }));
		setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
	};

	const handleConfirmOrder = (updatedData: StartTransactionData) => {
		handleNext(updatedData);

		const orderData: CreateOrderInput = {
			...formData,
			price: parseFloat(updatedData.price),
			deliveryDate: new Date(updatedData.deliveryDate),
			description: updatedData.description,
		};
		createOrder(orderData, {
			onSuccess: (response) => {
				const newOrderId = response?.data?.order?._id;
				setOrderId(newOrderId);
				queryClient.invalidateQueries({ queryKey: ["fetchOrders"] });
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
