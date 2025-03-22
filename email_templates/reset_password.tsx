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
		<div
			style={{
				fontFamily: "Arial, sans-serif",
				color: "#333",
				padding: "20px",
			}}
		>
			<h1 style={{ color: "#01796f" }}>Reset Your Password</h1>
			<p>Hi {firstName},</p>
			<p>
				We received a request to reset your password. Click the button below to
				choose a new one.
			</p>
			<a
				href={resetLink}
				style={{
					display: "inline-block",
					padding: "12px 20px",
					marginTop: "10px",
					backgroundColor: "#01796f",
					color: "#ffffff",
					textDecoration: "none",
					borderRadius: "5px",
					fontSize: "16px",
				}}
			>
				Reset Password
			</a>
			<p style={{ marginTop: "20px", fontSize: "14px", color: "#777" }}>
				If you didn’t request this, you can ignore this email.
			</p>
		</div>
	);
};
