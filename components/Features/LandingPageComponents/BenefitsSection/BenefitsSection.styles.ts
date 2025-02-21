import { colors } from "@mui/material";
import styled from "styled-components";
import MSText from "../../../Shared/MSText";

export const BenefitsWrapper = styled.section`
	background: #2a75d4;
	border-radius: 10px;
	padding: 150px clamp(20px, 5vw, 84px);
	padding-top: 62px;
	color: white;
	text-align: center;
`;

export const BenefitsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 30px;
	margin-top: 30px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const BenefitCard = styled.div`
	background: #ffffff14;
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 15px;
	padding: 30px;
	width: 280px;
	text-align: center;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	transition:
		transform 0.3s ease,
		box-shadow 0.3s ease;

	&:hover {
		transform: translateY(-10px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
	}
`;

export const BenefitIcon = styled.div`
	width: 60px;
	height: 60px;
	margin: 0 auto 20px;
	background: ${colors.green};
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 30px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

export const BenefitsTitle = styled.h2`
	font-size: 2.5rem;
	font-weight: bold;
	margin-bottom: 20px;

	@media (max-width: 768px) {
		font-size: 2rem;
	}
`;

export const BenefitsDescription = styled(MSText)`
	font-size: 1.2rem;
	margin-top: 10px;
	color: rgba(255, 255, 255, 0.8);
`;
