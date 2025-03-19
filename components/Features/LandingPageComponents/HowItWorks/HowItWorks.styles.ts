import styled from "styled-components";
import { media } from "@/helpers/mediaQueryHelper";
import { colors } from "@/constants/theme";

export const FeaturesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	/* align-items: center; */
	width: 100%;
	padding: 4rem 2rem 7rem 2rem;
	background-color: #ecf9ee;
	border-radius: 40px;
	gap: 24px;

	${media.below925`
		flex-direction: column;
		align-items: center;
		padding: 2rem 2rem 5rem 2rem;
	`}
`;

export const FeatureItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 10px;
`;

export const FeatureIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 5px;
	width: 60px;
	height: 60px;
`;

export const FeatureTitle = styled.h3`
	font-size: 1.2rem;
	font-weight: bold;
	color: #222;
`;
export const FeatureDescription = styled.p`
	font-size: 22px;
	max-width: 300px;
	color: #01796f;
	font-weight: 600;
`;
export const DashedLine = styled.div`
	width: 50px;
	height: 2px;
	border-top: 2px dashed #01796f;
	/* align-self: center; */

	${media.below925`
		width: 2px;
		height: 40px;
		border-left: 2px dashed #01796f;
		margin: 10px 0;
	`}
`;
