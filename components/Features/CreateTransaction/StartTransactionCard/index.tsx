import React from "react";
import MSText from "../../../Shared/MSText";
import ShareLink from "../ShareLink";
import TransactionForm from "../TransactionForm";
import {
	MainWrapper,
	TitleWrapper,
	ContentWrapper,
} from "./StartTransactionCard.styles";
import MSStepProgressBar from "../../../Shared/MSStepsProgressBar";
import RoleSelection from "../RoleSelection";
import { useStartTransaction } from "@/hooks/useStartTransaction";

const StartTransactionCard = () => {
	const {
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
	} = useStartTransaction();

	return (
		<MainWrapper>
			<TitleWrapper>
				<MSText
					fontSize="30px"
					fontWeight="bold"
					style={{ alignSelf: "center" }}
				>
					Create Order
				</MSText>
			</TitleWrapper>
			<MSStepProgressBar steps={steps} activeStep={activeStep} />

			<ContentWrapper>
				<div style={{ marginTop: "20px" }}>
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
