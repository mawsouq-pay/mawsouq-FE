import { colors } from "@/constants/theme";
import styled from "styled-components";

export const FailureCard = styled.div`
	background-color: #ffffff;
	border-radius: 15px;
	padding: 40px 30px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	text-align: center;
	max-width: 400px;
	width: 100%;
`;

export const FailureIcon = styled.div`
	font-size: 60px;
	color: ${colors.blue};
	margin-bottom: 20px;
`;
