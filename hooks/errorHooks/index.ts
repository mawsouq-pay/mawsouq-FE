import { AxiosError } from "axios";

interface BackendError {
	code: string;
	message: {
		en: string;
		ar?: string;
	};
	details?: string;
}

export const extractErrorMessage = (
	error: AxiosError
): { message: string; details: string } => {
	if (error) {
		if (error?.response?.data) {
			const backendError = error.response.data as BackendError;
			console.log(backendError);
			if (backendError) {
				const message =
					typeof backendError.message === "string"
						? backendError.message
						: backendError.message.en;

				const details = backendError.details ?? "";

				return { message: message || "An unknown error occurred.", details };
			}
		}
		return { message: "An unknown error occurred.", details: "" };
	}
	return { message: "", details: "" };
};
