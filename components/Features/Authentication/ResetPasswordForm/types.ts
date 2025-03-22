import { textTr } from "@/constants/locales";
import * as yup from "yup";

export const resetPasswordValidationSchema = (locale: string) => {
	const text = textTr(locale);

	return yup.object({
		newPassword: yup
			.string()
			.min(8, text.passwordLength)
			.required(text.requiredPassword),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("newPassword")], text.matchPasswords)
			.required(text.requiredConfirmPassword),
	});
};

export const ResetInitialValues = {
	newPassword: "",
	confirmPassword: "",
};
