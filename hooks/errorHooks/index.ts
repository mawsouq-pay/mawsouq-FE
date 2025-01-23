import { AxiosError } from "axios";

interface BackendError {
	code: string;
	message: {
		en: string;
		ar?: string;
	};
	details?: string;
}

export const extractErrorMessage = (error: AxiosError): string => {
	if (error) {
		if (error?.response?.data) {
			const backendError = error.response.data as BackendError;
			console.log(backendError);
			if (backendError) {
				const message = backendError.message;
				return typeof message === "string" ? message : message.en;
			}
			return "An unknown error occurred.";
		}
		return error.message || "An unknown error occurred.";
	}
	return "";
};
