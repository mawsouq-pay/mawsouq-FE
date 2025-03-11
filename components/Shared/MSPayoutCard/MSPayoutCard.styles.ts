import { colors } from "@/constants/theme";
import styled from "styled-components";

export const PayoutCard = styled.div`
	background: ${colors.white};
	padding: 15px;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	margin-bottom: 20px;
	border-left: 4px solid ${colors.buttonGreenBackground};
	max-width: 600px;
`;

export const PayoutDetailsWrapper = styled.div`
	margin-top: 8px;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
export const FlexRow = styled.div`
	display: flex;
	flex: 1;
	max-width: 600px;
	justify-content: space-between;
	align-items: center;
	gap: 30px;
	margin-top: 50px;
`;
