import { useState } from "react";
import { AxiosError } from "axios";

interface BackendError {
	code: string;
	message: {
		en: string;
		ar?: string;
	};
	details?: string;
}

type Severity = "error" | "success" | "info" | "warning";

export const extractErrorMessage = (error: AxiosError): string => {
	if (error.response?.data) {
		const backendError = error.response.data as BackendError;
		console.log(backendError);
		if (backendError) {
			const message = backendError.message;
			return typeof message === "string" ? message : message.en;
		}
		return "An unknown error occurred.";
	}
	return error.message || "An unknown error occurred.";
};

const useSnackbarError = () => {
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [severity, setSeverity] = useState<Severity>("error");
	const [open, setOpen] = useState<boolean>(false);

	const handleAxiosError = (error: AxiosError) => {
		console.log(error);
		const message = extractErrorMessage(error);
		console.log(message, "here");
		setErrorMessage(message);
		setSeverity("error");
		setOpen(true);
	};
	const handleMessageError = (error: string) => {
		setErrorMessage(error);
		setSeverity("error");
		setOpen(true);
	};

	const handleSuccess = (message: string) => {
		setErrorMessage(message);
		setSeverity("success");
		setOpen(true);
	};

	const handleClose = () => setOpen(false);

	return {
		open,
		errorMessage,
		severity,
		handleMessageError,
		handleAxiosError,
		handleSuccess,
		handleClose,
	};
};

export default useSnackbarError;
