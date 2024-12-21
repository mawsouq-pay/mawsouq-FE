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
import { CreateOrderResponse, RolesEnum } from "@/types/ordersTypes";
import ConfirmOrderEmail from "@/emails/confirm-order";
import { useAuthStore } from "@/store";
const steps = ["Transaction Details", "Buyer Details", "Share Link"];

const StartTransaction = () => {
	const { locale } = useLocaleStore();
	const { user } = useAuthStore();
	const text = textTr(locale);
	const { mutate: createOrder, isPending, error } = useCreateOrder();
	const [orderLink, setOrderLink] = useState<string | null>();
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
	const handleSendEmail = async (orderData: any) => {
		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					to: orderData.otherPartyEmail,
					subject: "Order Confirmation",
					reactComponent: <ConfirmOrderEmail />,
					emailData: {
						...orderData,
						total: orderData.price + 50,
						escrowFee: 50,
						senderEmail: "nadanazeer11@gmail.com",
						confirmUrl: "https://www.youtube.com/watch?v=WiinVuzh4DA",
					},
				}),
			});

			const result = await response.json();
			if (response.ok) {
				console.log("Email sent successfully:", result);
			} else {
				console.error("Error sending email:", result.error);
			}
		} catch (err) {
			console.error("Failed to send email:", err);
		}
	};

	const handleCreateOrder = async (
		updatedData: Partial<StartTransactionData>
	) => {
		try {
			// Prepare the order data
			const orderData = {
				...formData,
				...updatedData,
				quantity: parseFloat(updatedData.quantity ?? formData.quantity),
				price: parseFloat(updatedData.price ?? formData.price),
				deliveryDate: new Date(
					updatedData.deliveryDate ?? formData.deliveryDate
				),
				otherPartyPhone: `+2${updatedData.otherPartyPhone ?? formData.otherPartyPhone}`,
				role: RolesEnum.SELLER,
			};

			//setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));

			createOrder(orderData, {
				onSuccess: async (response) => {
					console.log("-----CREATE ORDER SUCCESS-------", response);
					const orderId = response?.data?.order?._id;
					setOrderLink(`https://mawsouq/order/id=${orderId}`);

					handleSendEmail(orderData);
				},
				onError: (error) => {
					console.error("Error creating order:", error);
				},
			});

			setFormData((prev) => ({ ...prev, ...updatedData }));
		} catch (error) {
			console.error("Error in handleCreateOrder:", error);
		}
	};

	const handleBack = () => {
		setActiveStep((prev) => Math.max(prev - 1, 0));
	};
	console.log(formData);

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
						/>
					)}
				</div>
			</ContentWrapper>
		</MainWrapper>
	);
};

StartTransaction.CustomLayout = HomePageLayout;
export default StartTransaction;
