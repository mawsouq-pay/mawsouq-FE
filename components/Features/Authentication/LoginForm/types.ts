import { textTr } from "@/constants/locales";
import * as yup from "yup";

export interface LoginFormInput {
	email: string;
	password: string;
}
export const loginValidationSchema = (locale: string) => {
	const text = textTr(locale);

	return yup.object({
		email: yup.string().email(text.invalidEmail).required(text.requiredEmail),
		password: yup
			.string()
			.min(8, text.passwordLength)
			.required(text.requiredPassword),
	});
};

export const loginInitialValues: LoginFormInput = {
	email: "",
	password: "",
};
