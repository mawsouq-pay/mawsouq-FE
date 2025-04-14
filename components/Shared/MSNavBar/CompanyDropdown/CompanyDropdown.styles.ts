import { styled } from "styled-components";
import { Button } from "@mui/material";
import { colors } from "@/constants/theme";

export const CompanyButton = styled(Button)`
	text-transform: none;
	color: ${colors.gray600};
	gap: 5px;
	font-family: inherit;
	&:hover {
		color: ${colors.green};
		background: transparent;
	}
`;
