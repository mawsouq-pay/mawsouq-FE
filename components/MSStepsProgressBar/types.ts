import { Orientation } from "@mui/material/Stepper";

export interface StepProgressBarProps {
	steps: string[];
	activeStep: number;
	orientation?: Orientation;
}
