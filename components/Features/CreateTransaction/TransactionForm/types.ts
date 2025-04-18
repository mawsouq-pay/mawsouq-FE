import { textTr } from "@/constants/locales";
import * as Yup from "yup";
import { StartTransactionData } from "../StartTransactionCard/types";

export interface TransactionFormProps {
	onSubmit: (formData: StartTransactionData) => void;
	initialValues: StartTransactionData;
	onBack: () => void;
	disableButton?: boolean;
}

export const createValidationSchema = (locale: any) => {
	const text = textTr(locale);

	return Yup.object({
		transactionTitle: Yup.string()
			.trim()
			.required(text.requiredTitle)
			.min(3, text.minLength)
			.max(100, text.maxLength),
		description: Yup.string()
			.required(text.requiredDescription)
			.test(
				"min-characters",
				text.descriptionMinLength,
				(value) => value?.trim().length >= 30
			)
			.max(1024, text.descriptionMaxLength),
		price: Yup.number()
			.required(text.requiredPrice)
			.min(1, text.mustBePositive)
			.typeError(text.mustBeNumber),
		deliveryDate: Yup.date()
			.required(text.deliveryDateRequired)
			.min(new Date(), text.futureDateOnly),
	});
};
