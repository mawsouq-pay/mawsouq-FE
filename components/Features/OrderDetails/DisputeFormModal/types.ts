import { DisputeTypeEnum } from "@/constants";
import { textTr } from "@/constants/locales";
import * as Yup from "yup";

export const disputeFormNames = {
	type: "type",
	description: "description",
};
export const DisputeDropdownSelections = [
	{ value: DisputeTypeEnum.NOT_RECEIVED, label: "Didn't receive order" },
	{ value: DisputeTypeEnum.NOT_AS_EXPECTED, label: "Order not as expected" },
	{ value: DisputeTypeEnum.OTHERS, label: "Others" },
];

export const createValidationSchema = (locale: any) => {
	const text = textTr(locale);

	return Yup.object({
		type: Yup.string().required(text.selectAdisputeType),
		description: Yup.string().required(text.disputeDetailsAreRequired),
	});
};
