import React from "react";
import { MainWrapper, ContentWrapper } from "./StartTransactionCard.styles";
import MSStepProgressBar from "../../../Shared/MSStepsProgressBar";
import { useStartTransaction } from "@/hooks/useStartTransaction";
import PayoutOptionRequiredModal from "../PayoutOptionRequiredModal";
import MSPayoutModal from "@/components/Shared/MSPayoutForm/MSPayoutModal";

const StartTransactionCard = () => {
	const {
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
	} = useStartTransaction();

	return (
		<MainWrapper>
			<MSStepProgressBar steps={steps} activeStep={activeStep} />
			<ContentWrapper>
				<div style={{ marginTop: "5px" }}>{renderStep()}</div>
			</ContentWrapper>

			<PayoutOptionRequiredModal
				open={isPayoutPromptOpen}
				setOpen={setIsPayoutPromptOpen}
				onPayoutRequiredModalSubmit={handlePayoutPromptSubmit}
			/>

			<MSPayoutModal
				payoutModalOpen={isPayoutFormOpen}
				onCancel={handlePayoutFormCancel}
				onSubmit={handlePayoutFormSubmit}
				isPending={isCreatingPayout}
			/>
		</MainWrapper>
	);
};

export default StartTransactionCard;
