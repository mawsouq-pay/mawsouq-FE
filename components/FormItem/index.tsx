import React from "react";
import { ErrorMessage, Field, useFormikContext } from "formik";
import {
	FormItemWrapper,
	StyledInput,
	StyledTextArea,
	IconContainer,
	ErrorText,
} from "./FormItem.styles";
import MSText from "../Shared/MSText";
import { useLocaleStore } from "@/store";

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
	const { locale } = useLocaleStore();
	const Component = as === "textarea" ? StyledTextArea : StyledInput;
	const { setFieldValue } = useFormikContext();

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
					onChange={handleChange}
					{...(type === "tel" && locale == "ar" ? { dir: "rtl" } : {})}
				/>
				{icon && <IconContainer position={iconPosition}>{icon}</IconContainer>}
			</div>
			<ErrorMessage name={name} component={ErrorText} />
		</FormItemWrapper>
	);
};

export default FormItem;
