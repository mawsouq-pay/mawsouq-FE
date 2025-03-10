import React, { useEffect, useRef } from "react";
import { DialogTitle, DialogProps, DialogActions, Box } from "@mui/material";
import { MSModalProps } from "./types";
import MSButton from "../MSButton";
import { StyledDialog, StyledDialogContent } from "./MSModal.styles";
import { colors } from "@/constants/theme";

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
		confirmButtonProps = {},
		cancelButtonProps = {},
	} = props;

	const descriptionElementRef = useRef<HTMLElement>(null);
	const scroll: DialogProps["scroll"] = "paper";

	useEffect(() => {
		if (open) {
			const { current: descriptionElement } = descriptionElementRef;
			if (descriptionElement !== null) {
				descriptionElement.focus();
			}
		}
	}, [open]);

	return (
		<StyledDialog
			open={open}
			onClose={onClose}
			scroll={scroll}
			aria-labelledby="modal-title"
			aria-describedby="modal-description"
		>
			{title && (
				<DialogTitle id="modal-title" style={{ paddingTop: 20 }}>
					{title}
				</DialogTitle>
			)}
			<StyledDialogContent
				style={{ overflowY: "auto", maxHeight: "70vh" }}
				dividers={scroll === "paper"}
				ref={descriptionElementRef}
			>
				<div tabIndex={-1} id="modal-description">
					{children}
				</div>
			</StyledDialogContent>
			{showActions && (
				<DialogActions
					sx={{
						display: "flex",
						justifyContent: "space-between",
						width: "100%",
						padding: "16px",
					}}
				>
					<Box>
						<MSButton
							title={cancelText}
							onClick={onClose}
							style={{
								height: 40,
								width: "fit-content",
								backgroundColor: "transparent",
								border: `2px solid ${colors.green}`,
							}}
							fontColor={colors.black}
							{...cancelButtonProps}
						/>
					</Box>

					<Box>
						<MSButton
							title={confirmText}
							onClick={onConfirm}
							style={{
								height: 40,
								width: "fit-content",
							}}
							{...confirmButtonProps}
						/>
					</Box>
				</DialogActions>
			)}
		</StyledDialog>
	);
};

export default MSModal;
