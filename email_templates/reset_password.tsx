import {
	Html,
	Head,
	Preview,
	Body,
	Container,
	Heading,
	Text,
	Button,
} from "@react-email/components";
import React from "react";

interface ResetPasswordEmailProps {
	firstName: string;
	resetLink: string;
}

export const ResetPasswordEmail = ({
	firstName,
	resetLink,
}: ResetPasswordEmailProps): JSX.Element => {
	return (
		<Html>
			<Head />
			<Preview>Password reset instructions</Preview>
			<Body style={main}>
				<Container style={container}>
					<Heading as="h1" style={heading}>
						Reset Your Password
					</Heading>

					<Text style={paragraph}>Hi {firstName},</Text>

					<Text style={paragraph}>
						We received a request to reset your password. Click the button below
						to choose a new one.
					</Text>

					<Button href={resetLink} style={button}>
						Reset Password
					</Button>

					<Text style={footerText}>
						If you didn’t request this, you can ignore this email.
					</Text>
				</Container>
			</Body>
		</Html>
	);
};

export default ResetPasswordEmail;

const main = {
	fontFamily: "Arial, sans-serif",
	backgroundColor: "#f7f7f7",
	padding: "20px",
};

const container = {
	maxWidth: "600px",
	margin: "0 auto",
	backgroundColor: "#ffffff",
	padding: "24px",
	borderRadius: "8px",
};

const heading = {
	color: "#01796f",
	marginBottom: "10px",
};

const paragraph = {
	fontSize: "16px",
	margin: "12px 0",
};

const button = {
	display: "inline-block",
	padding: "12px 20px",
	marginTop: "10px",
	backgroundColor: "#01796f",
	color: "#ffffff",
	textDecoration: "none",
	borderRadius: "5px",
	fontSize: "16px",
	fontWeight: "bold",
};

const footerText = {
	fontSize: "14px",
	marginTop: "20px",
	color: "#777",
};
