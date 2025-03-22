import React from "react";

interface WelcomeEmailProps {
	firstName: string;
}

export const WelcomeEmail = ({ firstName }: WelcomeEmailProps): JSX.Element => {
	return (
		<div>
			<h1>Welcome, {firstName}!</h1>
			<p>Thanks for joining us. We're excited to have you onboard.</p>
		</div>
	);
};
