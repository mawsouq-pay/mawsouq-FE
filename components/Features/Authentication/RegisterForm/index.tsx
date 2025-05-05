import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormItem from "../../../FormItem";
import { registerInitialValues, registerValidationSchema } from "./types";
import { textTr } from "@/constants/locales";
import { useLocaleStore } from "@/store/LocaleStore";
import {
	FormWrapper,
	Logo,
	MainWrapper,
	OrDivider,
	TextLink,
	TermsContainer,
	TermsLink,
	TermsCheckbox,
	TermsText,
} from "./RegisterForm.styles";
import MSButton from "../../../Shared/MSButton";
import useRegisterHandler from "@/hooks/useRegisterHandler";
import { Eye, EyeOff } from "lucide-react";
import { MSLogo } from "@/assets/icons";
import { colors } from "@/constants/theme";
import { clientRoutes } from "@/routes";
import MSText from "@/components/Shared/MSText";

const RegisterForm = ({ orderId }: { orderId?: string }) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { handleRegister, isPending } = useRegisterHandler(orderId);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const togglePasswordVisibility = () => setShowPassword(!showPassword);
	const toggleConfirmPasswordVisibility = () =>
		setShowConfirmPassword(!showConfirmPassword);

	return (
		<Formik
			initialValues={registerInitialValues}
			validationSchema={() => registerValidationSchema(locale)}
			onSubmit={(values, { setSubmitting }) =>
				handleRegister(values, setSubmitting)
			}
		>
			{({ isSubmitting, isValid, dirty, values, setFieldValue }) => (
				<MainWrapper>
					<Logo>
						<MSLogo />
					</Logo>

					<FormWrapper>
						<Form style={{ gap: 20 }}>
							<FormItem
								label={text.fullName}
								id="name"
								name="name"
								placeholder={text.namePlaceHolder}
							/>
							<FormItem
								label={text.email}
								type="email"
								id="email"
								name="email"
								placeholder={text.emailPlaceHolder}
							/>

							<FormItem
								label={text.phoneNumber}
								type="tel"
								id="phone"
								name="phone"
								placeholder={text.phoneNumberPlaceHolder}
							/>
							<FormItem
								label={text.password}
								id="password"
								name="password"
								placeholder={text.passwordPlaceHolder}
								icon={
									<span
										onClick={togglePasswordVisibility}
										style={{ cursor: "pointer" }}
									>
										{showPassword ? <EyeOff /> : <Eye />}
									</span>
								}
								type={showPassword ? "text" : "password"}
							/>
							<FormItem
								label={text.confirmPassword}
								id="confirmPassword"
								name="confirmPassword"
								placeholder={text.confirmPasswordPlaceHolder}
								icon={
									<span
										onClick={toggleConfirmPasswordVisibility}
										style={{ cursor: "pointer" }}
									>
										{showConfirmPassword ? <EyeOff /> : <Eye />}
									</span>
								}
								type={showConfirmPassword ? "text" : "password"}
							/>

							<TermsContainer>
								<TermsCheckbox
									id="termsAccepted"
									name="termsAccepted"
									checked={values.termsAccepted}
									onChange={(e) => setFieldValue("termsAccepted", e.target.checked)}
								/>
								<TermsText>
									<MSText fontSize="14px" color={colors.gray}>
										{text.acceptTerms}
									</MSText>
									<TermsLink href={clientRoutes.termsAndConditions}>
										<MSText fontSize="14px" color={colors.green} fontWeight="600">
											{text.terms}
										</MSText>
									</TermsLink>
									<MSText fontSize="14px" color={colors.gray}>
										{text.and}
									</MSText>
									<TermsLink href={clientRoutes.privacyPolicy}>
										<MSText fontSize="14px" color={colors.green} fontWeight="600">
											{text.privacy}
										</MSText>
									</TermsLink>
								</TermsText>
							</TermsContainer>

							<MSButton
								title={text.register}
								style={{ width: "100%", height: 45, marginTop: 20 }}
								disabled={!(isValid && dirty) || isSubmitting || isPending}
								loading={isPending}
								type="submit"
							/>

							<OrDivider>or</OrDivider>
							<div
								style={{
									display: "flex",
									flex: 1,
									justifyContent: "center",
								}}
							>
								<MSText fontSize="12px" color={colors.gray}>
									{text.alreadyHaveAnAccount}{" "}
									<TextLink
										href={orderId ? `/login?orderId=${orderId}` : "/login"}
									>
										{text.login}!
									</TextLink>
								</MSText>
							</div>
						</Form>
					</FormWrapper>
				</MainWrapper>
			)}
		</Formik>
	);
};

export default RegisterForm;
