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
import { useAuthStore } from "@/store";
const OtherPartyDetailsForm = (props: OtherPartyDetailsFormProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { user } = useAuthStore();
	const { onSubmit, onBack, initialValues, paymentDetails } = props;
	const validationSchema = createValidationSchema(
		locale,
		user?.email,
		user?.phone
	);
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
							label={text.buyerPhone}
							id={initialValues.otherPartyPhone}
							name="otherPartyPhone"
							placeholder={text.phoneNumberPlaceHolder}
							type="tel"
						/>
						<FormItem
							label={text.buyerEmail}
							id={initialValues.otherPartyEmail}
							name="otherPartyEmail"
							placeholder={text.emailPlaceHolder}
							type="email"
						/>
						<div style={{ marginTop: 20 }}>
							{" "}
							<PaymentSummarySection
								price={paymentDetails?.price ?? 1}
								escrowFee={paymentDetails?.escrowFee ?? 1}
								totalDue={paymentDetails?.totalDue ?? 1}
							/>
						</div>

						<FlexRow>
							<BackButton onClick={onBack}>{text.back}</BackButton>
							<MSButton
								title={text.next}
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
