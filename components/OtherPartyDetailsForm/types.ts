import { textTr } from "@/constants/locales";
import * as Yup from "yup";
import { StartTransactionData } from "../StartTransactionCard/types";

export interface OtherPartyDetailsFormProps {
	onSubmit: (formData: StartTransactionData) => void;
	initialValues: StartTransactionData;
	onBack: () => void;
	paymentDetails?: {
		price: number;
		escrowFee?: number;
		totalDue: number;
	};
}

export const createValidationSchema = (
	locale: any,
	userEmail?: string,
	userPhone?: string
) => {
	const text = textTr(locale);

	return Yup.object({
		otherPartyPhone: Yup.string()
			.required(text.requiredPhone)
			.trim()
			.notOneOf([userPhone?.substring(2)], text.phoneMustBeDifferent)
			.matches(/^01[0-9]{9}$/, text.invalidPhone),
		otherPartyEmail: Yup.string()
			.trim()
			.required(text.requiredEmail)
			.email(text.invalidEmail)
			.notOneOf([userEmail], text.emailMustBeDifferent)
			.matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, text.invalidEmail),
	});
};
