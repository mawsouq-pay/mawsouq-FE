import { colors } from "@/constants/theme";
import styled from "styled-components";

export const FormWrapper = styled.div`
	min-width: 50%;
	background-color: white;
	padding: 24px;
	border-radius: 20px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FormField = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 16px;
`;

export const PreviewText = styled.div`
	padding: 12px;
	border: 1px solid ${colors.green};
	border-radius: 2px;
	font-size: 14px;
	margin-top: 8px;
	background-color: ${colors.white};
	color: ${colors.black};
`;

export const PreviewTextArea = styled.div`
	padding: 12px;
	border: 1px solid ${colors.green};
	border-radius: 2px;
	font-size: 14px;
	margin-top: 8px;
	background-color: ${colors.white};
	color: ${colors.black};
	height: 80px;
	overflow-y: auto;
`;

export const PaymentSummaryDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 30px;
	margin-bottom: 30px;
`;
