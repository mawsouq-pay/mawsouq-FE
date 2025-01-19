interface ButtonProps {
	title: string;
	onClick?: () => void;
	loading?: boolean;
	style?: React.CSSProperties;
	disabled?: boolean;
}
