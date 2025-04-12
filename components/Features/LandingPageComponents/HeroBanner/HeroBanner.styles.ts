import styled from "styled-components";
import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 25px 20px 20px 20px;
`;

export const HeroWrapper = styled.section`
	background: linear-gradient(to bottom, ${colors.mintGreen}, ${colors.white});
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 48px;
	align-items: center;

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
`;

export const LeftColumn = styled.div`
	max-width: 600px;
`;

export const ButtonRow = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 20px;
	${media.below925`
		width: 92%;

	`}
`;

export const FrameDive = styled.div<{ isArabic: boolean }>`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: column;
	margin-top: 10px;
	@media (max-width: 1024px) {
		max-width: 100%;
		justify-content: center;
		/* margin-left: ${({ isArabic }) => (isArabic ? "30px" : "0px")};
		margin-right: ${({ isArabic }) => (isArabic ? "0px" : "30px")}; */
	}
`;
