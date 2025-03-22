export const sendEmail = async (
	to: string[],
	subject: string,
	templateName: string,
	templateProps: any
) => {
	try {
		const response = await fetch("/api/sendEmail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ to, subject, templateName, templateProps }),
		});

		const result = await response.json();

		if (!response.ok) {
			console.log("a");
			throw new Error(result.error || "Failed to send email");
		}

		return result;
	} catch (error) {
		console.error("Error sending email:", error);
		throw error;
	}
};
