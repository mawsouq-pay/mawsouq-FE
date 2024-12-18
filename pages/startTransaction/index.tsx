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
import PaymentSummarySection from "@/components/PaymentSummarySection";
import ShareLink from "@/components/ShareLink";

const steps = ["Transaction Details", "Buyer Details", "Share Link"];

const StartTransaction = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () =>
		setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
	const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));

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
						<TransactionForm onSubmit={handleNext} isSteps={true} />
					)}
					{activeStep === 1 && (
						<OtherPartyDetailsForm
							onSubmit={handleNext}
							onBack={handleBack}
							isSteps={true}
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
