import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormItem from "../../../FormItem";
import { loginInitialValues, loginValidationSchema } from "./types";
import { textTr } from "@/constants/locales";
import { useLocaleStore } from "@/store/LocaleStore";
import { FormWrapper, Logo, OrDivider, TextLink } from "./LoginForm.styles";
import { Hide, Show } from "@/assets/icons";
import MSText from "../../../Shared/MSText";
import MSButton from "../../../Shared/MSButton";
import { useLoginHandler } from "@/hooks/useLoginHandler";

const LoginForm = ({ orderId }: { orderId?: string }) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { handleLogin, isPending } = useLoginHandler(orderId);

	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => setShowPassword(!showPassword);

	return (
		<Formik
			initialValues={loginInitialValues}
			validationSchema={loginValidationSchema}
			onSubmit={(values, { setSubmitting }) =>
				handleLogin(values, setSubmitting)
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
								<TextLink
									href={orderId ? `/register?orderId=${orderId}` : "/register"}
								>
									{text.register}!
								</TextLink>
							</p>
						</div>
					</Form>
				</FormWrapper>
			)}
		</Formik>
	);
};

export default LoginForm;
