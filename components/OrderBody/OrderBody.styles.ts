import styled from "styled-components";
import { colors } from "@/constants/theme";

export const ProgressWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 20px;
`;

export const ProgressSection = styled.div`
	flex: 2;
`;

export const HistorySection = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	border-radius: 8px;
`;

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 20px;
	margin-top: 50px;
`;

export const InfoSection = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const ActionBox = styled.div`
	display: flex;
	width: fit-content;
	background-color: #ffebee;
	border: 1px solid #f44336;
	color: #b71c1c;
	padding: 5px;
	border-radius: 8px;
	text-align: center;

	margin-top: 10px;
	margin-bottom: 30px;
`;
