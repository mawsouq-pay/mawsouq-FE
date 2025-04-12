import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "@/constants/theme";
export const Section = styled.section`
	padding: 4rem 0;
	background-color: white;
`;

export const Container = styled.div`
	max-width: 1024px;
	margin: 0 auto;
	padding: 0 1rem;
`;

export const GradientBox = styled(motion.div)`
	background: linear-gradient(to right, ${colors.mintGreen}, white);
	border-radius: 1rem;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	padding: 2rem;

	@media (min-width: 768px) {
		padding: 3rem;
	}
`;

export const FlexRow = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;

	@media (min-width: 768px) {
		flex-direction: row;
		align-items: flex-start;
	}
`;

export const LeftCol = styled.div`
	width: 100%;

	@media (min-width: 768px) {
		width: 50%;
	}
`;

export const RightCol = styled(motion.div)`
	width: 100%;

	@media (min-width: 768px) {
		width: 50%;
	}
`;

export const FeatureItem = styled(motion.div)`
	display: flex;
	align-items: center;
	gap: 0.75rem;
`;

export const FeatureGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
	margin-bottom: 2rem;
`;

export const IconContainer = styled.div`
	color: ${colors.green};
`;

export const InfoBox = styled.div`
	background-color: white;
	border: 1px solid #f3f4f6;
	border-radius: 0.5rem;
	padding: 1rem;
`;

export const InfoHeader = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
`;

export const Placeholder = styled.div`
	background-color: #e5e7eb;
	height: 1.5rem;
	width: 6rem;
	border-radius: 0.375rem;
	margin-right: 0.75rem;
`;

export const ProfileCard = styled.div`
	background-color: white;
	border-radius: 0.75rem;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
	padding: 1.5rem;
	margin-top: 10px;
`;
