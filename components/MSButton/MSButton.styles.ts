import styled from "styled-components";
import { colors } from "@/constants/theme";

export const StyledButton = styled.button`
	padding: 0px 18px;
	background-color: ${colors.buttonGreenBackground};

	border: none;
	border-radius: 8px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	text-align: center;

	&:hover {
		background-color: ${colors.buttonGreenHover};
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 4px ${colors.buttonGreenHover};
	}

	&:disabled {
		background-color: ${colors.gray};
		cursor: not-allowed;
		opacity: 0.7;
	}
`;
