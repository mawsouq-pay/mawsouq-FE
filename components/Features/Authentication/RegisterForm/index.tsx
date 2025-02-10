import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormItem from "../../../FormItem";
import {
	RegisterFormInput,
	registerInitialValues,
	registerValidationSchema,
} from "./types";
import { textTr } from "@/constants/locales";
import { useRegister } from "@/hooks/authHooks";
import { clientRoutes } from "@/routes";
import { useAuthStore } from "@/store";
import { useLocaleStore } from "@/store/LocaleStore";
import { useNotification } from "@/store/SnackBarStore";
import { User } from "@/types/authenticationTypes";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { FormWrapper, Logo, OrDivider, TextLink } from "./RegisterForm.styles";
import { Hide, Show } from "@/assets/icons";
import MSText from "../../../Shared/MSText";
import MSButton from "../../../Shared/MSButton";

const RegisterForm = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const { mutate: registerSubmit, isPending } = useRegister();
	const { register: storeRegister } = useAuthStore();
	const { showAxiosErrorNotification, showErrorNotification } =
		useNotification();
	const router = useRouter();

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const togglePasswordVisibility = () => setShowPassword(!showPassword);
	const toggleConfirmPasswordVisibility = () =>
		setShowConfirmPassword(!showConfirmPassword);

	const onSubmit = (values: RegisterFormInput, { setSubmitting }: any) => {
		registerSubmit(
			{
				email: values.email,
				name: values.name,
				password: values.password,
				phone: values.phone,
			},
			{
				onSuccess: (response) => {
					const accessToken = response.headers["x-auth-token"];
					const refreshToken = response.headers["x-refresh-token"];
					if (accessToken && refreshToken) {
						const user: User = {
							name: response?.data?.name,
							email: response?.data?.email,
							phone: response?.data?.phone,
						};
						storeRegister({ accessToken, refreshToken }, user);
						router.replace({
							pathname: clientRoutes.homePage,
						});
					} else {
						showErrorNotification(text.genericErrorMessage);
					}
					setSubmitting(false);
				},
				onError: (error) => {
					setSubmitting(false);
					showAxiosErrorNotification(error as AxiosError);
				},
			}
		);
	};
	return (
		<Formik
			initialValues={registerInitialValues}
			validationSchema={registerValidationSchema}
			onSubmit={onSubmit}
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
								<TextLink href="/login">{text.login}!</TextLink>
							</p>
						</div>
					</Form>
				</FormWrapper>
			)}
		</Formik>
	);
};

export default RegisterForm;
