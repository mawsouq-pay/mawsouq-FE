import { StartTransactionData } from "@/pages/startTransaction/types";
import * as Yup from "yup";

export interface TransactionFormProps {
	onSubmit: (formData: StartTransactionData) => void;
	initialValues: StartTransactionData;
}

export const createValidationSchema = (text: any) => {
	return Yup.object({
		transactionTitle: Yup.string()
			.trim()
			.required(text.requiredTitle)
			.min(3, text.minLength),
		itemName: Yup.string()
			.trim()
			.required(text.itemNameRequired)
			.test(
				"is-not-empty",
				text.itemNameRequired,
				(value) => value?.length > 0
			),
		description: Yup.string()
			.trim()
			.required(text.requiredDescription)
			.min(10, text.minLength),
		amount: Yup.number()
			.required(text.requiredAmount)
			.positive(text.mustBePositive),
		deliveryDate: Yup.date()
			.required(text.deliveryDateRequired)
			.min(new Date(), text.futureDateOnly),
		quantity: Yup.number()
			.required(text.quantityRequired)
			.positive(text.mustBePositive)
			.typeError(text.mustBeNumber),
	});
};
