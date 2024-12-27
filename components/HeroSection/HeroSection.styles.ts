import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";
import styled from "styled-components";

export const HeroWrapper = styled.section`
	background: radial-gradient(circle, #2a75d4 0%, #1e1e1e 100%);
	color: white;
	border-radius: 10px;
`;
export const PaddingContainer = styled.div`
	/* padding-top: 50px; */
	//padding-inline: clamp(20px, 5vw, 84px);

	//to be removed
	padding: 80px 20px;

	display: flex;
	align-items: center;
	flex-direction: column;
	text-align: center;
`;
export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

export const DescriptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 35px;
`;

export const HeroInputsWrapper = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 20px;
	width: 40%;
	@media (max-width: 1282px) {
		width: 80%;
	}
`;
export const Divider = styled.hr`
	width: 111px;
	height: 100%;
	background-color: red;
	border: none;
	margin: 0 10px;
`;

export const InputFieldDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
	border-radius: 10px;
	background: linear-gradient(
		to right,
		rgba(255, 255, 255, 0.3) 0%,
		#2a75d4 100%
	);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	min-height: 40px;
`;
export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${colors.buttonGreenHover};
	color: white;
	padding: 15px 100px;
	border: none;
	cursor: pointer;
	border-radius: 8px;
	margin-top: 10px;
	flex: 1;

	&:hover {
		background: ${colors.buttonGreenHover};
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
