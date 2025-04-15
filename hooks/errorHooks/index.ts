import { AxiosError } from "axios";

interface LocalizedField {
	en: string;
	ar?: string;
}

interface BackendError {
	error: {
		code: string;
		message: LocalizedField;
		details?: LocalizedField;
	};
	status?: number;
}

export const extractErrorMessage = (
	error: AxiosError,
	locale: "en" | "ar"
): { message: string; details: string } => {
	const fallbackMessage = {
		en: "An unknown error occurred.",
		ar: "حدث خطأ غير متوقع.",
	};

	if (!error?.response?.data) {
		return { message: fallbackMessage[locale], details: "" };
	}

	const { error: backendError } = error.response.data as BackendError;

	const message =
		backendError?.message?.[locale] ||
		backendError?.message?.en ||
		fallbackMessage[locale];

	const details =
		backendError?.details?.[locale] || backendError?.details?.en || "";

	return { message, details };
};
