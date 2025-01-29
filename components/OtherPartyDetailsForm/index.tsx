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
import MSButton from "../MSButton";
const OtherPartyDetailsForm = (props: OtherPartyDetailsFormProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { onSubmit, onBack, initialValues, paymentDetails } = props;
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
						<FormItem
							label={text.phoneNumber}
							id={initialValues.otherPartyPhone}
							name="otherPartyPhone"
							placeholder={text.phoneNumberPlaceHolder}
							type="tel"
							style={style}
						/>
						<FormItem
							label={text.email}
							id={initialValues.otherPartyEmail}
							name="otherPartyEmail"
							placeholder={text.emailPlaceHolder}
							type="email"
							style={style}
						/>

						<PaymentSummarySection
							price={paymentDetails?.price ?? 1}
							escrowFee={paymentDetails?.escrowFee ?? 1}
							totalDue={paymentDetails?.totalDue ?? 1}
						/>
						<FlexRow>
							<BackButton onClick={onBack}>{text.back}</BackButton>
							<MSButton
								title={text.next}
								onClick={() => {}}
								type="submit"
								style={{
									height: 40,
									width: "fit-content",
									alignSelf: "flex-end",
								}}
							/>
						</FlexRow>
					</StyledForm>
				)}
			</Formik>
		</FormContainer>
	);
};

export default OtherPartyDetailsForm;
