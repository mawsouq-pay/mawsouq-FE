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
import { text } from "stream/consumers";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";

const StartTransactionCard = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const { steps, activeStep, renderStep, payoutModalOpen, setPayoutModalOpen } =
		useStartTransaction();

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
			/>
			;
		</MainWrapper>
	);
};

export default StartTransactionCard;
