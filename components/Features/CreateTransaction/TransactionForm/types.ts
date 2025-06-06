import { textTr } from "@/constants/locales";
import * as Yup from "yup";
import { StartTransactionData } from "../StartTransactionCard/types";

export interface TransactionFormProps {
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

		// Item Name
		itemName: Yup.string()
			.trim()
			.required(text.itemNameRequired)
			.min(3, text.minLength)
			.max(100, text.maxLength),

		// Description
		description: Yup.string()
			.trim()
			.required(text.requiredDescription)
			.min(30, text.descriptionMinLength)
			.max(1024, text.descriptionMaxLength),

		//Price
		price: Yup.number()
			.required(text.quantityRequired)
			.min(1, text.mustBePositive)
			.typeError(text.mustBeNumber),

		// Delivery Date
		deliveryDate: Yup.date()
			.required(text.deliveryDateRequired)
			.min(new Date(), text.futureDateOnly),

		// Quantity
		quantity: Yup.number()
			.required(text.quantityRequired)
			.min(1, text.mustBePositive)
			.positive(text.mustBePositive)
			.integer(text.mustBeInteger)
			.typeError(text.mustBeNumber),
	});
};
