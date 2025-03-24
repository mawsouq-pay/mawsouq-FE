import { textTr } from "@/constants/locales";
import * as Yup from "yup";

export const createValidationSchema = (locale: any) => {
	const text = textTr(locale);

	return Yup.object({
		rating: Yup.number()
			.required("Rating is required")
			.min(1, "Minimum rating is 1")
			.max(5, "Maximum rating is 5"),
		comment: Yup.string().required().max(500),
	});
};

export const ratingFormNames = {
	rating: "rating",
	comment: "comment",
};
