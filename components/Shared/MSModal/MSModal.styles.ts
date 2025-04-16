import styled from "styled-components";
import { Dialog, DialogContent } from "@mui/material";
import { colors } from "@/constants/theme";

export const StyledDialog = styled(Dialog)`
	.MuiDialog-paper {
		max-width: 600px;
		width: 95%;
		border-radius: 16px;
		overflow: visible;
		padding: 10px 0;
	}
`;

export const StyledDialogContent = styled(DialogContent)`
	overflow: visible;
	max-width: 100%;
	padding: 24px;
`;

export const CancelButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: flex-end;
	background: transparent;
	border: 1.5px solid ${colors.buttonGreenBackground};
	color: ${colors.black};
	padding: 12px 18px;
	cursor: pointer;
	border-radius: 8px;
	margin-top: 12px;
	height: 40px;

	&:hover {
		background: ${colors.buttonGreenBackground};
	}
`;
