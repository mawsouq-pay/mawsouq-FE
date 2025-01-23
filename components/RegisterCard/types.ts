import { textTr } from "@/constants/locales";
import * as yup from "yup";

export interface RegisterFormInput {
	name: string;
	email: string;
	phone: string;
	password: string;
	confirmPassword: string;
}
export const registerValidationSchema = (locale: string) => {
	const text = textTr(locale);

	yup.object({
		name: yup.string().required(text.requiredName),
		email: yup.string().email(text.invalidEmail).required(text.requiredEmail),
		phone: yup
			.string()
			.matches(/^[+0-9]{10,15}$/, text.invalidPhone)
			.required(text.requiredPhone),
		password: yup
			.string()
			.min(8, text.passwordLength)
			.required(text.requiredPassword),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password")], text.matchPasswords)
			.required(text.requiredConfirmPassword),
	});
};

export const registerInitialValues: RegisterFormInput = {
	name: "",
	email: "",
	phone: "",
	password: "",
	confirmPassword: "",
};
