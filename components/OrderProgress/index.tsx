import React, { useState } from "react";
import { OrderProgressProps } from "./types";
import MSStepProgressBar from "../MSStepsProgressBar";
const steps = [
	"Pending Payment",
	"Awaiting Delivery",
	"Out for Delivery",
	"Delivered",
];

const OrderProgress = (props: OrderProgressProps) => {
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
