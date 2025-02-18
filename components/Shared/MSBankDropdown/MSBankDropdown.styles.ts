import styled from "styled-components";
import { colors } from "@/constants/theme";

export const Select = styled.select`
	width: 100%;
	padding: 10px 12px;
	border: 1px solid ${colors.gray};
	border-radius: 6px;
	font-size: 16px;
	background-color: ${colors.white};
	color: ${colors.black};
	cursor: pointer;
	outline: none;
	position: relative;
	transition: border 0.2s ease-in-out;

	&:focus {
		border: 2px solid ${colors.green};

		box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	}

	&:hover {
		border-color: ${colors.green};
	}
`;

export const Option = styled.option`
	padding: 8px;
	background-color: ${colors.white};
	color: ${colors.black};
	font-size: 16px;

	&:hover {
		background-color: ${colors.green};
		color: ${colors.white};
	}
`;
