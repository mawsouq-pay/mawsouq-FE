import { media } from "@/helpers/mediaQueryHelper";
import styled from "styled-components";

export const MainWrapper = styled.div`
	/* background: linear-gradient(to bottom, #ddf8ed, #ffffff); */
	padding: 20px 40px;
	display: flex;
	flex-direction: row;
	gap: 20px;
	border-radius: 10px;

	${media.below925`
    flex-direction: column;
    `}
`;
