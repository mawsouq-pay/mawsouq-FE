import {
	FlexRow,
	FormContainer,
	StyledButton,
	StyledForm,
} from "./TransactionForm.styles";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { Formik } from "formik";
import FormItem from "../FormItem";
import { TransactionFormProps, createValidationSchema } from "./types";
const TransactionForm = (props: TransactionFormProps) => {
	const { onSubmit, initialValues } = props;
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const validationSchema = createValidationSchema(text);
	const handleSubmit = (values: typeof initialValues) => {
		onSubmit(initialValues);
		console.log("Form Data:", values);
	};
	return (
		<FormContainer>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ values }) => (
					<StyledForm>
						{/* Title */}
						<FormItem
							label={text.transactionTitle}
							id="transactionTitle"
							name="transactionTitle"
							placeholder={text.enterTitle}
						/>
						{/* Item Name */}
						<FormItem
							label={text.itemName}
							id="itemName"
							name="itemName"
							placeholder={text.enterItemName}
						/>

						{/* Description */}
						<FormItem
							label={text.description}
							id="description"
							name="description"
							placeholder={text.enterDescription}
							as="textarea"
						/>

						{/* Amount */}
						<FormItem
							label={text.amount}
							type="number"
							id="amount"
							name="amount"
							placeholder="$"
						/>

						{/* Delivery Date & Quantity */}
						<FlexRow>
							<div style={{ flex: 1 }}>
								<FormItem
									label={text.deliverDate}
									type="date"
									id="deliveryDate"
									name="deliveryDate"
								/>
							</div>
							<div style={{ flex: 1 }}>
								<FormItem
									label={text.quantity}
									type="number"
									id="quantity"
									name="quantity"
									placeholder={text.enterQuantity}
								/>
							</div>
						</FlexRow>

						<StyledButton type="submit">{text.next}</StyledButton>
						{/* <pre style={{ marginTop: "20px", color: "#333" }}>
							{JSON.stringify(values, null, 2)}
						</pre> */}
					</StyledForm>
				)}
			</Formik>
		</FormContainer>
	);
};

export default TransactionForm;
