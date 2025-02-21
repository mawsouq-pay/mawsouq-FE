import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";
import styled from "styled-components";

export const FormWrapper = styled.div`
	//width: 35%;
	width: 800px;
	background-color: white;
	padding: 24px;
	border-radius: 20px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	${media.below925`
   	width: 300px;
    `}
`;

export const FormField = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
	width: 100%;
`;

export const PreviewText = styled.div`
	padding: 12px;
	border-bottom: 1px solid ${colors.green};
	border-radius: 2px;
	font-size: 14px;
	margin-top: 8px;
	background-color: ${colors.white};
	color: ${colors.black};
`;

export const PreviewTextArea = styled.div`
	padding: 12px;
	border-bottom: 1px solid ${colors.green};
	border-radius: 2px;
	font-size: 14px;
	margin-top: 8px;
	background-color: ${colors.white};
	color: ${colors.black};
	//height: 80px;
	overflow-y: auto;
`;

export const PaymentSummaryDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 30px;
	margin-bottom: 30px;
`;
