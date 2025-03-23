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
		payoutModalOpen,
		setPayoutModalOpen,
		onPayoutRequiredModalSubmit,
		payoutModalFormOpen,
		setPayoutModalFormOpen,
		createUserPayoutPending,
		onPayoutFormSubmit,
		onPayoutFormCancel,
	} = useStartTransaction();

	return (
		<MainWrapper>
			<MSStepProgressBar steps={steps} activeStep={activeStep} />
			<ContentWrapper>
				<div style={{ marginTop: "10px" }}>{renderStep()}</div>
			</ContentWrapper>
			<PayoutOptionRequiredModal
				open={payoutModalOpen}
				setOpen={setPayoutModalOpen}
				onPayoutRequiredModalSubmit={onPayoutRequiredModalSubmit}
			/>
			<MSPayoutModal
				payoutModalOpen={payoutModalFormOpen}
				onCancel={onPayoutFormCancel}
				onSubmit={onPayoutFormSubmit}
				isPending={createUserPayoutPending}
			/>
		</MainWrapper>
	);
};

export default StartTransactionCard;
