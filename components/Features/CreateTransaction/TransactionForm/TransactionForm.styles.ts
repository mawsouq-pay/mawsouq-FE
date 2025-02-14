import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";
import { Field, Form } from "formik";
import styled from "styled-components";

export const FormContainer = styled.div`
	max-width: 750px;
	margin: 0 auto;
	background-color: ${colors.white};
	border-radius: 20px;
	padding: 20px 0px 50px 0px;
	${media.below925`
	padding: 30px 25px 50px 25px;
 	 `}

	display: flex;
	flex: 1;
	flex-direction: column;
`;

export const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	flex: 1;
	//gap: 20px;
`;

export const InputField = styled(Field)`
	width: 100%;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	margin-top: 5px;
`;

export const TextAreaField = styled(Field)`
	width: 100%;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	margin-top: 5px;
	height: 80px;
`;

export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: flex-end;
	background: ${colors.buttonGreenBackground};
	color: white;
	padding: 15px 18px;
	border: none;
	cursor: pointer;
	border-radius: 8px;
	margin-top: 10px;

	&:hover {
		background: ${colors.buttonGreenHover};
	}
`;

export const FlexRow = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	justify-content: space-between;
	gap: 30px;

	${media.below925`
		gap: 20px;
	`}
`;
export const BackButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: flex-end;
	background: transparent;
	border: 1px solid ${colors.buttonGreenBackground};
	color: black;
	padding: 15px 18px;
	cursor: pointer;
	border-radius: 8px;
	margin-top: 10px;

	&:hover {
		background: ${colors.buttonGreenBackground};
	}
`;
