import { colors } from "@/constants/theme";
import styled from "styled-components";

export const FormWrapper = styled.div`
	background: ${colors.white};
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
`;
export const GeneralInfoSection = styled.div`
	max-width: 600px;
	margin: 30px 0;
	padding: 20px;
	background: ${colors.lightGray};
	border-radius: 8px;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
`;

export const InfoItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 0;
	border-bottom: 1px solid ${colors.green};
	&:last-child {
		border-bottom: none;
	}
`;
