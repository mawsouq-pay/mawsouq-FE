import styled from "styled-components";
import { colors } from "@/constants/theme";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	gap: 16px;
	padding: 20px;
`;

export const MessageWrapper = styled.div`
	margin-top: 0px;
	color: ${colors.red};
`;
export const ErrorMessageBox = styled.div`
	width: 100%;
	background-color: rgba(255, 0, 0, 0.1);
	color: ${colors.error || "red"};
	padding: 16px;
	border-radius: 8px;
	border: 1px solid ${colors.error || "red"};
	font-size: 14px;
	font-weight: 500;
	text-align: center;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	margin-top: 16px;
	margin-bottom: 16px;
`;
