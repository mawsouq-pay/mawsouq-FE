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
	padding: 20px;
	text-align: center;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
	cursor: pointer;
	transition:
		transform 0.2s ease,
		box-shadow 0.2s ease;

	&:hover {
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
		transform: translateY(-2px);
		opacity: 0.95;
	}
	${media.below925`
   	padding: 18px ;

  `}
`;
