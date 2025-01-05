import React, { useState } from "react";
import { OrderProgressProps } from "./types";
import MSStepProgressBar from "../MSStepsProgressBar";
const steps = [
	"Pending Payment",
	"Creating Order",
	"In Transit",
	"Delivered",
	"Completed",
];

const OrderProgress = (props: OrderProgressProps) => {
	const { status } = props;
	const [activeStep, setActiveStep] = useState(0);

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
