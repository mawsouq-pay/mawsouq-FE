import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { StepIconProps } from "@mui/material/StepIcon";
import Check from "@mui/icons-material/Check";
import { StepProgressBarProps } from "./types";
import MSText from "../MSText";
import {
	QontoStepIconRoot,
	VerticalConnector,
	HorizontalConnector,
} from "./MSStepsProgressBar.styles";

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

	return (
		<Stepper
			alternativeLabel={orientation == "horizontal" ? true : false}
			activeStep={activeStep}
			connector={
				orientation === "vertical" ? (
					<VerticalConnector />
				) : (
					<HorizontalConnector />
				)
			}
			orientation={orientation}
			style={{ display: "flex", flex: 1 }}
		>
			{steps.map((label, index) => (
				<Step key={label}>
					<StepLabel StepIconComponent={QontoStepIcon}>
						<MSText fontSize={"16px"} mobileFontSize="20px">
							{label}
						</MSText>
					</StepLabel>{" "}
				</Step>
			))}
		</Stepper>
	);
};

export default MSStepProgressBar;
