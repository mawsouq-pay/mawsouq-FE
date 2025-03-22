import styled from "styled-components";
import { colors } from "@/constants/theme";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	/* height: 100vh; */
	background: ${colors.backgroundColor};
`;

export const FormContainer = styled.div`
	background: ${colors.white};
	padding: 30px 40px 40px 40px;
	border-radius: 12px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	width: 100%;
	max-width: 400px;
`;
