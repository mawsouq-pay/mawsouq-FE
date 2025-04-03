import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormItem from "../../../FormItem";
import { loginInitialValues, loginValidationSchema } from "./types";
import { textTr } from "@/constants/locales";
import { useLocaleStore } from "@/store/LocaleStore";
import {
	FormWrapper,
	Logo,
	MainWrapper,
	OrDivider,
	PasswordDiv,
	TextLink,
} from "./LoginForm.styles";
import MSButton from "../../../Shared/MSButton";
import { useLoginHandler } from "@/hooks/useLoginHandler";
import { Eye, EyeOff } from "lucide-react";
import { MSLogo } from "@/assets/icons";
import ResetPasswordButton from "../ResetPasswordButton";
import { colors } from "@/constants/theme";

const LoginForm = ({ orderId }: { orderId?: string }) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { handleLogin, isPending } = useLoginHandler(orderId);

	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => setShowPassword(!showPassword);

	return (
		<Formik
			initialValues={loginInitialValues}
			validationSchema={() => loginValidationSchema(locale)}
			onSubmit={(values, { setSubmitting }) =>
				handleLogin(values, setSubmitting)
			}
		>
			{({ isSubmitting, isValid, dirty }) => (
				<MainWrapper>
					<Logo>
						<MSLogo />
					</Logo>
					<FormWrapper>
						<Form style={{ gap: 20 }}>
							<FormItem
								label={text.email}
								type="email"
								id="email"
								name="email"
								placeholder={text.emailPlaceHolder}
							/>
							<PasswordDiv>
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
								<ResetPasswordButton />
							</PasswordDiv>

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
								<p style={{ fontSize: 12, color: colors.gray }}>
									{text.dontHaveAnAccount}{" "}
									<TextLink
										href={
											orderId ? `/register?orderId=${orderId}` : "/register"
										}
									>
										{text.register}!
									</TextLink>
								</p>
							</div>
						</Form>
					</FormWrapper>
				</MainWrapper>
			)}
		</Formik>
	);
};

export default LoginForm;
