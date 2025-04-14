import React from "react";
import { TextField } from "@mui/material";
import { colors } from "@/constants/theme";

interface MSTextFieldProps {
	type?: string;
	placeholder?: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	fullWidth?: boolean;
	error?: boolean;
	helperText?: string;
}

const MSTextField: React.FC<MSTextFieldProps> = ({
	type = "text",
	placeholder,
	value,
	onChange,
	disabled = false,
	fullWidth = true,
	error = false,
	helperText = "",
}) => {
	return (
		<TextField
			type={type}
			variant="outlined"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			disabled={disabled}
			fullWidth={fullWidth}
			error={error}
			helperText={helperText}
			sx={{
				"& .MuiOutlinedInput-root": {
					borderRadius: "8px",
					backgroundColor: colors.white,
				},
				"& .MuiOutlinedInput-notchedOutline": {
					borderColor: error ? colors.red : colors.gray200,
				},
				"&:hover .MuiOutlinedInput-notchedOutline": {
					borderColor: colors.green,
				},
				"& .MuiOutlinedInput-input": {
					padding: "12px",
				},
				"& .MuiFormHelperText-root": {
					color: colors.red,
					marginLeft: "0px",
					fontSize: "12px",
					marginTop: "4px",
				},
			}}
		/>
	);
};

export default MSTextField;
