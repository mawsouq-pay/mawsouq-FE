import { Resend } from "resend";
import Config from "@/Config";

const resend = new Resend(Config.EMAIL_API);

export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			console.log("here", req);
			const {
				from = "no-reply@mawsouq.com",
				to,
				subject = "Notification",
				reactComponent,
				emailData,
			} = req.body;

			if (!to) {
				return res.status(400).json({ error: "Recipient email is required." });
			}

			if (!reactComponent) {
				console.log("ehehehehehhhhhhh");
				return res.status(400).json({ error: "Email template is required." });
			}
			console.log(reactComponent);
			console.log(emailData);

			const result = await resend.emails.send({
				from,
				to,
				subject,
				react: reactComponent(emailData),
			});
			return res.status(200).json({ success: true, data: result });
		} catch (error) {
			console.error("Error sending email:", error);
			return res.status(500).json({ error: "Failed to send email." });
		}
	} else {
		res.setHeader("Allow", ["POST"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
