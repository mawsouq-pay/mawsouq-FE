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
	const { onSubmit, isSteps } = props;
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const initialValues = {
		title: "",
		description: "",
		amount: "",
		deliveryDate: "",
		quantity: "",
	};
	const validationSchema = createValidationSchema(text);
	const handleSubmit = (values: any) => {
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
							label={text.title}
							id="title"
							name="title"
							placeholder="Enter title"
						/>

						{/* Description */}
						<FormItem
							label={text.description}
							id="description"
							name="description"
							placeholder="Enter description"
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
									placeholder="Enter quantity"
								/>
							</div>
						</FlexRow>

						<StyledButton type="submit" isSteps={isSteps ?? false}>
							{isSteps ? text.next : text.submit}
						</StyledButton>
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
