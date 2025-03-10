import React, { useState } from "react";
import { Formik, Form, useFormikContext } from "formik";
import {
	PayoutDropdownSelections,
	PayoutFormNames,
	PayoutFormProps,
	createValidationSchema,
} from "./types";
import { BANK_CODES, BankCode, PayoutMethodEnum } from "@/constants";
import MSBankDropdown from "@/components/Shared/MSBankDropdown";
import MSDropdown from "@/components/Shared/MSDropdown";
import FormItem from "@/components/FormItem";
import { textTr } from "@/constants/locales";
import { useLocaleStore } from "@/store/LocaleStore";
import {
	BackButton,
	FlexRow,
	FormContainer,
	StyledForm,
} from "./MSPayoutForm.styles";
import MSText from "@/components/Shared/MSText";
import { colors } from "@/constants/theme";
import { PayoutDetailsT } from "@/types/authenticationTypes";
import { isValid } from "date-fns";
import MSButton from "../MSButton";

const MSPayoutForm = ({ onCancel, onSubmit, isPending }: PayoutFormProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const validationSchema = createValidationSchema(locale);
	const [initialValues] = useState<PayoutDetailsT>({
		method: PayoutMethodEnum.VODAFONE,
		phoneNumber: "",
		fullName: "",
		cardNumber: "",
		bankCode: "" as BankCode,
	});

	const handleSubmit = async (values: PayoutDetailsT) => {
		const paymentDetails = {
			method: values.method,
			phoneNumber: values.phoneNumber,
			fullName: values.fullName,
			...(values.method === PayoutMethodEnum.BANK_CARD
				? { cardNumber: values.cardNumber, bankCode: values.bankCode }
				: {}),
		};
		onSubmit(paymentDetails);
	};

	return (
		<FormContainer>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ values, setFieldValue, isValid, dirty }) => (
					<StyledForm>
						<MSDropdown
							options={PayoutDropdownSelections}
							onChange={(val) => {
								setFieldValue(`${PayoutFormNames.payoutCardNumber}`, "");
								setFieldValue(`${PayoutFormNames.payoutBankCode}`, "");
								setFieldValue(`${PayoutFormNames.payoutMethod}`, val);
							}}
							name={PayoutFormNames.payoutMethod}
						/>

						{values.method === PayoutMethodEnum.BANK_CARD && (
							<>
								<MSText
									fontSize="14px"
									color={colors.black}
									style={{ marginTop: 5 }}
								>
									{text.chooseYourBankName}
								</MSText>
								<MSBankDropdown
									options={BANK_CODES}
									onChange={(val) =>
										setFieldValue(`${PayoutFormNames.payoutBankCode}`, val)
									}
									name={PayoutFormNames.payoutBankCode}
								/>
								<FormItem
									label={text.cardNumber}
									name={PayoutFormNames.payoutCardNumber}
									placeholder={text.cardNumber}
								/>
							</>
						)}

						{values.method && (
							<>
								<FormItem
									label={text.phoneNumber}
									name={PayoutFormNames.payoutPhoneNumer}
									placeholder={text.phoneNumberPlaceHolder}
								/>
								<FormItem
									label={text.fullName}
									name={PayoutFormNames.payoutFullName}
									placeholder={text.fullName}
								/>
							</>
						)}

						<FlexRow>
							<BackButton type="button" onClick={() => onCancel()}>
								{text.cancel}
							</BackButton>
							<MSButton
								title={text.confirm}
								type="submit"
								style={{
									height: 40,
									width: "fit-content",
									alignSelf: "flex-end",
								}}
								disabled={!(isValid && dirty)}
								loading={isPending}
							/>
						</FlexRow>
					</StyledForm>
				)}
			</Formik>
		</FormContainer>
	);
};

export default MSPayoutForm;
