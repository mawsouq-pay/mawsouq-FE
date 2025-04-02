import { colors } from "@/constants/theme";
import styled from "styled-components";

export const CardWrapper = styled.div`
	background: #fff;
	border-radius: 12px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
	margin-bottom: 200px;
	max-width: 600px;
`;
export const ContentDiv = styled.div`
	padding: 16px 22px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;
export const Section = styled.div`
	margin-bottom: 20px;
	padding: 15px 8px;
	box-shadow:
		0 2px 4px rgba(0, 0, 0, 0.05),
		0 2px 16px rgba(0, 0, 0, 0.05),
		0 2px 24px rgba(0, 0, 0, 0.05);
	border-radius: 8px;
`;

export const SummaryRow = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;

export const Divider = styled.hr`
	margin: 20px 0 10px;
	border: none;
	border-top: 1px solid ${colors.darkGray};
`;

export const PoweredBy = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

export const FooterNote = styled.div`
	font-size: 12px;
	color: #555;
`;

export const StepsBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 25px;
	margin-top: 25px;
`;

export const Step = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
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
	background-color: #008c4f;
	flex: 1;
	margin: 0 6px;
	border-radius: 2px;
`;
export const Logo = styled.div`
	cursor: pointer;
	text-align: center;
	width: 100%;
	background-color: ${colors.green};
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	padding: 0px;
`;
