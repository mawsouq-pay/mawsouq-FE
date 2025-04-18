import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { StepIconProps } from "@mui/material/StepIcon";
import Check from "@mui/icons-material/Check";
import { StepProgressBarProps } from "./types";
import {
	QontoStepIconRoot,
	VerticalConnector,
	HorizontalConnector,
} from "./MSStepsProgressBar.styles";
import MSText from "../MSText";
import { useLocaleStore } from "@/store";

function QontoStepIcon(props: StepIconProps) {
	const { active, completed, icon, className } = props;
	return (
		<QontoStepIconRoot ownerState={{ active, completed }} className={className}>
			{completed ? (
				<Check className="QontoStepIcon-check" />
			) : (
				<span className="QontoStepIcon-number">{icon}</span>
			)}
		</QontoStepIconRoot>
	);
}

const MSStepProgressBar = (props: StepProgressBarProps) => {
	const { steps, activeStep, orientation = "horizontal" } = props;
	const { locale } = useLocaleStore();
	const isRTL = locale === "ar";
	return (
		<Stepper
			alternativeLabel={orientation == "horizontal" ? true : false}
			activeStep={activeStep}
			connector={
				orientation === "vertical" ? (
					<VerticalConnector />
				) : (
					<HorizontalConnector $isRTL={isRTL} />
				)
			}
			orientation={orientation}
			style={{ display: "flex", width: "100%" }}
			sx={{ direction: isRTL ? "rtl" : "ltr" }}
		>
			{steps.map((label) => (
				<Step key={label}>
					<StepLabel StepIconComponent={QontoStepIcon}>
						<MSText fontSize={"14px"}>{label}</MSText>
					</StepLabel>{" "}
				</Step>
			))}
		</Stepper>
	);
};

export default MSStepProgressBar;
