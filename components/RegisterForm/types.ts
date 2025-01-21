import { textTr } from "@/constants/locales";
import * as yup from "yup";

export interface RegisterFormInputs {
	name: string;
	email: string;
	phone: string;
	confirmPassword: string;
	password: string;
}
export const initialValues: RegisterFormInputs = {
	name: "",
	email: "",
	phone: "",
	password: "",
	confirmPassword: "",
};

export const validationSchema = (locale: any) => {
	const text = textTr(locale);

	return yup.object({
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
