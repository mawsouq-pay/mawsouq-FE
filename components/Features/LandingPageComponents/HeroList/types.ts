interface Step {
	label: string;
	isActive: boolean;
}

interface StepsListProps {
	title: string;
	steps: Step[];
}
