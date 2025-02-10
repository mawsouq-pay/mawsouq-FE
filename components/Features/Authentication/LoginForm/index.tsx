import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormItem from "../../../FormItem";
import {
	LoginFormInput,
	loginInitialValues,
	loginValidationSchema,
} from "./types";
import { textTr } from "@/constants/locales";
import { useLogin } from "@/hooks/authHooks";
import { clientRoutes } from "@/routes";
import { useAuthStore } from "@/store";
import { useLocaleStore } from "@/store/LocaleStore";
import { useNotification } from "@/store/SnackBarStore";
import { User } from "@/types/authenticationTypes";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { FormWrapper, Logo, OrDivider, TextLink } from "./LoginForm.styles";
import { Hide, Show } from "@/assets/icons";
import MSText from "../../../Shared/MSText";
import MSButton from "../../../Shared/MSButton";

const LoginForm = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const { mutate: loginSubmit, isPending } = useLogin();
	const { login: storeLogin } = useAuthStore();
	const { showAxiosErrorNotification, showErrorNotification } =
		useNotification();
	const router = useRouter();

	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => setShowPassword(!showPassword);

	const onSubmit = (values: LoginFormInput, { setSubmitting }: any) => {
		loginSubmit(
			{
				email: values.email,
				password: values.password,
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
						storeLogin({ accessToken, refreshToken }, user);
						router.replace({ pathname: clientRoutes.homePage });
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
			initialValues={loginInitialValues}
			validationSchema={loginValidationSchema}
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
							label="Email"
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email"
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

						<MSButton
							title={text.login}
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
								<TextLink href="/register">{text.register}!</TextLink>
							</p>
						</div>
					</Form>
				</FormWrapper>
			)}
		</Formik>
	);
};

export default LoginForm;
