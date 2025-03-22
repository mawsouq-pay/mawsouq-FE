import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";
import styled from "styled-components";

export const MainWrapper = styled.div`
	background: white;
	flex-direction: column;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	width: 100%;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	gap: 5px;
	border-radius: 10px;
`;
export const FormWrapper = styled.div`
	padding: 5px 30px 30px 30px;

	${media.below925`
   	width: 100%;
	padding: 0px 20px 30px 20px;
    `}
`;

export const OrDivider = styled.div`
	text-align: center;
	color: #888;
	font-size: 14px;
	margin: 15px 0;
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
	padding: 0px;
`;
export const PasswordDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 100%;
	align-items: flex-end;
`;
