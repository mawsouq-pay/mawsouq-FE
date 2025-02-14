import { textTr } from "@/constants/locales";
import { StartTransactionData } from "../StartTransactionCard/types";
import * as Yup from "yup";

export interface RoleSelectionProps {
	onSubmit: (formData: StartTransactionData) => void;
	initialValues: StartTransactionData;
}

export const createValidationSchema = (locale: any) => {
	const text = textTr(locale);

	return Yup.object({
		// Transaction Title
		transactionTitle: Yup.string()
			.trim()
			.required(text.requiredTitle)
			.min(3, text.minLength)
			.max(100, text.maxLength),
		role: Yup.string().required("Please select a role"),
	});
};
