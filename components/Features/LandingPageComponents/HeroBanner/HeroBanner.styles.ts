import { colors } from "@/constants/theme";
import { styled } from "styled-components";

export const HeroContainer = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	/* align-items: center; */
	min-height: 90vh;
	padding: 40px 5%;
	/* border-bottom-left-radius: 30px;
	border-bottom-right-radius: 30px; */
	background-color: ${colors.backgroundColor};

	@media (max-width: 1024px) {
		flex-direction: column;
		text-align: center;
		min-height: auto;
		padding: 60px 20px;
	}
`;

export const HeroContent = styled.div`
	max-width: 800px;
	margin-top: 30px;
	@media (max-width: 1024px) {
		width: 100%;
		margin-bottom: 30px;
		margin-top: 0px;
	}
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

export const FrameDive = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	max-width: 500px;
	@media (max-width: 1024px) {
		max-width: 100%;
		justify-content: center;
		margin-inline-end: 30px;
	}
`;
