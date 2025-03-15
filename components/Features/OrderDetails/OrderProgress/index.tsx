import React from "react";
import { OrderProgressProps } from "./types";
import { orderProgressBarData } from "@/constants";
import MSStepProgressBar from "../../../Shared/MSStepsProgressBar";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";

const OrderProgress = (props: OrderProgressProps) => {
	const { status } = props;
	const { activeStep } = orderProgressBarData[status];
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const steps = [text.pendingPayment, text.moneyOnHold, text.orderCompleted];

	return (
		<div
			style={{
				display: "flex",
				alignItems: "flex-start",
				flex: 1,
			}}
		>
			<MSStepProgressBar steps={steps} activeStep={activeStep} />
		</div>
	);
};

export default OrderProgress;
