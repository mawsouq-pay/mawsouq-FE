import { StartTransactionData } from "@/pages/startTransaction/types";
import * as Yup from "yup";

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

export const createValidationSchema = (text: any) => {
	return Yup.object({
		otherPartyPhone: Yup.string()
			.required(text.requiredPhone)
			.trim()
			.matches(/^01[0-9]{9}$/, text.invalidPhone),
		otherPartyEmail: Yup.string()
			.trim()
			.required(text.requiredEmail)
			.email(text.invalidEmail)
			.matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, text.invalidEmail),
	});
};
