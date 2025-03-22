import React from "react";
import { Formik, Form } from "formik";
import MSButton from "@/components/Shared/MSButton";
import FormItem from "@/components/FormItem";
import { Wrapper, FormContainer } from "./ResetPasswordForm.styles";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import MSErrorAndLoadingWrapper from "@/components/Shared/MSErrorAndLoadingWrapper";
import { ResetInitialValues, resetPasswordValidationSchema } from "./types";
import MSText from "@/components/Shared/MSText";
import { useResetPasswordHook } from "@/hooks/useResetPassword";
import { colors } from "@/constants/theme";

const ResetPasswordForm = ({ token }: { token: string }) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { handleResetPassword, isUpdatePasswordPending } =
		useResetPasswordHook();
	const handleSubmit = (values: { newPassword: string }) => {
		handleResetPassword(values.newPassword, token);
	};

	return (
		<Wrapper>
			<FormContainer>
				<MSText
					fontWeight="bold"
					fontSize="18px"
					color={colors.green}
					style={{ textAlign: "center" }}
				>
					{text.resetPassword}
				</MSText>
				<MSErrorAndLoadingWrapper>
					<Formik
						initialValues={ResetInitialValues}
						validationSchema={() => resetPasswordValidationSchema(locale)}
						onSubmit={handleSubmit}
					>
						{({ isValid, dirty }) => (
							<Form>
								<FormItem
									label={text.password}
									name="newPassword"
									type="password"
									placeholder={text.password}
								/>
								<FormItem
									label={text.confirmPassword}
									name="confirmPassword"
									type="password"
									placeholder={text.confirmNewPassword}
								/>
								<MSButton
									title={text.resetPassword}
									type="submit"
									disabled={!(isValid && dirty)}
									loading={isUpdatePasswordPending}
									style={{ width: "100%", marginTop: "20px" }}
								/>
							</Form>
						)}
					</Formik>
				</MSErrorAndLoadingWrapper>
			</FormContainer>
		</Wrapper>
	);
};

export default ResetPasswordForm;
