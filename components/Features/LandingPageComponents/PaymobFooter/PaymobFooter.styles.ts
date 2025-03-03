import styled from "styled-components";
import { media } from "@/helpers/mediaQueryHelper";

export const MainContainer = styled.div`
	/* background-color: #43d9a4; */
	padding: 20px 30px;
	display: flex;
	flex-direction: row;
	align-items: center;
	${media.below925`
	flex-direction: column;
    `}
`;
