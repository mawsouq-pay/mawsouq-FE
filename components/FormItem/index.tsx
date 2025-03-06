import React from "react";
import { ErrorMessage, Field } from "formik";
import {
	FormItemWrapper,
	Label,
	StyledInput,
	StyledTextArea,
	IconContainer,
	ErrorText,
} from "./FormItem.styles";
import { colors } from "@/constants/theme";

interface FormItemProps {
	label: string;
	type?: string;
	id?: string;
	name: string;
	placeholder?: string;
	as?: "input" | "textarea";
	style?: React.CSSProperties;
	icon?: React.ReactNode;
	iconPosition?: "left" | "right";
}

const FormItem: React.FC<FormItemProps> = ({
	label,
	type = "text",
	id = label,
	name,
	placeholder,
	as = "input",
	style,
	icon,
	iconPosition = "right",
}) => {
	const Component = as === "textarea" ? StyledTextArea : StyledInput;

	return (
		<FormItemWrapper>
			<Label style={{ color: "#222" }}>{label}</Label>
			<div style={{ position: "relative" }}>
				<Field
					as={Component}
					type={type}
					id={id}
					name={name}
					placeholder={placeholder}
					style={style}
				/>
				{icon && <IconContainer position={iconPosition}>{icon}</IconContainer>}
			</div>
			<ErrorMessage name={name} component={ErrorText} />
		</FormItemWrapper>
	);
};

export default FormItem;
