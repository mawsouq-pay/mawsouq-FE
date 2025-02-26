import {
	BackButton,
	FlexRow,
	FormContainer,
	StyledForm,
} from "./TransactionForm.styles";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { Formik } from "formik";
import { TransactionFormProps, createValidationSchema } from "./types";
import FormItem from "@/components/FormItem";
import MSButton from "@/components/Shared/MSButton";
import MSPaymentSummarySection from "@/components/Shared/MSPaymentSummarySection";
import { StartTransactionFormNames } from "../StartTransactionCard/types";
const TransactionForm = (props: TransactionFormProps) => {
	const { onSubmit, initialValues, onBack } = props;
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const validationSchema = createValidationSchema(locale);
	const handleSubmit = (values: typeof initialValues) => {
		onSubmit(values);
	};

	return (
		<FormContainer>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ values }) => (
					<StyledForm>
						<FormItem
							label={text.transactionTitle}
							id={initialValues.transactionTitle}
							name={StartTransactionFormNames.transactionTitle}
							placeholder={text.enterTitle}
						/>

						{/* Description */}
						<FormItem
							label={text.description}
							id={initialValues.description}
							name={StartTransactionFormNames.description}
							placeholder={text.enterDescription}
							as="textarea"
						/>

						{/* Amount */}
						<FormItem
							label={text.price}
							type="number"
							id={initialValues.price}
							name={StartTransactionFormNames.price}
							placeholder="EGP"
						/>

						{/* Delivery Date */}
						<FormItem
							label={text.deliverDate}
							type="date"
							id={initialValues.deliveryDate}
							name={StartTransactionFormNames.deliveryDate}
						/>

						<div style={{ marginTop: 20 }}>
							{" "}
							<MSPaymentSummarySection
								price={parseFloat(values.price) || 0}
								escrowFee={parseFloat(values.price) || 0 > 0 ? 50 : 0}
								totalDue={(parseFloat(values.price) || 0) + 50}
							/>{" "}
						</div>
						<MSButton
							title={text.next}
							type="submit"
							style={{
								height: 40,
								width: "fit-content",
								alignSelf: "flex-end",
								marginTop: 10,
							}}
						/>
					</StyledForm>
				)}
			</Formik>
		</FormContainer>
	);
};

export default TransactionForm;
