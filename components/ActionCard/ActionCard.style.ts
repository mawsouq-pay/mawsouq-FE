import styled from "styled-components";
import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";

export const MainWrapper = styled.div`
	background-color: ${colors.divBackground};
	border: 1px solid ${colors.divBorder};
	border-radius: 16px;
	gap: 13px;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 31px;
	text-align: center;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

	${media.below925`
   	padding: 18px ;

  `}
`;
