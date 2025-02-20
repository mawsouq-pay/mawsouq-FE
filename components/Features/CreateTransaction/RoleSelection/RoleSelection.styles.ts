import styled from "styled-components";
import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";
import { Form } from "formik";

export const MainWrapper = styled(Form)`
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 100%;
	width: 100%;
`;
export const FormContainer = styled.div`
	max-width: 750px;
	margin: 0 auto;
	background-color: ${colors.white};
	border-radius: 20px;
	padding: 20px 0px 50px 0px;
	${media.below925`
	padding: 30px 25px 50px 25px;
 	 `}

	display: flex;
	flex: 1;
	flex-direction: column;
`;

export const TitleInput = styled.input`
	width: 100%;
	padding: 12px;
	border-radius: 8px;
	border: 1px solid ${colors.gray};
	font-size: 16px;
`;

export const RoleOptions = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 16px;
	margin-top: 20px;
	${media.below925`
	flex-direction: column;

 	 `}
`;

export const RoleCard = styled.div<{ isSelected: boolean }>`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;
	width: 300px;
	padding: 25px;
	border-radius: 12px;
	cursor: pointer;
	background: ${({ isSelected }) => (isSelected ? "#F5F5F5" : "white")};
	border: 2px solid
		${({ isSelected }) => (isSelected ? `${colors.green}` : "#ddd")};
	transition: all 0.3s ease-in-out;

	&:hover {
		background: #f0f0f0;
	}

	${media.below925`
		width: 200px;
	`}
`;

export const RadioButton = styled.input`
	appearance: none;
	width: 18px;
	height: 18px;
	border: 2px solid #ccc;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	&:checked {
		border-color: #31c48d;
		background: #31c48d;
	}
`;

export const IconWrapper = styled.div`
	width: 50px;
`;

export const FlexRow = styled.div`
	display: flex;
	flex: 1;

	justify-content: flex-end;
	margin-top: 60px;
`;
