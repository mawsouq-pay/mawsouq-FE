import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { MSModalProps } from "./types";
import MSButton from "../MSButton";
import { CancelButton, FlexRow } from "./MSModal.styles";

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
		<Dialog open={open} onClose={onClose} maxWidth="md">
			{title && <DialogTitle style={{ paddingTop: 20 }}>{title}</DialogTitle>}
			<DialogContent>{children}</DialogContent>
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
		</Dialog>
	);
};

export default MSModal;
