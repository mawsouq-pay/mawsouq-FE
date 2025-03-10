import React from "react";
import { MainWrapper, ContentWrapper } from "./StartTransactionCard.styles";
import MSStepProgressBar from "../../../Shared/MSStepsProgressBar";
import { useStartTransaction } from "@/hooks/useStartTransaction";
import PayoutOptionRequiredModal from "../PayoutOptionRequiredModal";
import MSPayoutModal from "@/components/Shared/MSPayoutForm/MSPayoutModal";
import { useRouter } from "next/router";
import { clientRoutes } from "@/routes";

const StartTransactionCard = () => {
	const router = useRouter();
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
	} = useStartTransaction();

	return (
		<MainWrapper>
			{/* <TitleWrapper>
				<MSText
					fontSize="30px"
					fontWeight="bold"
					style={{ alignSelf: "center" }}
				>
					{text.createOrder}
				</MSText>
			</TitleWrapper> */}
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
				onCancel={() => {
					setPayoutModalFormOpen(false);
				}}
				onSubmit={onPayoutFormSubmit}
				isPending={createUserPayoutPending}
			/>
		</MainWrapper>
	);
};

export default StartTransactionCard;
