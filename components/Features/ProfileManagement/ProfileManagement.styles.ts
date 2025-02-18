import { colors } from "@/constants/theme";
import styled from "styled-components";

export const Container = styled.div`
	margin-top: 20px;
`;

export const Title = styled.h2`
	font-size: 24px;
	font-weight: bold;
	color: ${colors.green};
	text-align: center;
	margin-bottom: 10px;
`;

export const Description = styled.p`
	font-size: 16px;
	color: ${colors.gray};
	text-align: center;
	margin-bottom: 20px;
	line-height: 1.5;
`;
