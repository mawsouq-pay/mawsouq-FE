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

}

const FormItem: React.FC<FormItemProps> = ({
	label,
	type = "text",
	id,
	name,
	placeholder,
	as = "input",
	style,
	labelStyle
}) => {
	return (
		<div>
			<MSText fontSize="16px" color={colors.gray} style={labelStyle}>
				{label}
			</MSText>
			<Field
				as={as}
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				style={
					style
				}
			/>
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
