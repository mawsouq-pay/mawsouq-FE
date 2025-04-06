import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";
import { styled, keyframes } from "styled-components";

export const HeroContainer = styled.section`
	display: flex;
	flex-direction: column;
	/* justify-content: space-between; */
	/* align-items: center; */
	height: 90vh;
	max-height: 600px;
	padding: 80px 4% 40px 4%;
	border-bottom-left-radius: 30px;
	border-bottom-right-radius: 30px;
	background-color: ${colors.backgroundColor};
	${media.below925`
	padding: 20px 4% 40px 4%;

	height: 800px;
	max-height: 3800px;
	`}
`;
export const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	${media.below925`
	flex-direction: column;
		text-align: center;
		min-height: auto;
		padding: 0px 10px;
    `}
`;

export const HeroContent = styled.div`
	max-width: 800px;
	/* margin-top: 60px; */
	${media.below925`
		width: 100%;
		margin-bottom: 30px;
		margin-top: 0px;
	`}
`;

export const HeroTitle = styled.h1`
	font-size: 3.5rem;
	font-weight: bold;
	color: #222;
	margin-bottom: 1rem;

	@media (max-width: 1024px) {
		font-size: 2.5rem;
	}
`;

export const HeroSubtitle = styled.p`
	font-size: 1.5rem;
	color: #222;
	line-height: 1.6;
	margin-bottom: 1.5rem;

	@media (max-width: 1024px) {
		font-size: 1rem;
	}
`;

export const HeroButton = styled.button`
	background: linear-gradient(to left, #01796f, #43d9a4);
	color: white;
	font-size: 1rem;
	font-weight: bold;
	padding: 18px 28px;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	transition: 0.3s ease-in-out;

	&:hover {
		background: linear-gradient(to left, #025c57, #2db587);
	}
`;

export const FrameDive = styled.div<{ isArabic: boolean }>`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: column;

	@media (max-width: 1024px) {
		max-width: 100%;
		justify-content: center;
		margin-left: ${({ isArabic }) => (isArabic ? "30px" : "0px")};
		margin-right: ${({ isArabic }) => (isArabic ? "0px" : "30px")};
	}
`;

const marqueeAnimation = keyframes`
  0% { transform: translateX(100vw); } 
  100% { transform: translateX(-100%); } 
`;

export const MarqueeWrapper = styled.div`
	width: 100%;
	overflow: hidden;
	white-space: nowrap;
	position: relative;
	background-color: ${colors.pastelGreen};
	border-radius: 40px;
	max-width: 320px;
`;

export const MarqueeText = styled.div`
	/* display: inline-block; */
	font-size: 16px;
	font-weight: 500;
	color: ${colors.semiBlack};
	padding: 2px;
	margin-left: 24px;
	margin-right: 24px;
	animation: ${marqueeAnimation} 10s linear infinite;
`;
