import styled from "styled-components";
import { media } from "@/helpers/mediaQueryHelper";
import { colors } from "@/constants/theme";

export const Wrapper = styled.div`
	padding-top: 60px;
	padding-bottom: 2rem;
	align-items: center;
	text-align: center;
`;

export const FeaturesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
	padding: 4rem 2rem;
	gap: 24px;

	${media.below925`
    flex-direction: column;
    align-items: center;
  `}
`;

export const StepCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	flex: 1;
	min-width: 200px;
	position: relative;
	gap: 10px;
`;

export const CircleWrapper = styled.div`
	position: relative;
	margin-bottom: 16px;
`;

export const StepCircle = styled.div`
	width: 60px;
	height: 60px;
	background-color: ${colors.mintGreen};
	color: ${colors.green};
	font-size: 24px;
	font-weight: 700;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2;
`;

export const Line = styled.div`
	position: absolute;
	top: 50%;
	left: 100%;
	transform: translateY(-50%);
	height: 2px;
	width: 60px;
	background-color: ${colors.green};

	@media (max-width: 925px) {
		display: none;
	}
`;
