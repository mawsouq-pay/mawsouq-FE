import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";
import styled from "styled-components";

export const MainWrapper = styled.div`
	background: white;
	flex-direction: column;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	min-width: 40%;
	max-width: 700px;
	display: flex;
	flex-direction: column;
	gap: 5px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
`;
export const FormWrapper = styled.div`
	padding: 5px 30px 30px 30px;

	${media.below925`
   	width: 100%;
	   padding: 15px 30px 30px 30px;
    `}
`;

export const OrDivider = styled.div`
	text-align: center;
	color: #888;
	font-size: 14px;
	margin: 10px 0;
`;

export const TextLink = styled.a`
	color: #31c48d;
	text-decoration: none;
	font-weight: bold;
	cursor: pointer;
	text-align: center;

	&:hover {
		text-decoration: underline;
	}
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
