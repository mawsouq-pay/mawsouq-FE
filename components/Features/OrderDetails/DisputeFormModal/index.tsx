import React from "react";
import { Formik } from "formik";
import MSModal from "@/components/Shared/MSModal";
import MSText from "@/components/Shared/MSText";
import FormItem from "@/components/FormItem";
import { colors } from "@/constants/theme";
import MSDropdown from "@/components/Shared/MSDropdown";
import {
	DisputeDropdownSelections,
	createValidationSchema,
	disputeFormNames,
} from "./types";
import { useLocaleStore } from "@/store/LocaleStore";
import MSButton from "@/components/Shared/MSButton";
import { textTr } from "@/constants/locales";
import { DisputeTypeEnum } from "@/constants";
import { CancelButton, FlexRow, StyledForm } from "./DisputeFormModal.styles";

interface DisputeFormModalProps {
	open: boolean;
	setOpen: (value: boolean) => void;
	onSubmit: (values: { type: DisputeTypeEnum; description: string }) => void;
}

const DisputeFormModal = ({
	open,
	setOpen,
	onSubmit,
}: DisputeFormModalProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const validationSchema = createValidationSchema(locale);

	const initialValues = {
		type: DisputeTypeEnum.NOT_RECEIVED,
		description: "",
	};

	return (
		<MSModal
			open={open}
			onClose={() => setOpen(false)}
			showActions={false}
			title={"Submit a complaint"}
		>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, { resetForm }) => {
					onSubmit(values);
					resetForm();
				}}
			>
				{({ setFieldValue, handleSubmit, isValid, dirty, isSubmitting }) => (
					<StyledForm onSubmit={handleSubmit}>
						<MSDropdown
							options={DisputeDropdownSelections(locale)}
							onChange={(val) => setFieldValue(disputeFormNames.type, val)}
							name={disputeFormNames.type}
							defaultValue={DisputeTypeEnum.NOT_RECEIVED}
						/>

						<FormItem
							label="Complaint Details"
							name={disputeFormNames.description}
							placeholder="Enter your complaint..."
							as="textarea"
						/>
						<MSText
							fontSize="16px"
							color={colors.gray}
							style={{ marginTop: "8px" }}
						>
							Please describe your issue in detail. Our team will review your
							dispute and get back to you.
						</MSText>
						<FlexRow>
							<CancelButton onClick={() => setOpen(false)}>
								{text.cancel}
							</CancelButton>
							<MSButton
								type="submit"
								disabled={!(isValid && dirty)}
								style={{
									backgroundColor: colors.red,
									height: 45,
									width: "fit-content",
									alignSelf: "flex-end",
								}}
								title={text.submit}
							/>
						</FlexRow>
					</StyledForm>
				)}
			</Formik>
		</MSModal>
	);
};

export default DisputeFormModal;
