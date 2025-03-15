import { media } from "@/helpers/mediaQueryHelper";
import styled from "styled-components";

export const MainDiv = styled.div`
	padding: 3rem 2rem 5rem 2rem;
	${media.below925`
    text-align: center;
	padding: 2rem 2rem 3rem 2rem;

  `}
`;
