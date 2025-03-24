import { colors } from "@/constants/theme";
import { Form } from "formik";
import styled from "styled-components";

export const FlexRow = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	justify-content: space-between;
	gap: 30px;
	margin-top: 50px;
`;
export const CancelButton = styled.button`
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
export const StyledForm = styled(Form)`
	padding: 0px 1px;
	/* gap: 20px; */
`;
