import { useState } from "react";
import queryClient from "@/client/reactQClient";
import { RolesEnum } from "@/constants";
import { useCreateOrder } from "@/hooks/orderHooks";
import { StartTransactionData } from "@/components/Features/CreateTransaction/StartTransactionCard/types";

export const useStartTransaction = () => {
	const { mutate: createOrder, isPending, error } = useCreateOrder();
	const steps = ["Role", "Transaction Details", "Share Link"];

	const [orderLink, setOrderLink] = useState<string | null>(null);
	const [orderId, setOrderId] = useState<string | null>(null);
	const [activeStep, setActiveStep] = useState(0);
	const [formData, setFormData] = useState<StartTransactionData>({
		role: RolesEnum.SELLER,
		transactionTitle: "",
		description: "",
		price: "",
		deliveryDate: "",
	});

	const handleNext = (updatedData: Partial<StartTransactionData>) => {
		setFormData((prev) => ({ ...prev, ...updatedData }));
		setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
	};

	const handleConfirmOrder = (updatedData: StartTransactionData) => {
		handleNext(updatedData);

		const orderData = {
			...formData,
			price: parseFloat(updatedData.price),
			deliveryDate: new Date(updatedData.deliveryDate),
			description: updatedData.description,
		};

		createOrder(orderData, {
			onSuccess: (response) => {
				const newOrderId = response?.data?.order?._id;
				setOrderLink(`https://mawsouq/order/id=${newOrderId}`);
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

	return {
		steps,
		formData,
		orderLink,
		orderId,
		activeStep,
		isPending,
		error,
		handleNext,
		handleConfirmOrder,
		handleBack,
		navigateToFirstStep,
	};
};
