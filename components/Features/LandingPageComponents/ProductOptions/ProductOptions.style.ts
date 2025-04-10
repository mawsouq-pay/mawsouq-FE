import { media } from "@/helpers/mediaQueryHelper";
import styled from "styled-components";
import { colors } from "@/constants/theme";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	justify-content: center;
	text-align: center;
	padding: 2rem 2rem 4rem 2rem;
	/* background-color: ${colors.backgroundColor}; */
	border-radius: 40px;
`;

export const MainWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
	width: 100%;
	margin-top: 20px;
	${media.below925`
		display: none; 
	`}
`;

export const ContentDiv = styled.div`
	background: ${colors.white};
	border-radius: 12px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
	/* border: 1px solid #01796f; */

	transition: 0.3s ease-in-out;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 14px 14px 20px 14px;
	text-align: center;
	min-height: 200px;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
	}
	gap: 20px;
`;

export const SwiperContainer = styled.div`
	${media.below925`
		display: block;
		width: 100%;
		margin-top: 20px;
	`}
	display: block;
	max-width: 600px;
	margin-top: 5px;
`;
export const MainButton = styled.button`
	/* background-color: black; */
	width: 150px;
	background: white;
	color: #222;
	font-size: 0.8rem;
	font-weight: bold;
	padding: 12px 20px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	width: fit-content;
`;
