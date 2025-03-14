import { media } from "@/helpers/mediaQueryHelper";
import styled from "styled-components";

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 850px;
	margin: 30px auto;
	border-radius: 8px;
	${media.below925`
	margin: 30px 10px;


    `}
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex: 1;
	height: 100%;
	width: 100%;
	flex-direction: column;
	margin-top: 10px;
`;
