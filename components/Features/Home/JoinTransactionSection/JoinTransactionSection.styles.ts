import styled from "styled-components";
import { colors } from "@/constants/theme";

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;
`;
export const ContentWrapper = styled.div`
	//text-align: center;
	margin-bottom: 16px;
`;

export const StyledInput = styled.input`
	width: 100%;
	padding: 12px;
	border: 1px solid ${colors.gray};
	border-radius: 6px;
	font-size: 16px;
	outline: none;

	&:focus {
		border-color: ${colors.green};
	}
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	margin-top: 20px;
	display: flex;
	//justify-content: center;
`;
