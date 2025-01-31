import React, { useState } from "react";
import { TextField, Alert } from "@mui/material";
import axios from "axios";
import Config from "@/Config";
import MSButton from "../MSButton";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSText from "../MSText";
import { useNotification } from "@/store/SnackBarStore";

const ContactForm = () => {
	const { locale } = useLocaleStore();
	const { showErrorNotification } = useNotification();

	const text = textTr(locale);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
		subject: "New Contact Form Submission",
		access_key: Config.FORM_PUBLIC_KEY,
	});

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		setSuccess(null);

		try {
			const response = await axios.post(
				"https://api.web3forms.com/submit",
				formData
			);
			if (response.data.success) {
				setSuccess(text.messageSent);
				setFormData({
					name: "",
					email: "",
					message: "",
					subject: "New Contact Form Submission",
					access_key: Config.FORM_PUBLIC_KEY,
				});
			} else {
				setError(text.messageSent);
			}
		} catch (err) {
			showErrorNotification(text.genericErrorMessage);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}
		>
			<MSText fontSize="24px">{text.contactUs}</MSText>

			{success && <Alert severity="success">{success}</Alert>}
			{error && <Alert severity="error">{error}</Alert>}

			<TextField
				fullWidth
				label={text.fullName}
				name="name"
				value={formData.name}
				onChange={handleChange}
				required
				margin="normal"
			/>
			<TextField
				fullWidth
				label={text.email}
				name="email"
				type="email"
				value={formData.email}
				onChange={handleChange}
				required
				margin="normal"
			/>
			<TextField
				fullWidth
				label={text.description}
				name="message"
				multiline
				rows={4}
				value={formData.message}
				onChange={handleChange}
				required
				margin="normal"
			/>

			<MSButton
				title={text.sendMessage}
				type="submit"
				loading={loading}
				style={{ marginTop: "10px" }}
			/>
		</form>
	);
};

export default ContactForm;
