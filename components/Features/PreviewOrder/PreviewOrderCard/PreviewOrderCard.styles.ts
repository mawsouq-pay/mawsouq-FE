import { colors } from "@/constants/theme";
import styled from "styled-components";

export const CardWrapper = styled.div`
	background: ${colors.white};
	border-radius: 8px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
	max-width: 500px;
`;

export const ContentDiv = styled.div`
	padding: 20px 20px;
`;

export const Section = styled.div`
	margin-bottom: 20px;
`;

export const SummaryRow = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 8px;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const Divider = styled.hr`
	border: none;
	border-top: 1px solid ${colors.gray200};
	margin: 16px 0;
`;

export const PoweredBy = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	margin-top: 10px;
`;

export const FooterNote = styled.div`
	font-size: 12px;
	color: ${colors.gray500};
`;

export const StepsBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 18px 0;
`;

export const Step = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	height: 44px;
`;

export const StepIcon = styled.div`
	background-color: ${colors.green};
	color: ${colors.white};
	width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	margin-bottom: 4px;
`;

export const LineBetween = styled.div`
	height: 2px;
	background-color: ${colors.green};
	flex: 1;
	margin: 0 6px;
	border-radius: 2px;
`;

export const Logo = styled.div`
	cursor: pointer;
	text-align: center;
	width: 100%;
	background-color: ${colors.green};
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	padding: 0px;
`;
export const RowDiv = styled.div`
	display: flex;
	flex-direction: row;
	gap: 5px;
	align-items: center;
	text-align: center;
`;
