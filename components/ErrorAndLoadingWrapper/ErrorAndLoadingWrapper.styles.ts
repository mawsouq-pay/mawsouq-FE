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
	margin-top: 10px;
	color: ${colors.red};
`;
