import React from "react";
import { Snackbar, Alert, AlertTitle } from "@mui/material";
interface MSSnackBarProps {
	open: boolean;
	message: string;
	severity?: "error" | "success" | "info" | "warning";
	autoHideDuration?: number;
	onClose: () => void;
	details?: string;
}

const MSSnackBar = ({
	open,
	message,
	severity = "info",
	autoHideDuration = 5000,
	onClose,
	details,
}: MSSnackBarProps) => {
	return (
		<Snackbar
			open={open}
			autoHideDuration={autoHideDuration}
			onClose={onClose}
			anchorOrigin={{ vertical: "top", horizontal: "center" }}
		>
			<Alert
				onClose={onClose}
				severity={severity}
				sx={{ width: "100%" }}
				variant="filled"
			>
				<AlertTitle>{message}</AlertTitle>
				{details && <span>{details}</span>}
			</Alert>
		</Snackbar>
	);
};

export default MSSnackBar;
