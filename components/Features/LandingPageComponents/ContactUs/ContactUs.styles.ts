import { media } from "@/helpers/mediaQueryHelper";
import styled from "styled-components";

export const MainWrapper = styled.div`
	background: #43d9a4;
	margin-top: 30px;
	padding: 20px 40px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	border-radius: 10px;
	width: 100%;
	${media.below925`
    flex-direction: column;
    `};
`;
