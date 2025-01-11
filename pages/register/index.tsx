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

interface RegisterFormInputs {
	name: string;
	email: string;
	phone: string;
	confirmPassword: string;
	password: string;
}

const RegisterForm: React.FC = () => {
	const { isMobile } = useCustomBreakpoint();

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

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormInputs>({
		resolver: yupResolver(validationSchema),
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
		console.log("Form Data:", values);
	};

	return (
		<PageContainer>
			<GradientBackground style={{ height: isMobile ? "30%" : "90%" }}>
				<Card
					style={{
						width: isMobile ? "85%" : "40%",
						// marginTop: isMobile ? "600px" : "200px",
						padding: isMobile ? "20px" : "40px",
					}}
				>
					<MSText fontSize="36px" fontWeight="200">
						Register
					</MSText>
					<MSText fontSize="14px" color="#75859E" style={{ marginTop: "6px" }}>
						Please enter details to continue
					</MSText>

					<Formik initialValues={initialValues} onSubmit={onSubmit}>
						<Form>
							<FormItem
								label="Username"
								id="Username"
								name="username"
								style={style}
								labelStyle={labelStyle as React.CSSProperties}
							/>

							<FormItem
								label="Email"
								id="Email"
								name="email"
								style={style}
								labelStyle={labelStyle as React.CSSProperties}
							/>

							<Row>
								<HalfWidth>
									<FormItem
										label="Password"
										id="Password"
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
								id="phoneNumber"
								name="phoneNumber"
								style={style}
								labelStyle={labelStyle as React.CSSProperties}
							/>
						</Form>
					</Formik>

					<StyledButton type="submit">Register</StyledButton>

					<Divider>OR</Divider>
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

					<LoginText>
						Already have an account? <LoginLink href="/login">Login</LoginLink>
					</LoginText>
				</Card>
			</GradientBackground>
		</PageContainer>
	);
};

export default RegisterForm;
