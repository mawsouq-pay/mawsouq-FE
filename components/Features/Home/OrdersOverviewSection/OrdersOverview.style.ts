import { colors } from "@/constants/theme";
import styled from "styled-components";

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
export const EmptyStateWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 40px;
	text-align: center;
	/* background-color: ${colors.lightGray}; */
	/* border-radius: 8px; */
	margin-top: 20px;
	gap: 15px;
	max-width: 400px;
	align-self: center;
`;
