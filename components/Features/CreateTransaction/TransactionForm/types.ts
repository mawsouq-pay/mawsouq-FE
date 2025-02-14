import { textTr } from "@/constants/locales";
import * as Yup from "yup";
import { StartTransactionData } from "../StartTransactionCard/types";

export interface TransactionFormProps {
	onSubmit: (formData: StartTransactionData) => void;
	initialValues: StartTransactionData;
	onBack: () => void;
}

export const createValidationSchema = (locale: any) => {
	const text = textTr(locale);

	return Yup.object({
		// Description
		description: Yup.string()
			.trim()
			.required(text.requiredDescription)
			.min(30, text.descriptionMinLength)
			.max(1024, text.descriptionMaxLength),

		//Price
		price: Yup.number()
			.required(text.requiredPrice)
			.min(1, text.mustBePositive)
			.typeError(text.mustBeNumber),

		// Delivery Date
		deliveryDate: Yup.date()
			.required(text.deliveryDateRequired)
			.min(new Date(), text.futureDateOnly),
	});
};
