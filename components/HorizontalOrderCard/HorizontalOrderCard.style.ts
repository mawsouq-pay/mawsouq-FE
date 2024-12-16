import styled from "styled-components";
import { colors } from "@/constants/theme";
import { Grid2 } from "@mui/material";
import { media } from "@/helpers/mediaQueryHelper";

export const MainWrapper = styled.div`
	background-color: ${colors.white};
	border-radius: 16px;
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;

	justify-content: flex-start;
	padding: 20px 35px;
	${media.below925`
    align-items: center;

    `}
`;

export const StyledGrid = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	${media.below925`
     flex-direction:row;
     gap:20px;
    `}
`;
