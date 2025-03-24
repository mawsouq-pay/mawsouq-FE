import React from "react";
import { Formik } from "formik";
import MSModal from "@/components/Shared/MSModal";
import MSText from "@/components/Shared/MSText";
import FormItem from "@/components/FormItem";
import { colors } from "@/constants/theme";
import MSButton from "@/components/Shared/MSButton";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { createValidationSchema, ratingFormNames } from "./types";
import { CancelButton, FlexRow, StyledForm } from "./RateOrderModal.styles";
import Rating from "@mui/material/Rating";

interface OrderRatingModalProps {
	open: boolean;
	onCancel: () => void;
	onSubmit: (values: { rating: number; comment: string }) => void;
	isRateOrderPending: boolean;
}

const RateOrderModal = ({
	open,
	onCancel,
	onSubmit,
	isRateOrderPending,
}: OrderRatingModalProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const validationSchema = createValidationSchema(locale);

	const initialValues = {
		rating: 5,
		comment: "",
	};

	return (
		<MSModal open={open} showActions={false} title={text.rateOrder}>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, { resetForm }) => {
					console.log(values);
					onSubmit(values);
					resetForm();
				}}
			>
				{({ handleSubmit, isValid, dirty, setFieldValue, values }) => (
					<StyledForm onSubmit={handleSubmit}>
						<MSText
							fontWeight="600"
							fontSize="16px"
							style={{ marginBottom: 8 }}
						>
							{text.selectRating}
						</MSText>

						<Rating
							name={ratingFormNames.rating}
							value={values.rating}
							onChange={(_, val) => {
								console.log(val);
								setFieldValue(ratingFormNames.rating, val || 1);
							}}
							size="large"
						/>

						<FormItem
							label={text.leaveComment}
							name={ratingFormNames.comment}
							placeholder={text.commentPlaceholder}
							as="textarea"
						/>

						<MSText
							fontSize="14px"
							color={colors.gray}
							style={{ marginTop: "5px" }}
						>
							{text.ratingInfo}
						</MSText>

						<FlexRow>
							<CancelButton onClick={onCancel}>{text.cancel}</CancelButton>
							<MSButton
								type="submit"
								disabled={!(isValid && dirty)}
								style={{
									height: 45,
									width: "fit-content",
									alignSelf: "flex-end",
								}}
								title={text.submit}
								loading={isRateOrderPending}
							/>
						</FlexRow>
					</StyledForm>
				)}
			</Formik>
		</MSModal>
	);
};

export default RateOrderModal;
