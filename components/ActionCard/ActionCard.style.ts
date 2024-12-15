import styled from "styled-components";
import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";

export const MainWrapper = styled.div`
	background-color: ${colors.white};
	border-radius: 16px;
	gap: 13px;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 31px;

	${media.mobile`
    padding-top:21px;
    padding-bottom: 17px;
  `}
`;
