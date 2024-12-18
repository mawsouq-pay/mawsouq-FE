import * as Yup from "yup";

export interface TransactionFormProps {
	onSubmit: () => void;
	isSteps?: boolean;
}
export const createValidationSchema = (text: any) => {
	return Yup.object({
		title: Yup.string().required(`${text.requiredTitle}`),
		description: Yup.string().required(`${text.requiredDescription}`),
		amount: Yup.number()
			.required(`${text.requiredAmount}`)
			.positive(`${text.mustBePositive}`),
		deliveryDate: Yup.date().required(`${text.deliverDate}`),
		quantity: Yup.number()
			.required(`${text.quantityRequired}`)
			.positive(`${text.mustBePositive}`),
	});
};
