import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";
import styled from "styled-components";

export const FormWrapper = styled.div`
	background: white;
	padding: 30px;
	border-radius: 10px;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	min-width: 40%;
	max-width: 700px;
	display: flex;
	flex-direction: column;
	gap: 5px;
	${media.below925`
   	width: 100%;
    padding: 30px;
    `}
`;

export const Label = styled.label`
	font-size: 14px;
	font-weight: 600;
	color: #333;
`;

export const AgreementContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 12px;
	color: #555;
	margin-top: 10px;
`;

export const ToggleSwitch = styled.input`
	appearance: none;
	width: 40px;
	height: 20px;
	background: #ddd;
	border-radius: 20px;
	position: relative;
	cursor: pointer;

	&:checked {
		background: ${colors.green};
	}

	&::before {
		content: "";
		position: absolute;
		width: 16px;
		height: 16px;
		background: white;
		border-radius: 50%;
		top: 2px;
		left: 3px;
		transition: 0.3s;
	}

	&:checked::before {
		left: 21px;
	}
`;

export const SubmitButton = styled.button`
	width: 100%;
	padding: 12px;
	background-color: ${colors.green};
	border: none;
	border-radius: 6px;
	color: white;
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;
	transition: 0.3s ease;
	margin-top: 30px;

	&:disabled {
		background-color: #9fdac2;
		cursor: not-allowed;
	}

	&:hover {
		background-color: ${colors.buttonGreenHover};
	}
`;

export const OrDivider = styled.div`
	text-align: center;
	color: #888;
	font-size: 14px;
	margin: 10px 0;
`;

export const TextLink = styled.a`
	color: #31c48d;
	text-decoration: none;
	font-weight: bold;
	cursor: pointer;
	text-align: center;

	&:hover {
		text-decoration: underline;
	}
`;
export const Logo = styled.div`
	font-size: 34px;
	font-weight: bold;
	color: black;
	cursor: pointer;
	align-self: center;
	span {
		color: #2f80ed;
		font-style: italic;
	}
`;
