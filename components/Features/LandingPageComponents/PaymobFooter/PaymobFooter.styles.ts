import styled from "styled-components";
import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";

export const MainContainer = styled.div`
	background: white;
	border-top-left-radius: 40px;
	border-top-right-radius: 40px;

	background-color: #ddf8ed;
	padding: 30px;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 20px;
	${media.below925`
	flex-direction: column;
    `}
`;
