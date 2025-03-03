// import styled from "styled-components";
// import { colors } from "@/constants/theme";

// export const HowItWorksContainer = styled.section`
// 	text-align: center;
// 	padding: 4rem 2rem;
// 	//background: white;
// 	border-radius: 10px;
// `;

// export const FeaturesGrid = styled.div`
// 	display: grid;
// 	grid-template-columns: repeat(2, 1fr);
// 	gap: 20px;
// 	max-width: 1000px;
// 	margin: 0 auto;
// 	margin-top: 3rem;
// 	@media (max-width: 768px) {
// 		grid-template-columns: 1fr;
// 	}
// `;

// export const FeatureCard = styled.div`
// 	background: #f9f9f9;
// 	border-radius: 12px;
// 	padding: 30px 20px;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	gap: 20px;
// 	outline: 1px solid #ddf8ed;
// 	box-shadow: 0 4px 8px #ddf8ed;
// 	transition: 0.3s ease-in-out;

// 	&:hover {
// 		transform: translateY(-5px);
// 	}

// 	@media (max-width: 768px) {
// 		flex-direction: column;
// 		text-align: center;
// 	}
// `;

// export const FeatureContent = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	flex: 1;
// 	justify-content: flex-start;
// 	align-items: flex-start;
// `;

// export const FeatureImage = styled.div`
// 	flex-shrink: 0;
// 	width: 120px;
// 	height: auto;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	margin-bottom: 10px;
// `;

// export const CTAButton = styled.button`
// 	background-color: ${colors.buttonGreenBackground};
// 	color: white;
// 	font-size: 1rem;
// 	font-weight: bold;
// 	padding: 10px 16px;
// 	border: none;
// 	border-radius: 8px;
// 	cursor: pointer;
// 	transition: 0.3s ease-in-out;
// 	margin-top: 1rem;

// 	&:hover {
// 		background-color: ${colors.buttonGreenBackground};
// 	}
// `;

// export const Tag = styled.div`
// 	background: #e8e8e8;
// 	color: #333;
// 	font-size: 0.8rem;
// 	padding: 5px 10px;
// 	border-radius: 20px;
// 	display: inline-block;
// 	margin-bottom: 10px;
// `;

import styled from "styled-components";
import { media } from "@/helpers/mediaQueryHelper";

export const FeaturesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 32px;
	width: 100%;
	padding: 4rem 2rem 0rem 2rem;

	${media.below925`
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
	padding: 2rem 2rem 0rem 2rem;

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
