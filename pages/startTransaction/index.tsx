import React, { useState } from "react";
import OtherPartyDetailsForm from "@/components/OtherPartyDetailsForm";
import TransactionForm from "@/components/TransactionForm";
import HomePageLayout from "@/layouts/HomePageLayout";
import MSStepProgressBar from "@/components/MSStepsProgressBar";
import MSText from "@/components/MSText";
import {
	ContentWrapper,
	MainWrapper,
	TitleWrapper,
} from "./StartTransaction.styles";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import ShareLink from "@/components/ShareLink";
import { StartTransactionData } from "./types";
import { useCreateOrder } from "@/hooks/orderHooks";
import { RolesEnum } from "@/constants";
import queryClient from "@/client/reactQClient";
import { trackStartTransaction } from "@/hooks/mixpanelHooks";

const steps = ["Transaction Details", "Buyer Details", "Share Link"];

const StartTransaction = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { mutate: createOrder, isPending, error } = useCreateOrder();
	const [orderLink, setOrderLink] = useState<string | null>();
	const [orderId, setOrderId] = useState<string | null>();
	const [activeStep, setActiveStep] = useState(0);
	const [formData, setFormData] = useState<StartTransactionData>({
		transactionTitle: "",
		itemName: "",
		description: "",
		price: "",
		deliveryDate: "",
		quantity: "",
		otherPartyEmail: "",
		otherPartyPhone: "",
	});

	const handleNext = (updatedData: Partial<StartTransactionData>) => {
		setFormData((prev) => ({ ...prev, ...updatedData }));
		setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
	};
	const handleCreateOrder = (updatedData: Partial<StartTransactionData>) => {
		const orderData = {
			...formData,
			...updatedData,
			quantity: parseFloat(formData.quantity),
			price: parseFloat(formData.price),
			deliveryDate: new Date(formData.deliveryDate),
			otherPartyPhone: `+2${updatedData.otherPartyPhone}`,
			role: RolesEnum.SELLER,
		};
		setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));

		createOrder(orderData, {
			onSuccess: (response) => {
				console.log("-----CREATE ORDER SUCCESS-------", response);
				setOrderLink(`https://mawsouq/order/id=${response?.data?.order?._id}`);
				setOrderId(response?.data?.order?._id);
				queryClient.invalidateQueries({ queryKey: ["fetchOrders"] });
				trackStartTransaction(orderData);
			},
		});

		setFormData((prev) => ({ ...prev, ...updatedData }));
	};

	const handleBack = () => {
		setActiveStep((prev) => Math.max(prev - 1, 0));
	};
	const navigateToFirstStep = () => {
		setActiveStep(0);
	};

	return (
		<MainWrapper>
			<TitleWrapper>
				<MSText
					fontSize="30px"
					fontWeight="bold"
					style={{ alignSelf: "center" }}
				>
					{text.createOrder}
				</MSText>
			</TitleWrapper>
			<ContentWrapper>
				<MSStepProgressBar steps={steps} activeStep={activeStep} />

				<div style={{ marginTop: "10px" }}>
					{activeStep === 0 && (
						<TransactionForm
							initialValues={formData}
							onSubmit={(data) => handleNext(data)}
						/>
					)}
					{activeStep === 1 && (
						<OtherPartyDetailsForm
							initialValues={formData}
							onSubmit={(data) => {
								handleCreateOrder(data);
							}}
							onBack={handleBack}
							paymentDetails={{
								price: parseFloat(formData.price),
								escrowFee: 50,
								totalDue: parseFloat(formData.price) + 50,
							}}
						/>
					)}
					{activeStep === 2 && (
						<ShareLink
							orderLink={orderLink}
							isPending={isPending}
							error={error}
							navigateToFirstStep={navigateToFirstStep}
							orderId={orderId}
						/>
					)}
				</div>
			</ContentWrapper>
		</MainWrapper>
	);
};

StartTransaction.CustomLayout = HomePageLayout;
export default StartTransaction;
