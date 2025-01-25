import React, { useState } from "react";
import { OrderProgressProps } from "./types";
import MSStepProgressBar from "../MSStepsProgressBar";
import { orderProgressBarData } from "@/constants";
import useCustomBreakpoint from "@/helpers/screenSizes";
const steps = [
	"Pending Payment",
	"Creating Order",
	"In Transit",
	"Delivered",
	"Completed",
];

const OrderProgress = (props: OrderProgressProps) => {
	const { status } = props;
	const { activeStep } = orderProgressBarData[status];
	const { isMobile } = useCustomBreakpoint();
	const orientation = isMobile ? "vertical" : "horizontal";
	return (
		<div
			style={{
				display: "flex",
				alignItems: "flex-start",
				flex: 1,
			}}
		>
			<MSStepProgressBar
				steps={steps}
				activeStep={activeStep}
				orientation={orientation}
			/>
		</div>
	);
};

export default OrderProgress;
