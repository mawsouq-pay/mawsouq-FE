import { StartTransactionData } from "@/pages/startTransaction/types";
import * as Yup from "yup";

export interface OtherPartyDetailsFormProps {
	onSubmit: (formData: StartTransactionData) => void;
	initialValues: StartTransactionData;
	onBack: () => void;
	paymentDetails?: {
		amount: number;
		escrowFee?: number;
		totalDue: number;
	};
}

export const createValidationSchema = (text: any) => {
	return Yup.object({
		phoneNumber: Yup.string()
			.trim()
			.required(text.phoneRequired)
			.matches(/^[0-9]+$/, text.phoneOnlyDigits)
			.min(10, text.phoneMinLength)
			.max(15, text.phoneMaxLength),
		email: Yup.string()
			.trim()
			.required(text.emailRequired)
			.email(text.invalidEmailFormat)
			.matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, text.invalidEmailFormat),
	});
};
