import React, { useState } from "react";
import MSText from "../../../Shared/MSText";
import OtherPartyDetailsForm from "../OtherPartyDetailsForm";
import PreviewDetailsInput from "../PreviewInputDetails";
import ShareLink from "../ShareLink";
import TransactionForm from "../TransactionForm";
import {
	MainWrapper,
	TitleWrapper,
	ContentWrapper,
} from "./StartTransactionCard.styles";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { StartTransactionData } from "./types";
import queryClient from "@/client/reactQClient";
import { RolesEnum } from "@/constants";
import { useCreateOrder } from "@/hooks/orderHooks";
import MSStepProgressBar from "../../../Shared/MSStepsProgressBar";
import RoleSelection from "../RoleSelection";
const steps = [
	"Role",
	"Transaction Details",
	// "Buyer Details",
	"Preview Details",
	"Share Link",
];

const StartTransactionCard = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { mutate: createOrder, isPending, error } = useCreateOrder();
	const [orderLink, setOrderLink] = useState<string | null>();
	const [orderId, setOrderId] = useState<string | null>();
	const [activeStep, setActiveStep] = useState(0);
	const [formData, setFormData] = useState<StartTransactionData>({
		role: RolesEnum.SELLER,
		transactionTitle: "",
		description: "",
		price: "",
		deliveryDate: "",
		otherPartyEmail: "",
		otherPartyPhone: "",
	});

	const handleNext = (updatedData: Partial<StartTransactionData>) => {
		setFormData((prev) => ({ ...prev, ...updatedData }));
		setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
	};

	const handleConfirmOrder = () => {
		setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));

		const orderData = {
			...formData,
			price: parseFloat(formData.price),
			deliveryDate: new Date(formData.deliveryDate),
			otherPartyPhone: `+2${formData.otherPartyPhone}`,
			role: RolesEnum.SELLER,
		};

		createOrder(orderData, {
			onSuccess: (response) => {
				setOrderLink(`https://mawsouq/order/id=${response?.data?.order?._id}`);
				setOrderId(response?.data?.order?._id);
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

				<div style={{ marginTop: "20px" }}>
					{activeStep === 0 && (
						<RoleSelection
							initialValues={formData}
							onSubmit={(data) => handleNext(data)}
						/>
					)}
					{activeStep === 1 && (
						<TransactionForm
							initialValues={formData}
							onSubmit={(data) => handleNext(data)}
						/>
					)}
					{activeStep === 11 && (
						<OtherPartyDetailsForm
							initialValues={formData}
							onSubmit={(data) => handleNext(data)}
							onBack={handleBack}
							paymentDetails={{
								price: parseFloat(formData.price),
								escrowFee: 50,
								totalDue: parseFloat(formData.price) + 50,
							}}
						/>
					)}
					{activeStep === 2 && (
						<PreviewDetailsInput
							formData={formData}
							onConfirm={handleConfirmOrder}
							onBack={handleBack}
						/>
					)}
					{activeStep === 3 && (
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

export default StartTransactionCard;
