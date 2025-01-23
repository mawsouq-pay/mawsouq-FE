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
		onSubmit(values);
	};

	const style = {
		padding: "8px",
		borderRadius: "4px",
		marginTop: "10px",
		marginBottom: "5px",
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
							style={style}
						/>
						{/* Item Name */}
						<FormItem
							label={text.itemName}
							id={initialValues.itemName}
							name="itemName"
							placeholder={text.enterItemName}
							style={style}
						/>

						{/* Description */}
						<FormItem
							label={text.description}
							id={initialValues.description}
							name="description"
							placeholder={text.enterDescription}
							as="textarea"
							style={style}
						/>

						{/* Amount */}
						<FormItem
							label={text.price}
							type="number"
							id={initialValues.price}
							name="price"
							placeholder="$"
							style={style}
						/>

						{/* Delivery Date & Quantity */}
						<FlexRow>
							<div style={{ flex: 1 }}>
								<FormItem
									label={text.deliverDate}
									type="date"
									id={initialValues.deliveryDate}
									name="deliveryDate"
									style={style}
								/>
							</div>
							<div style={{ flex: 1 }}>
								<FormItem
									label={text.quantity}
									type="number"
									id={initialValues.quantity}
									name="quantity"
									placeholder={text.enterQuantity}
									style={style}
								/>
							</div>
						</FlexRow>

						<StyledButton type="submit">{text.next}</StyledButton>
					</StyledForm>
				)}
			</Formik>
		</FormContainer>
	);
};

export default TransactionForm;
