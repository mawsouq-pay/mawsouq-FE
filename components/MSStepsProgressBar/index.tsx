import React from "react";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import StepConnector, {
	stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 10,
		left: "calc(-50% + 16px)",
		right: "calc(50% + 16px)",
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: "#784af4",
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: "#784af4",
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		borderColor: "#eaeaf0",
		borderTopWidth: 3,
		borderRadius: 1,
	},
}));

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
	({ ownerState }) => ({
		color: ownerState.active ? "#784af4" : "#eaeaf0",
		display: "flex",
		height: 22,
		alignItems: "center",
		"& .QontoStepIcon-completedIcon": {
			color: "#784af4",
			zIndex: 1,
			fontSize: 18,
		},
		"& .QontoStepIcon-circle": {
			width: 16,
			height: 16,
			borderRadius: "50%",
			backgroundColor: "currentColor",
		},
	})
);

function QontoStepIcon(props: StepIconProps) {
	const { active, completed, className } = props;
	return (
		<QontoStepIconRoot ownerState={{ active }} className={className}>
			{completed ? (
				<Check className="QontoStepIcon-completedIcon" />
			) : (
				<div className="QontoStepIcon-circle" />
			)}
		</QontoStepIconRoot>
	);
}

const MSStepProgressBar = (props: StepProgressBarProps) => {
	const { steps, activeStep } = props;
	return (
		<Stepper
			alternativeLabel
			activeStep={activeStep}
			connector={<QontoConnector />}
		>
			{steps.map((label) => (
				<Step key={label}>
					<StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
				</Step>
			))}
		</Stepper>
	);
};

export default MSStepProgressBar;
