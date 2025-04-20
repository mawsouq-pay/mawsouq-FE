import React, { useRef } from "react";
import { Box, styled } from "@mui/material";
import { Input } from "@base-ui-components/react/input";
import { colors } from "@/constants/theme";

interface OTPInputProps {
	length: number;
	value: string;
	onChange: (value: string) => void;
}

export const OTPInput: React.FC<OTPInputProps> = ({
	length,
	value,
	onChange,
}) => {
	const inputRefs = useRef<HTMLInputElement[]>([]);

	const focusInput = (index: number) => {
		inputRefs.current[index]?.focus();
	};

	const selectInput = (index: number) => {
		inputRefs.current[index]?.select();
	};

	const handleKeyDown = (
		event: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) => {
		switch (event.key) {
			case "ArrowLeft":
				event.preventDefault();
				if (index > 0) focusInput(index - 1);
				break;
			case "ArrowRight":
				event.preventDefault();
				if (index < length - 1) focusInput(index + 1);
				break;
			case "Backspace":
				event.preventDefault();
				onChange((prev: string) => {
					const arr = prev.split("");
					arr[index] = "";
					return arr.join("");
				});
				if (index > 0) focusInput(index - 1);
				break;
			case "Delete":
				event.preventDefault();
				onChange((prev) => {
					const arr = prev.split("");
					arr[index] = "";
					return arr.join("");
				});
				break;
			case " ":
			case "ArrowUp":
			case "ArrowDown":
				event.preventDefault();
				break;
			default:
				break;
		}
	};

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const val = event.target.value;
		if (!val) return;

		const lastChar = val[val.length - 1];
		onChange((prev) => {
			const arr = prev.split("");
			arr[index] = lastChar;
			return arr.join("");
		});

		if (index < length - 1) focusInput(index + 1);
	};

	const handleClick = (
		event: React.MouseEvent<HTMLInputElement>,
		index: number
	) => {
		selectInput(index);
	};

	const handlePaste = (
		event: React.ClipboardEvent<HTMLInputElement>,
		index: number
	) => {
		event.preventDefault();
		const clipboardData = event.clipboardData.getData("text/plain").trim();
		if (!clipboardData) return;

		const pasted = clipboardData.slice(0, length - index);
		onChange((prev) => {
			const arr = prev.split("");
			for (let i = 0; i < pasted.length && index + i < length; i++) {
				arr[index + i] = pasted[i];
			}
			return arr.join("");
		});

		const nextIndex = Math.min(index + pasted.length, length - 1);
		setTimeout(() => focusInput(nextIndex), 0);
	};

	return (
		<Box sx={{ display: "flex", gap: 1 }}>
			{Array.from({ length }).map((_, i) => (
				<InputElement
					key={i}
					ref={(el) => {
						if (el) inputRefs.current[i] = el;
					}}
					value={value[i] || ""}
					onChange={(e) => handleChange(e, i)}
					onKeyDown={(e) => handleKeyDown(e, i)}
					onClick={(e) => handleClick(e, i)}
					onPaste={(e) => handlePaste(e, i)}
					inputMode="numeric"
					type="number"
					maxLength={1}
				/>
			))}
		</Box>
	);
};
const InputElement = styled(Input)`
	width: 48px;
	height: 56px;
	font-size: 20px;
	text-align: center;
	border-radius: 8px;
	border: 1px solid ${colors.green};
	background-color: #fff;
	color: #000;
	font-family: inherit;

	&:focus {
		border-color: ${colors.green};
		box-shadow: 0 0 0 2px rgba(24, 180, 81, 0.2);
		outline: none;
	}
`;
