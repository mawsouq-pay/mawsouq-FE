import { colors } from "@/constants/theme";
import styled from "styled-components";

export const Section = styled.section`
	background: ${colors.mintGreen};
	padding: 70px 0;
`;

export const Container = styled.div`
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 24px;
`;

export const ButtonRow = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 16px;
	margin-bottom: 40px;
`;

export const FeaturesRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 24px;
`;

export const ListItem = styled.div`
	display: flex;
	align-items: center;
`;
