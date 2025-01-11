import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useCustomBreakpoint from "@/helpers/screenSizes";
import { Apple, Google } from "@/assets/icons";
import {
	GradientBackground,
	PageContainer,
	Card,
	Form,
	Row,
	HalfWidth,
	StyledButton,
	Divider,
	LoginText,
	LoginLink,
	SocialButtons,
	SocialButton,
} from "./Register.style";
import MSText from "@/components/MSText";
import { Formik } from "formik";
import FormItem from "@/components/FormItem";
import { colors } from "@/constants/theme";
import { useRegister } from "@/hooks/authHooks";
import { useAuthStore } from "@/store";
import { User } from "@/types/authenticationTypes";
import { error } from "console";
import useSnackbarError from "@/hooks/errorHooks";
import { AxiosError } from "axios";

interface RegisterFormInputs {
	name: string;
	email: string;
	phone: string;
	confirmPassword: string;
	password: string;
}

const RegisterForm: React.FC = () => {
	const { isMobile } = useCustomBreakpoint();
	const { mutate: registerSubmit } = useRegister();
	const { register: storeRegister } = useAuthStore();
	const { handleAxiosError } = useSnackbarError();

	const validationSchema = yup.object({
		name: yup.string().required("Name is required"),
		email: yup.string().email("Invalid email").required("Email is required"),
		phone: yup
			.string()
			.matches(/^[+0-9]{10,15}$/, "Phone number is invalid")
			.required("Phone is required"),
		password: yup
			.string()
			.min(8, "Password must be at least 8 characters")
			.required("Password is required"),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password")], "Passwords must match")
			.required("Confirm Password is required"),
	});

	const initialValues: RegisterFormInputs = {
		name: "",
		email: "",
		phone: "",
		password: "",
		confirmPassword: "",
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
				},
				onError: (error) => {
					console.log("hello", error);
					handleAxiosError(error as AxiosError);
				},
			}
		);
	};

	return (
		<PageContainer>
			<GradientBackground style={{ height: isMobile ? "30%" : "75%" }}>
				<Card
					style={{
						width: isMobile ? "85%" : "40%",
						marginTop: isMobile ? "15%" : "5%",
						padding: isMobile ? "20px" : "40px",
					}}
				>
					<MSText fontSize="36px" fontWeight="200">
						Register
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
						Please enter details to continue
					</MSText>

					<Formik
						initialValues={initialValues}
						onSubmit={onSubmit}
						validationSchema={validationSchema}
					>
						<Form>
							<FormItem
								label="Username"
								id="name"
								name="name"
								style={style}
								labelStyle={labelStyle as React.CSSProperties}
							/>

							<FormItem
								label="Email"
								id="email"
								name="email"
								style={style}
								labelStyle={labelStyle as React.CSSProperties}
							/>

							<Row>
								<HalfWidth>
									<FormItem
										label="Password"
										id="password"
										name="password"
										style={style}
										labelStyle={labelStyle as React.CSSProperties}
									/>
								</HalfWidth>

								<HalfWidth>
									<FormItem
										label="Confirm Password"
										id="confirmPassword"
										name="confirmPassword"
										style={style}
										labelStyle={labelStyle as React.CSSProperties}
									/>
								</HalfWidth>
							</Row>
							<FormItem
								label="Phone Number"
								id="phone"
								name="phone"
								style={style}
								labelStyle={labelStyle as React.CSSProperties}
							/>  
							<StyledButton type="submit">Register</StyledButton>
						</Form>
						
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
						Already have an account? <LoginLink href="/login">Login</LoginLink>
					</LoginText>
				</Card>
			</GradientBackground>
		</PageContainer>
	);
};

export default RegisterForm;
