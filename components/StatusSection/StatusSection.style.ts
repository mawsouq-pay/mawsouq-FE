import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";
import styled from "styled-components";

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
export const DirectionFlex = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-between;
	flex-direction: row;
	gap: 15px;

	${media.mobile`
       flex-direction: column;
    `}
`;
export const Circle = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	background-color: ${colors.lightBlue};
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const GreetingDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;
