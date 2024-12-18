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

const steps = ["Transaction Details", "Buyer Details", "Share Link"];

const StartTransaction = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const [activeStep, setActiveStep] = useState(0);
	const [formData, setFormData] = useState<StartTransactionData>({
		transactionTitle: "",
		itemName: "",
		description: "",
		amount: "",
		deliveryDate: "",
		quantity: "",
		otherPartyEmail: "",
		otherPartyPhoneNumber: "",
	});

	const handleNext = (updatedData: Partial<StartTransactionData>) => {
		setFormData((prev) => ({ ...prev, ...updatedData }));
		setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
	};

	const handleBack = () => {
		setActiveStep((prev) => Math.max(prev - 1, 0));
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
							onSubmit={(data) => handleNext(data)}
							onBack={handleBack}
							paymentDetails={{
								amount: parseFloat(formData.amount ?? "1"),
								escrowFee: 50,
								totalDue: parseFloat(formData.amount ?? "1") + 50,
							}}
						/>
					)}
					{activeStep === 2 && <ShareLink />}
				</div>
			</ContentWrapper>
		</MainWrapper>
	);
};

StartTransaction.CustomLayout = HomePageLayout;
export default StartTransaction;
