import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";
import styled from "styled-components";

export const HeroWrapper = styled.section`
	background: radial-gradient(circle, #2a75d4 0%, #1e1e1e 100%);
	color: white;
	border-radius: 10px;
	@media (max-width: 1000px) {
		height: fit-content;
	}
`;
export const RowDiv = styled.div`
	display: flex;
	flex-direction: row;
	padding: 32px 64px 32px 64px;

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;
export const PaddingContainer = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	flex: 2;
	@media (max-width: 1000px) {
		width: 100%;
	}
`;
export const ListWrapper = styled.div`
	display: flex;
	flex: 1.5;
	justify-content: flex-end;
	@media (max-width: 1000px) {
		display: none;
	}
`;
export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const DescriptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 24px;
	padding-bottom: 8px;
`;

export const HeroInputsWrapper = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 10px;
	width: 80%;
`;
export const Divider = styled.hr`
	border: none;
	border-top: 1px solid ${colors.red};
	margin: 10px 0;
`;
export const InputFieldDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 8px;
	padding: 10px 20px;
	border-radius: 10px;
	background: linear-gradient(
		to right,
		rgba(255, 255, 255, 0.3) 0%,
		#2a75d4 100%
	);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	min-height: 50px;
`;
export const StyledButton = styled.button`
	display: flex;
	align-self: flex-start;
	justify-content: center;
	align-items: center;
	background-color: #31c48d;
	color: white;
	padding: 20px;
	border: none;
	cursor: pointer;
	border-radius: 8px;
	margin-top: 10px;

	&:hover {
		opacity: 0.8;
		transition-duration: 0.4s;
	}
`;
export const SubmitWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;
	text-align: center;
	flex: 1;
	//align-self: flex-start;
`;
