import { colors } from "@/constants/theme";
import styled from "styled-components";

export const Section = styled.section`
	background-color: ${colors.lightGray};
	padding: 64px 0;

	@media (min-width: 768px) {
		padding: 96px 0;
	}
`;

export const Container = styled.div`
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 24px;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 48px;
	margin-top: 48px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 34px;
	}
`;

export const Steps = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 32px;
`;

export const Step = styled.li`
	display: flex;
	align-items: flex-start;
`;

export const StepCircle = styled.div`
	width: 24px;
	height: 24px;
	background-color: ${colors.green};
	color: white;
	font-size: 12px;
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 9999px;
	margin-top: 4px;
	flex-shrink: 0;
`;

export const StepContent = styled.div`
	margin-left: 12px;
`;

export const Card = styled.div`
	background: white;
	border-radius: 24px;
	padding: 24px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
	border: 1px solid ${colors.gray200};
`;

export const BuyerCard = styled(Card)`
	background-color: #f8f9fa;
`;
