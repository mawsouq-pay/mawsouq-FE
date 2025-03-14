import { useState } from "react";
import axios from "axios";
import { useNotification } from "@/store/SnackBarStore";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";

const FORM_PUBLIC_KEY = process.env.NEXT_PUBLIC_FORM_PUBLIC_KEY;

export const useSendEmail = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { showErrorNotification } = useNotification();
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	const sendEmail = async (formData: {
		name: string;
		email?: string;
		message: string;
		subject?: string;
	}) => {
		setLoading(true);
		setError(null);
		setSuccess(null);

		try {
			const response = await axios.post("https://api.web3forms.com/submit", {
				...formData,
				access_key: FORM_PUBLIC_KEY,
			});

			if (response.data.success) {
				setSuccess(text.messageSent);
				return true;
			} else {
				setError(text.messageSent);
				return false;
			}
		} catch (err) {
			showErrorNotification(text.genericErrorMessage);
			return false;
		} finally {
			setLoading(false);
		}
	};

	return { sendEmail, loading, success, error };
};
