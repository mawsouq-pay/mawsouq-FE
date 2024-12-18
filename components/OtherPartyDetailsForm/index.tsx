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
import { OtherPartyDetailsFormProps, validationSchema } from "./types";
import PaymentSummarySection from "../PaymentSummarySection";
const OtherPartyDetailsForm = (props: OtherPartyDetailsFormProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { onSubmit, isSteps, onBack } = props;
	const initialValues = {
		phoneNumber: "",
		email: "",
	};

	const handleSubmit = (values: typeof initialValues) => {
		console.log("Buyer Details Submitted:", values);
		onSubmit();
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
					{isSteps && (
						<PaymentSummarySection amount={80} escrowFee={20} totalDue={100} />
					)}
					<FlexRow>
						{isSteps && <BackButton onClick={onBack}>{text.back}</BackButton>}
						<StyledButton type="submit" isSteps={isSteps ?? false}>
							{isSteps ? text.next : text.submit}
						</StyledButton>
					</FlexRow>
				</StyledForm>
			</Formik>
		</FormContainer>
	);
};

export default OtherPartyDetailsForm;
