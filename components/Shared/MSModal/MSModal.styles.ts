import { colors } from "@/constants/theme";
import { Dialog, DialogContent } from "@mui/material";
import styled from "styled-components";
export const StyledDialog = styled(Dialog)`
	.MuiDialog-paper {
		max-width: 800px;
		width: 100%;
		overflow: visible;
	}
`;

export const StyledDialogContent = styled(DialogContent)`
	overflow: visible;
	max-width: 100%;
`;
export const CancelButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: flex-end;
	background: transparent;
	border: 1px solid ${colors.buttonGreenBackground};
	color: black;
	padding: 15px 18px;
	cursor: pointer;
	border-radius: 8px;
	margin-top: 10px;
	height: 40px;
	&:hover {
		background: ${colors.buttonGreenBackground};
	}
`;
export const FlexRow = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	justify-content: space-between;
	gap: 30px;
	padding: 20px;
`;
