import { PayoutMethodEnum, bankCodeValues } from "@/constants";
import { textTr } from "@/constants/locales";
import { PayoutDetailsT } from "@/types/authenticationTypes";
import * as Yup from "yup";

export interface PayoutFormProps {
	onSubmit: (payoutDetails: PayoutDetailsT) => void;
	onCancel: () => void;
	isPending: boolean;
}
export const PayoutDropdownSelections = [
	{ label: "Vodafone", value: PayoutMethodEnum.VODAFONE },
	{ label: "Etisalat", value: PayoutMethodEnum.ETISALAT },
	{ label: "Orange", value: PayoutMethodEnum.ORANGE },
	{ label: "Bank Wallet", value: PayoutMethodEnum.BANK_WALLET },
	{ label: "Bank Card", value: PayoutMethodEnum.BANK_CARD },
];

export const PayoutFormNames = {
	payoutMethod: "method",
	payoutPhoneNumer: "phoneNumber",
	payoutBankCode: "bankCode",
	payoutCardNumber: "cardNumber",
	payoutFullName: "fullName",
};

export const createValidationSchema = (locale: any) => {
	const text = textTr(locale);

	return Yup.object({
		method: Yup.string().required(text.requiredField),
		phoneNumber: Yup.string()
			.required(text.requiredPhone)
			.trim()
			.matches(/^01[0-9]{9}$/, text.invalidPhone),
		bankCode: Yup.string().when("method", {
			is: PayoutMethodEnum.BANK_CARD,
			then: () =>
				Yup.string()
					.oneOf(bankCodeValues, text.invalidBank)
					.required(text.requiredField),
		}),
		cardNumber: Yup.string().when("method", {
			is: PayoutMethodEnum.BANK_CARD,
			then: () =>
				Yup.string()
					.trim()
					.matches(/^\d{16}$|^\d{4}-\d{4}-\d{4}-\d{4}$/)
					.required(text.requiredField),
		}),
		fullName: Yup.string().required(text.requiredField),
	});
};
