import { colors } from "@/constants/theme";
import styled from "styled-components";

export const PageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 24px;
`;

export const Card = styled.div`
	border-radius: 12px;
	padding: 32px;
	text-align: center;
`;

export const Title = styled.h1`
	font-size: 24px;
	color: ${colors.green};
	margin-bottom: 16px;
`;

export const Description = styled.p`
	font-size: 16px;
	color: ${colors.black};
	margin-bottom: 32px;
`;

export const StartButton = styled.button`
	background-color: ${colors.green};
	color: ${colors.white};
	border: none;
	padding: 12px 24px;
	font-size: 16px;
	border-radius: 8px;
	cursor: pointer;
	font-weight: 600;

	&:hover {
		opacity: 0.9;
	}
`;
