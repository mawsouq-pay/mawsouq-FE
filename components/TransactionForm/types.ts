import { StartTransactionData } from "@/pages/startTransaction/types";
import * as Yup from "yup";

export interface TransactionFormProps {
	onSubmit: (formData: StartTransactionData) => void;
	initialValues: StartTransactionData;
}

export const createValidationSchema = (text: any) => {
	return Yup.object({
		// Transaction Title
		transactionTitle: Yup.string()
			.trim()
			.required(text.requiredTitle)
			.min(3, text.minLength)
			.max(255, text.maxLength),

		// Item Name
		itemName: Yup.string()
			.trim()
			.required(text.itemNameRequired)
			.min(3, text.minLength)
			.max(255, text.maxLength),

		// Description
		description: Yup.string()
			.trim()
			.required(text.requiredDescription)
			.min(10, text.minLength)
			.max(1024, text.maxLength),

		//Price
		price: Yup.number()
			.required(text.requiredAmount)
			.min(0, text.mustBePositive)
			.typeError(text.mustBeNumber),

		// Delivery Date
		deliveryDate: Yup.date()
			.required(text.deliveryDateRequired)
			.min(new Date(), text.futureDateOnly),

		// Quantity
		quantity: Yup.number()
			.required(text.quantityRequired)
			.positive(text.mustBePositive)
			.integer(text.mustBeInteger)
			.typeError(text.mustBeNumber),
	});
};
