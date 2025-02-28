import React from "react";
import { OrderProgressProps } from "./types";
import { orderProgressBarData } from "@/constants";
import useCustomBreakpoint from "@/helpers/screenSizes";
import MSStepProgressBar from "../../../Shared/MSStepsProgressBar";
const steps = ["Pending Payment", "Money on hold", "Order Completed"];

const OrderProgress = (props: OrderProgressProps) => {
	const { status } = props;
	const { activeStep } = orderProgressBarData[status];
	const { isMobile } = useCustomBreakpoint();
	const orientation = false ? "vertical" : "horizontal";
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
