import { colors } from "@/constants/theme";
import styled from "styled-components";

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1;
	padding-top: 40px;
	justify-content: space-between;
`;
export const InfoSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	gap: 50px;
`;

export const HistorySection = styled.div`
	min-width: 800px;
`;
