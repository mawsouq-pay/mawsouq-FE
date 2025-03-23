import React from "react";
import { Snackbar, Alert, AlertTitle } from "@mui/material";
import { useLocaleStore } from "@/store";

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
	autoHideDuration = 10000,
	onClose,
	details,
}: MSSnackBarProps) => {
	const { locale } = useLocaleStore();
	const isArabic = locale === "ar";

	return (
		<Snackbar
			open={open}
			autoHideDuration={autoHideDuration}
			onClose={onClose}
			anchorOrigin={{ vertical: "top", horizontal: "center" }}
			dir={isArabic ? "rtl" : "ltr"}
		>
			<Alert
				onClose={onClose}
				severity={severity}
				sx={{
					width: "100%",
					direction: isArabic ? "rtl" : "ltr",
					display: "flex",
					alignItems: "start",
					gap: 3,
				}}
				variant="filled"
			>
				<AlertTitle>{message}</AlertTitle>
				{details && <span>{details}</span>}
			</Alert>
		</Snackbar>
	);
};

export default MSSnackBar;
