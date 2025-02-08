import React from "react";
import { ErrorMessage, Field } from "formik";
import {
	FormItemWrapper,
	Label,
	StyledInput,
	IconContainer,
	ErrorText,
} from "./FormItem.styles";

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
	return (
		<FormItemWrapper>
			<Label style={labelStyle}>{label}</Label>
			<div style={{ position: "relative" }}>
				<Field
					as={StyledInput}
					type={type}
					id={id}
					name={name}
					placeholder={placeholder}
					style={{ ...style }}
				/>
				{icon && <IconContainer position={iconPosition}>{icon}</IconContainer>}
			</div>
			<ErrorMessage name={name} component={ErrorText} />
		</FormItemWrapper>
	);
};

export default FormItem;
