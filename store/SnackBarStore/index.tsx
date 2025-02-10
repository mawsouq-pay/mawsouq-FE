import React, { createContext, useContext, useState } from "react";
import MSSnackBar from "@/components/MSSnackBar";
import { AxiosError } from "axios";
import { extractErrorMessage } from "@/hooks/errorHooks";

type NotificationContextType = {
	showNotification: (
		message: string,
		severity?: "error" | "success" | "info" | "warning"
	) => void;
	showSuccessNotification: (message: string) => void;
	showErrorNotification: (message: string) => void;
	showInfoNotification: (message: string) => void;
	showAxiosErrorNotification: (error: AxiosError) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
	undefined
);

export const useNotification = (): NotificationContextType => {
	const context = useContext(NotificationContext);
	if (!context) {
		throw new Error("no provider for the notification");
	}
	return context;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");
	const [details, setDetails] = useState<string | undefined>("");
	const [severity, setSeverity] = useState<
		"error" | "success" | "info" | "warning"
	>("info");

	const showNotification = (
		message: string,
		severity: "error" | "success" | "info" | "warning" = "info",
		details?: string
	) => {
		setMessage(message);
		setSeverity(severity);
		setOpen(true);
		setDetails(details);
	};

	const showSuccessNotification = (message: string) => {
		showNotification(message, "success");
	};

	const showErrorNotification = (message: string) => {
		showNotification(message, "error");
	};

	const showInfoNotification = (message: string) => {
		showNotification(message, "info");
	};

	const showAxiosErrorNotification = (error: AxiosError) => {
		const errorMessage = extractErrorMessage(error);
		showNotification(errorMessage.message, "error", errorMessage.details);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<NotificationContext.Provider
			value={{
				showNotification,
				showSuccessNotification,
				showErrorNotification,
				showInfoNotification,
				showAxiosErrorNotification,
			}}
		>
			{children}
			<MSSnackBar
				open={open}
				message={message}
				severity={severity}
				onClose={handleClose}
				details={details}
			/>
		</NotificationContext.Provider>
	);
};
