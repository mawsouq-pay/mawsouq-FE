import React from "react";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
	stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import { colors } from "@/constants/theme";
import Check from "@mui/icons-material/Check";

// Custom Connector
const QontoConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 15,
		left: "calc(-50% + 16px)",
		right: "calc(50% + 16px)",
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: `${colors.green}`,
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: `${colors.green}`,
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		borderColor: "#eaeaf0",
		borderTopWidth: 3,
		borderRadius: 1,
	},
}));

// Custom Step Icon Styles
const QontoStepIconRoot = styled("div")<{
	ownerState: { active?: boolean; completed?: boolean };
}>(({ ownerState }) => ({
	color: ownerState.completed
		? `${colors.green}`
		: ownerState.active
			? `${colors.green}`
			: "#eaeaf0",
	display: "flex",
	alignItems: "center",
	height: 30,
	width: 30,
	justifyContent: "center",
	borderRadius: "50%",
	border: ownerState.active ? `3px solid ${colors.green}` : "3px solid #eaeaf0",
	backgroundColor: ownerState.completed
		? `${colors.green}`
		: ownerState.active
			? "#ffffff"
			: "#eaeaf0",
	zIndex: 1,
	"& .QontoStepIcon-number": {
		color: ownerState.completed
			? "#ffffff"
			: ownerState.active
				? `${colors.green}`
				: "#555555",
		fontWeight: 600,
		fontSize: "16px",
	},
	"& .QontoStepIcon-check": {
		color: "#ffffff",
		width: 16,
		height: 16,
		borderRadius: "50%",
		fontSize: "18px",
	},
}));

// Custom Step Icon
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

// Step Progress Bar Component
interface StepProgressBarProps {
	steps: string[];
	activeStep: number;
}

const MSStepProgressBar = (props: StepProgressBarProps) => {
	const { steps, activeStep } = props;
	return (
		<Stepper
			alternativeLabel
			activeStep={activeStep}
			connector={<QontoConnector />}
			style={{ display: "flex", flex: 1 }}
		>
			{steps.map((label, index) => (
				<Step key={label}>
					<StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
				</Step>
			))}
		</Stepper>
	);
};

export default MSStepProgressBar;
