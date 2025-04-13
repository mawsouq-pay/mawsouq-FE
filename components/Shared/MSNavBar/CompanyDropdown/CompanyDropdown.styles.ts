import { styled } from "styled-components";
import { Button } from "@mui/material";
import { colors } from "@/constants/theme";

export const CompanyButton = styled(Button)`
	text-transform: none;
	font-size: 14px;
	font-weight: 500;
	color: #1c1c1c;
	gap: 5px;
	&:hover {
		color: ${colors.green};
		background: transparent;
	}
`;
