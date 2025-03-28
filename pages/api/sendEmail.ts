import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { WelcomeEmail } from "../../email_templates/first_email";
import { error } from "console";
import { ResetPasswordEmail } from "@/email_templates/reset_password";
import SellerPaidNotificationEmail from "@/email_templates/SellerPaidNotificationEmail";
import disputeNotificationEmail from "@/email_templates/disputeNotificationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method Not Allowed" });
	}
	try {
		const { to, subject, templateName, templateProps } = req.body;

		const data = await resend.emails.send({
			from: "onboarding@mawsouq-pay.com",
			to: to,
			subject,
			react:
				templateName === "ResetPasswordEmail"
					? ResetPasswordEmail(templateProps)
					: templateName === "SellerPaidEmail"
						? SellerPaidNotificationEmail(templateProps)
						: templateName === "disputeNotificationEmail"
							? disputeNotificationEmail(templateProps)
							: WelcomeEmail({ firstName: "John" }),
		});
		if (data?.error) {
			throw new Error();
		}
		console.log("Email sent successfully:", data);

		return res.status(200).json({ message: "Email sent successfully", data });
	} catch (error: any) {
		console.error("Email sending error:", error);
		return res
			.status(500)
			.json({ error: error.message || "Internal Server Error" });
	}
}
