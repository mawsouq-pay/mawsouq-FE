import { media } from "@/helpers/mediaQueryHelper";
import styled from "styled-components";

export const MainContainer = styled.div`
	text-align: center;
	padding: 4rem 2rem;
	background: linear-gradient(to bottom, #b3fcdf, #ffffff);
`;

export const ProofGrid = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
`;

export const ProofRow = styled.div<{ center?: boolean }>`
	display: flex;
	gap: 100px;
	margin-bottom: 20px;

	${({ center }) =>
		center &&
		`
    justify-content: center;
  `}

	${media.below925`
	flex-direction: column;
		align-items: center;
		gap:10px
	`}
`;

export const ProofCaption = styled.p`
	font-size: 1.2rem;
	color: #555;
	margin-top: 1rem;
	font-weight: bold;
`;
export const ProofImage = styled.div`
	flex-shrink: 0;
	width: 350px;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;
