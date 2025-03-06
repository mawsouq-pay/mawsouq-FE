import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";
import { Form } from "formik";
import styled from "styled-components";

export const FormContainer = styled.div`
	max-width: 750px;
	margin: 0 auto;
	/* background-color: ${colors.white}; */
	border-radius: 20px;
	padding: 20px 0px 50px 0px;
	${media.below925`
	padding: 30px 25px 50px 25px;
 	 `}

	display: flex;
	flex: 1;
	flex-direction: column;
	/* align-items: center; */
`;

export const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 5px;
`;
