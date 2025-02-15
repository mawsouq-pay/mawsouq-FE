export interface HowItWorksStepTimeLineProps {
	steps: {
		title: string;
		description: string;
		imageSource: any;
	}[];
	activeStep: number;
	setActiveStep: (step: number) => void;
	stopAnimation: () => void;
	resumeAnimation: () => void;
}
