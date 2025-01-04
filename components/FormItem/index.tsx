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
}

const FormItem: React.FC<FormItemProps> = ({
	label,
	type = "text",
	id,
	name,
	placeholder,
	as = "input",
}) => {
	return (
		<div>
			<MSText fontSize="16px" color={colors.gray}>
				{label}
			</MSText>
			<Field
				as={as}
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				style={{
					width: "100%",
					padding: "8px",
					border: "1px solid #ccc",
					borderRadius: "4px",
					marginTop: "10px",
					marginBottom: "5px",
				}}
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
