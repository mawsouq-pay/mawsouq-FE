import styled from "styled-components";
import { colors } from "@/constants/theme";

export const HistoryContainer = styled.div`
	background: ${colors.white};
	border-radius: 8px;
	padding: 20px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 30px;
`;
export const RowDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const Entry = styled.div`
	margin-bottom: 15px;
	display: flex;
	flex-direction: column;
	gap: 5px;
	&:last-child {
		margin-bottom: 0;
	}
`;
export const Divider = styled.hr`
	border: none;
	border-top: 2px solid #f7f9fc;
	margin: 10px 0;
`;

export const Icon = styled.span`
	position: absolute;
	top: 20px;
	right: 20px;
	font-size: 1.2rem;
	color: #007bff;
	cursor: pointer;

	&:hover {
		color: #0056b3;
	}
`;
