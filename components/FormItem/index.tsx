import React from "react";
import { ErrorMessage, Field } from "formik";
import MSText from "../MSText";
import { colors } from "@/constants/theme";

interface FormItemProps {
	label: string;
	type?: string;
	id: string;
	name: string;
	placeholder?: string;
	as?: "input" | "textarea";
	style?: React.CSSProperties;
	labelStyle?: React.CSSProperties;
	icon?: React.ReactNode;
	iconPosition?: "left" | "right";
}

const FormItem: React.FC<FormItemProps> = ({
	label,
	type = "text",
	id,
	name,
	placeholder,
	as = "input",
	style,
	labelStyle,
	icon,
	iconPosition = "right",
}) => {
	const labelStyling: React.CSSProperties = {
		color: "#75859E",
		textAlign: "left",
		display: "block",
	};
	return (
		<div style={{ position: "relative" }}>
			<MSText
				fontSize="16px"
				color={colors.gray}
				style={{ ...labelStyling, ...labelStyle }}
			>
				{label}
			</MSText>
			<div
				style={{ display: "flex", alignItems: "center", position: "relative" }}
			>
				<Field
					as={as}
					type={type}
					id={id}
					name={name}
					placeholder={placeholder}
					style={{
						border: "1px solid #ccc",
						width: "100%",

						...style,
					}}
				/>
				{icon && (
					<span
						style={{
							position: "absolute",
							[iconPosition]: "8px",
							cursor: "pointer",
							display: "flex",
							alignItems: "center",
						}}
					>
						{icon}
					</span>
				)}
			</div>
			<ErrorMessage
				name={name}
				render={(msg) => (
					<MSText color="red" fontSize="12px">
						{msg}
					</MSText>
				)}
			/>
		</div>
	);
};

export default FormItem;
