import React from "react";
import { ErrorMessage, Field, useFormikContext } from "formik";
import {
	FormItemWrapper,
	Label,
	StyledInput,
	StyledTextArea,
	IconContainer,
	ErrorText,
} from "./FormItem.styles";
import MSText from "../Shared/MSText";

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
	const { setFieldValue } = useFormikContext(); // Get Formik context

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const sanitizedValue =
			type === "tel" ? e.target.value.replace(/\s/g, "") : e.target.value;
		setFieldValue(name, sanitizedValue);
	};

	return (
		<FormItemWrapper>
			<MSText fontWeight="600" fontSize="14px">
				{label}
			</MSText>
			<div style={{ position: "relative" }}>
				<Field
					as={Component}
					type={type}
					id={id}
					name={name}
					placeholder={placeholder}
					style={style}
					onChange={handleChange} // Handle change internally
				/>
				{icon && <IconContainer position={iconPosition}>{icon}</IconContainer>}
			</div>
			<ErrorMessage name={name} component={ErrorText} />
		</FormItemWrapper>
	);
};

export default FormItem;
