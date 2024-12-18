import {
	FormContainer,
	StyledButton,
	StyledForm,
	FlexRow,
	BackButton,
} from "./OtherPartyDetailsForm.styles";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { Formik } from "formik";
import FormItem from "../FormItem";
import { OtherPartyDetailsFormProps, createValidationSchema } from "./types";
import PaymentSummarySection from "../PaymentSummarySection";
const OtherPartyDetailsForm = (props: OtherPartyDetailsFormProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { onSubmit, onBack, initialValues, paymentDetails } = props;

	const validationSchema = createValidationSchema(text);

	const handleSubmit = (values: typeof initialValues) => {
		console.log("Buyer Details Submitted:", values);
		onSubmit(values);
	};
	return (
		<FormContainer>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<StyledForm>
					<FormItem
						label={text.phoneNumber}
						id="phoneNumber"
						name="phoneNumber"
						placeholder={text.phoneNumberPlaceHolder}
						type="tel"
					/>
					<FormItem
						label={text.email}
						id="email"
						name="email"
						placeholder={text.emailPlaceHolder}
						type="email"
					/>

					<PaymentSummarySection
						amount={paymentDetails?.amount ?? 1}
						escrowFee={paymentDetails?.escrowFee ?? 1}
						totalDue={paymentDetails?.totalDue ?? 1}
					/>
					<FlexRow>
						<BackButton onClick={onBack}>{text.back}</BackButton>
						<StyledButton type="submit">{text.createOrder}</StyledButton>
					</FlexRow>
				</StyledForm>
			</Formik>
		</FormContainer>
	);
};

export default OtherPartyDetailsForm;
