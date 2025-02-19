import React from "react";
import { DialogTitle } from "@mui/material";
import { MSModalProps } from "./types";
import MSButton from "../MSButton";
import {
	CancelButton,
	FlexRow,
	StyledDialog,
	StyledDialogContent,
} from "./MSModal.styles";

const MSModal = (props: MSModalProps) => {
	const {
		open,
		onClose,
		title,
		children,
		confirmText = "Confirm",
		cancelText = "Cancel",
		onConfirm,
		showActions = true,
	} = props;
	return (
		<StyledDialog open={open}>
			{title && <DialogTitle style={{ paddingTop: 20 }}>{title}</DialogTitle>}
			<StyledDialogContent style={{ overflow: "visible" }}>
				{children}
			</StyledDialogContent>
			{showActions && (
				<FlexRow>
					<CancelButton onClick={onClose}>{cancelText}</CancelButton>
					<MSButton
						title={confirmText}
						onClick={onConfirm}
						style={{
							height: 40,
							width: "fit-content",
							alignSelf: "flex-end",
						}}
					/>
				</FlexRow>
			)}
		</StyledDialog>
	);
};

export default MSModal;
