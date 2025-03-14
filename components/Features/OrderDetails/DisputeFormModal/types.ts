import { DisputeTypeEnum } from "@/constants";
import { textTr } from "@/constants/locales";
import * as Yup from "yup";

export const disputeFormNames = {
	type: "type",
	description: "description",
};
export const DisputeDropdownSelections = (locale: any) => {
	const text = textTr(locale);

	return [
		{
			value: DisputeTypeEnum.NOT_RECEIVED,
			label: text[DisputeTypeEnum.NOT_RECEIVED],
		},
		{
			value: DisputeTypeEnum.INCORRECT_ITEM,
			label: text[DisputeTypeEnum.INCORRECT_ITEM],
		},
		{
			value: DisputeTypeEnum.QUALITY_ISSUE,
			label: text[DisputeTypeEnum.QUALITY_ISSUE],
		},
		{
			value: DisputeTypeEnum.DAMAGED_ITEM,
			label: text[DisputeTypeEnum.DAMAGED_ITEM],
		},
		{
			value: DisputeTypeEnum.OTHER,
			label: text[DisputeTypeEnum.OTHER],
		},
	];
};

export const createValidationSchema = (locale: any) => {
	const text = textTr(locale);

	return Yup.object({
		type: Yup.string().required(text.selectAdisputeType),
		description: Yup.string().required(text.disputeDetailsAreRequired),
	});
};
