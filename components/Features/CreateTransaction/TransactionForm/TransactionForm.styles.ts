import { media } from "@/helpers/mediaQueryHelper";
import { Form } from "formik";
import styled from "styled-components";

export const FormContainer = styled.div`
	max-width: 750px;
	margin: 0 auto;
	border-radius: 20px;
	padding: 20px 0px 50px 0px;
	display: flex;
	flex: 1;
	flex-direction: column;

	${media.below925`
	padding: 10px 10px 50px 10px;
 	`}
`;

export const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 5px;
`;
