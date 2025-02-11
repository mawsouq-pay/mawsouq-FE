import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormItem from "../../../FormItem";
import { registerInitialValues, registerValidationSchema } from "./types";
import { textTr } from "@/constants/locales";
import { useLocaleStore } from "@/store/LocaleStore";
import { FormWrapper, Logo, OrDivider, TextLink } from "./RegisterForm.styles";
import { Hide, Show } from "@/assets/icons";
import MSText from "../../../Shared/MSText";
import MSButton from "../../../Shared/MSButton";
import useRegisterHandler from "@/hooks/useRegisterHandler";

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
			validationSchema={registerValidationSchema}
			onSubmit={(values, { setSubmitting }) =>
				handleRegister(values, setSubmitting)
			}
		>
			{({ isSubmitting, isValid, dirty }) => (
				<FormWrapper>
					<Logo>
						Maw<span>souq</span>
					</Logo>
					<MSText
						fontSize="14px"
						color="#75859E"
						style={{
							paddingBottom: "12px",
							textAlign: "center",
						}}
					>
						{text.securePaymentsWithMawsouq}
					</MSText>

					<Form style={{ gap: 20 }}>
						<FormItem
							label="Name"
							id="name"
							name="name"
							placeholder="Enter your name"
						/>
						<FormItem
							label="Email"
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email"
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
							placeholder="Enter your password"
							icon={
								<span
									onClick={togglePasswordVisibility}
									style={{ cursor: "pointer" }}
								>
									{showPassword ? <Hide /> : <Show />}
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
									{showConfirmPassword ? <Hide /> : <Show />}
								</span>
							}
							type={showConfirmPassword ? "text" : "password"}
						/>

						<MSButton
							title={text.register}
							style={{ width: "100%", height: 45, marginTop: 30 }}
							disabled={!(isValid && dirty) || isSubmitting || isPending}
							loading={isPending}
						/>

						<OrDivider>or</OrDivider>
						<div
							style={{
								display: "flex",
								flex: 1,
								justifyContent: "center",
							}}
						>
							<p>
								{text.alreadyHaveAnAccount}{" "}
								<TextLink
									href={orderId ? `/login?orderId=${orderId}` : "/login"}
								>
									{text.login}!
								</TextLink>
							</p>
						</div>
					</Form>
				</FormWrapper>
			)}
		</Formik>
	);
};

export default RegisterForm;
