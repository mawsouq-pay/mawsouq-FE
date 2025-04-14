import styled from "styled-components";
import { TextField } from "@mui/material";
import { colors } from "@/constants/theme";

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const FormBox = styled.div`
	background-color: white;
	padding: 24px;
	border-radius: 16px;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
	width: 100%;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const InputField = styled(TextField)`
	background-color: #f9f9f9;
	border-radius: 8px;

	.MuiOutlinedInput-root {
		border-radius: 8px;
	}

	input {
		font-size: 14px;
		padding: 12px;
	}
`;

export const Row = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;
