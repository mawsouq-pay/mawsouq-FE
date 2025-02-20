interface ButtonProps {
	onClick?: (inp?: any) => void;
	style?: React.CSSProperties;
	loading?: boolean;
	disabled?: boolean;
	title: string;
	type?: "button" | "reset" | "submit";
}
