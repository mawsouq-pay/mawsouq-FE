import React from "react";
import MSText from "../../../Shared/MSText";
import {
	MainWrapper,
	TitleWrapper,
	ContentWrapper,
} from "./StartTransactionCard.styles";
import MSStepProgressBar from "../../../Shared/MSStepsProgressBar";
import { useStartTransaction } from "@/hooks/useStartTransaction";
import PayoutOptionRequiredModal from "../PayoutOptionRequiredModal";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSPayoutModal from "@/components/Shared/MSPayoutForm/MSPayoutModal";
import { useRouter } from "next/router";
import { clientRoutes } from "@/routes";

const StartTransactionCard = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const router = useRouter();
	const { back } = router;
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
			<TitleWrapper>
				<MSText
					fontSize="30px"
					fontWeight="bold"
					style={{ alignSelf: "center" }}
				>
					{text.createOrder}
				</MSText>
			</TitleWrapper>
			<MSStepProgressBar steps={steps} activeStep={activeStep} />
			<ContentWrapper>
				<div style={{ marginTop: "20px" }}>{renderStep()}</div>
			</ContentWrapper>
			<PayoutOptionRequiredModal
				open={payoutModalOpen}
				setOpen={setPayoutModalOpen}
				onPayoutRequiredModalSubmit={onPayoutRequiredModalSubmit}
			/>
			<MSPayoutModal
				payoutModalOpen={payoutModalFormOpen}
				setPayoutModalOpen={setPayoutModalFormOpen}
				onCancel={() => {
					setPayoutModalFormOpen(false);
					router.replace(clientRoutes.homePage);
				}}
				onSubmit={onPayoutFormSubmit}
				isPending={createUserPayoutPending}
			/>
		</MainWrapper>
	);
};

export default StartTransactionCard;
