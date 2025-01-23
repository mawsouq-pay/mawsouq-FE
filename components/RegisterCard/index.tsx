import React, { useState } from "react";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { AxiosError } from "axios";

import {
	Card,
	StyledForm,
	Row,
	HalfWidth,
	StyledButton,
	LoginText,
	LoginLink,
} from "./RegisterCard.styles";
import MSText from "@/components/MSText";
import FormItem from "@/components/FormItem";
import { useRegister } from "@/hooks/authHooks";
import { useAuthStore } from "@/store";
import { useNotification } from "@/store/SnackBarStore";
import { User } from "@/types/authenticationTypes";
import { clientRoutes } from "@/routes";
import { Hide, Show } from "@/assets/icons/index";
import { colors } from "@/constants/theme";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import useCustomBreakpoint from "@/helpers/screenSizes";
import {
	RegisterFormInput,
	registerInitialValues,
	registerValidationSchema,
} from "./types";

const RegisterCard = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { isMobile } = useCustomBreakpoint();

	const { mutate: registerSubmit } = useRegister();
	const { register: storeRegister } = useAuthStore();
	const { showAxiosErrorNotification } = useNotification();
	const router = useRouter();

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const togglePasswordVisibility = () => setShowPassword(!showPassword);
	const toggleConfirmPasswordVisibility = () =>
		setShowConfirmPassword(!showConfirmPassword);

	const onSubmit = (values: RegisterFormInput) => {
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

					storeRegister({ accessToken, refreshToken }, user);
					router.push({
						pathname: clientRoutes.homePage,
					});
				},
				onError: (error) => {
					showAxiosErrorNotification(error as AxiosError);
				},
			}
		);
	};
	const style = {
		borderRadius: "16px",
		height: 48,
		outline: "none",
		paddingLeft: "16px",
		marginTop: "4px",
	};

	return (
		<Card
			style={{
				width: isMobile ? "85%" : "40%",
				marginTop: isMobile ? "15%" : "5%",
				padding: isMobile ? "20px" : "40px",
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
				initialValues={registerInitialValues}
				onSubmit={onSubmit}
				validationSchema={registerValidationSchema}
			>
				{({ isValid, dirty }) => (
					<StyledForm>
						<FormItem
							label={text.fullName}
							id="name"
							name="name"
							style={style}
						/>

						<FormItem
							label={text.email}
							id="email"
							name="email"
							style={style}
						/>

						<Row>
							<HalfWidth>
								<FormItem
									label={text.password}
									id="password"
									name="password"
									style={style}
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

			{/* <Divider>OR</Divider>
        <SocialButtons>
            <SocialButton>
                <Google />
                <MSText
                    fontSize={"16px"}
                    mobileFontSize={"14px"}
                    style={{
                        color: colors.LabelValue,
                        textAlign: "left",
                    }}
                >
                    Continue with Google
                </MSText>
            </SocialButton>
            <SocialButton>
                <Apple />
                <MSText
                    fontSize={"16px"}
                    mobileFontSize={"14px"}
                    style={{
                        color: colors.LabelValue,
                        textAlign: "left",
                    }}
                >
                    Continue with Apple
                </MSText>
            </SocialButton>
        </SocialButtons>
*/}
			<LoginText>
				{text.alreadyHaveAnAccount}{" "}
				<LoginLink href="/login">{text.login}</LoginLink>
			</LoginText>
		</Card>
	);
};

export default RegisterCard;
