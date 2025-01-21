import { Hide, Show } from "@/assets/icons";
import { Card } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";

import FormItem from "../FormItem";
import MSText from "../MSText";
import {
	GradientBackground,
	StyledForm,
	Row,
	HalfWidth,
	StyledButton,
	LoginText,
	LoginLink,
} from "./RegisterForm.styles";
import useCustomBreakpoint from "@/helpers/screenSizes";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { useRegister } from "@/hooks/authHooks";
import useSnackbarError from "@/hooks/errorHooks";
import { clientRoutes } from "@/routes";
import { useAuthStore } from "@/store";
import { User } from "@/types/authenticationTypes";
import { AxiosError } from "axios";
import router from "next/router";
import { RegisterFormInputs, initialValues, validationSchema } from "./types";
import { colors } from "@/constants/theme";

const RegisterForm = () => {
	const { isMobile } = useCustomBreakpoint();
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { mutate: registerSubmit } = useRegister();
	const { register: storeRegister } = useAuthStore();
	const { handleAxiosError } = useSnackbarError();
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const togglePasswordVisibility = () => setShowPassword(!showPassword);
	const toggleConfirmPasswordVisibility = () =>
		setShowConfirmPassword(!showConfirmPassword);
	const onSubmit = (values: RegisterFormInputs) => {
		console.log("onSubmit");
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

					const user: User = {
						name: response?.data?.name,
						email: response?.data?.email,
						phone: response?.data?.phone,
					};
					console.log("hiii", response);
					storeRegister({ accessToken, refreshToken }, user);
					router.push({
						pathname: clientRoutes.landingPage,
					});
				},
				onError: (error) => {
					console.log("hello", error);
					handleAxiosError(error as AxiosError);
				},
			}
		);
	};

	const style = {
		borderRadius: "16px",
		height: 48,
		width: "100%",
		border: "1px solid #ccc",
		outline: "none",
		paddingLeft: "16px",
		marginTop: "4px",
	};

	const labelStyle = {
		color: "#75859E",
		textAlign: "left",
		display: "block",
	};
	return (
		<GradientBackground style={{ height: isMobile ? "30%" : "75%" }}>
			<Card
				style={{
					width: isMobile ? "85%" : "40%",
					marginTop: isMobile ? "15%" : "5%",
					padding: isMobile ? "20px" : "40px",
					height: "fit-content",
				}}
			>
				<MSText fontSize="36px" fontWeight="200">
					{text.register}
				</MSText>
				<MSText
					fontSize="14px"
					color="#75859E"
					style={{
						marginTop: "6px",
						paddingTop: "6px",
						paddingBottom: "12px",
					}}
				>
					{text.registerSubtitle}
				</MSText>

				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				>
					{({ isValid, dirty }) => (
						<StyledForm>
							<FormItem
								label={text.username}
								id="name"
								name="name"
								style={style}
								labelStyle={labelStyle as React.CSSProperties}
							/>

							<FormItem
								label={text.email}
								id="email"
								name="email"
								style={style}
								labelStyle={labelStyle as React.CSSProperties}
							/>

							<Row>
								<HalfWidth>
									<FormItem
										label={text.password}
										id="password"
										name="password"
										style={style}
										labelStyle={labelStyle as React.CSSProperties}
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
								</HalfWidth>

								<HalfWidth>
									<FormItem
										label={text.confirmPassword}
										id="confirmPassword"
										name="confirmPassword"
										style={style}
										labelStyle={labelStyle as React.CSSProperties}
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
								</HalfWidth>
							</Row>
							<FormItem
								label={text.phoneNumber}
								id="phone"
								name="phone"
								style={style}
								labelStyle={labelStyle as React.CSSProperties}
							/>
							<StyledButton
								type="submit"
								disabled={!(isValid && dirty)}
								style={{
									backgroundColor: !(isValid && dirty)
										? colors.gray
										: colors.buttonGreenBackground,
									cursor: !(isValid && dirty) ? "not-allowed" : "pointer",
									opacity: !(isValid && dirty) ? 0.6 : 1,
								}}
							>
								{text.register}
							</StyledButton>
						</StyledForm>
					)}
				</Formik>

				<LoginText>
					{text.alreadyHaveAnAccount}{" "}
					<LoginLink href="/login">{text.login}</LoginLink>
				</LoginText>
			</Card>
		</GradientBackground>
	);
};

export default RegisterForm;
