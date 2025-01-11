import React from "react";
import { Snackbar, Alert } from "@mui/material";
interface MSSnackBarProps {
	open: boolean;
	message: string;
	severity?: "error" | "success" | "info" | "warning";
	autoHideDuration?: number;
	onClose: () => void;
}
const MSSnackBar = ({
	open,
	message,
	severity = "info",
	autoHideDuration = 5000,
	onClose,
}: MSSnackBarProps) => {
	return (
		<Snackbar
			open={open}
			autoHideDuration={autoHideDuration}
			onClose={onClose}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
		>
			<Alert
				onClose={onClose}
				severity={severity}
				sx={{ width: "100%" }}
				variant="filled"
			>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default MSSnackBar;
