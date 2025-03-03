import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";
import styled from "styled-components";

export const MainWrapper = styled.div`
	background: #43d9a4;
	padding: 90px 40px;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	border-radius: 40px;
	margin-top: 80px;
	${media.below925`
    flex-direction: column;
    `}
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
