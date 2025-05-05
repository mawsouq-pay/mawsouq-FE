import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";
import styled from "styled-components";

export const MainWrapper = styled.div`
	background: white;
	flex-direction: column;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	width: 100%;
	max-width: 600px;
	display: flex;
	flex-direction: column;
	gap: 5px;
	border-radius: 10px;
	margin-top: 15px;
`;

export const FormWrapper = styled.div`
	padding: 5px 30px 30px 30px;

	${media.below925`
   	width: 100%;
	   padding: 0px 20px 30px 20px;
    `}
`;
export const Logo = styled.div`
	cursor: pointer;
	text-align: center;
	width: 100%;
	background-color: ${colors.green};
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	padding: 5px;
`;


export const OrDivider = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	color: ${colors.gray};
	font-size: 14px;
	margin: 20px 0;

	&::before,
	&::after {
		content: "";
		flex: 1;
		border-bottom: 1px solid ${colors.gray};
	}

	&::before {
		margin-right: 10px;
	}

	&::after {
		margin-left: 10px;
	}
`;

export const TextLink = styled.a`
	color: ${colors.green};
	text-decoration: none;
	font-weight: 600;

	&:hover {
		text-decoration: underline;
	}
`;

export const TermsContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 15px;
	gap: 8px;
`;

export const TermsCheckbox = styled.input.attrs({ type: "checkbox" })`
	width: 16px;
	height: 16px;
	cursor: pointer;
`;

export const TermsText = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: 14px;
	color: ${colors.gray};
`;

export const TermsLink = styled.a`
	color: ${colors.green};
	text-decoration: none;
	font-weight: 600;

	&:hover {
		text-decoration: underline;
	}
`;
