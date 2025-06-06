import { FlexRow, FormContainer, StyledForm } from "./TransactionForm.styles";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { Formik } from "formik";
import { TransactionFormProps, createValidationSchema } from "./types";
import FormItem from "@/components/FormItem";
import MSButton from "@/components/Shared/MSButton";
const TransactionForm = (props: TransactionFormProps) => {
	const { onSubmit, initialValues } = props;
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
						{/* Title */}
						<FormItem
							label={text.transactionTitle}
							id={initialValues.transactionTitle}
							name="transactionTitle"
							placeholder={text.enterTitle}
						/>
						{/* Item Name */}
						<FormItem
							label={text.itemName}
							id={initialValues.itemName}
							name="itemName"
							placeholder={text.enterItemName}
						/>

						{/* Description */}
						<FormItem
							label={text.description}
							id={initialValues.description}
							name="description"
							placeholder={text.enterDescription}
							as="textarea"
						/>

						{/* Amount */}
						<FormItem
							label={text.price}
							type="number"
							id={initialValues.price}
							name="price"
							placeholder="$"
						/>

						{/* Delivery Date & Quantity */}
						<FlexRow>
							<div style={{ flex: 1 }}>
								<FormItem
									label={text.deliverDate}
									type="date"
									id={initialValues.deliveryDate}
									name="deliveryDate"
								/>
							</div>
							<div style={{ flex: 1 }}>
								<FormItem
									label={text.quantity}
									type="number"
									id={initialValues.quantity}
									name="quantity"
									placeholder={text.enterQuantity}
								/>
							</div>
						</FlexRow>

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
