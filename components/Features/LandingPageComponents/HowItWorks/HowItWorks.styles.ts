import styled from "styled-components";
import { media } from "@/helpers/mediaQueryHelper";

export const FeaturesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 32px;
	width: 100%;
	padding: 4rem 2rem 5rem 2rem;
	background-color: #ecf9ee;
	border-radius: 40px;
	${media.below925`
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
	padding: 2rem 2rem 3rem 2rem;

  `}
`;

export const FeatureItem = styled.div`
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	padding: 20px;
	border-radius: 10px;
	transition: 0.3s ease-in-out;
	/* background-color: red; */
	align-content: start;
	justify-content: start;
	text-align: start;
	/* background-color: rgba(67, 180, 124, 0.2); */
`;

export const FeatureIcon = styled.div`
	margin-bottom: 2px;
`;

export const FeatureTitle = styled.h3`
	font-size: 1.2rem;
	font-weight: bold;
	color: #222;
	margin-top: 2px;
	margin-bottom: 8px;
	text-align: start;
`;

export const FeatureDescription = styled.p`
	font-size: 1rem;
	color: #555;
	text-align: center;
	max-width: 300px;
	text-align: start;
`;

export const Divider = styled.div`
	width: 100%;
	height: 1px;
	background-color: #ddd;
	margin: 10px 0;
`;
