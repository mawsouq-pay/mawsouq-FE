import { media } from "@/helpers/mediaQueryHelper";
import styled from "styled-components";

export const MainWrapper = styled.div`
	background: #b3fcdf;
	padding: 20px 40px;
	display: flex;
	flex-direction: row;
	gap: 20px;
	border-radius: 10px;

	${media.below925`
    flex-direction: column;
    `}
`;
