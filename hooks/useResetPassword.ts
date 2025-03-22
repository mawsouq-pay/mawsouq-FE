import { useNotification } from "@/store/SnackBarStore";
import { AxiosError } from "axios";
import { useResetPassword, useUpdatePassword } from "./authHooks";
import { clientRoutes } from "@/routes";
import { sendEmail } from "@/helpers/sendEmail";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import { useState } from "react";
import router from "next/router";

const NEXT_PUBLIC_FE_BASE_URL = process.env.NEXT_PUBLIC_FE_BASE_URL;

export const useResetPasswordHook = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [email, setEmail] = useState("");

	const { mutate: resetPassword, isPending: isResetEmailPending } =
		useResetPassword();
	const { mutate: updatePassword, isPending: isUpdatePasswordPending } =
		useUpdatePassword();
	const {
		showAxiosErrorNotification,
		showErrorNotification,
		showSuccessNotification,
	} = useNotification();

	const handleRequestResetPasswordEmail = (email: string) => {
		resetPassword(
			{ email },
			{
				onSuccess: async (response) => {
					try {
						const token = response.data.resetPasswordToken;
						const resetLink = `${NEXT_PUBLIC_FE_BASE_URL}${clientRoutes.resetPassword}?token=${token}`;
						sendResetPasswordEmail(email, resetLink, response.data.name);
					} catch (error) {
						showAxiosErrorNotification(error as AxiosError);
					}
				},
				onError: (error) => {
					showAxiosErrorNotification(error as AxiosError);
				},
			}
		);
	};
	const sendResetPasswordEmail = async (
		email: string,
		resetLink: string,
		name: string
	) => {
		try {
			await sendEmail([email], text.resetPassword, "ResetPasswordEmail", {
				firstName: name,
				resetLink,
			});

			showSuccessNotification("Reset password email sent successfully.");
		} catch (error) {
			console.error("Error sending reset password email:", error);
			showErrorNotification(
				"Failed to send reset password email. Please try again."
			);
		}
		setIsModalOpen(false);
		setEmail("");
	};

	const handleResetPassword = (newPassword: string, token: string) => {
		updatePassword(
			{
				newPassword: newPassword,
				token: token,
			},
			{
				onSuccess: () => {
					showSuccessNotification(text.passwordResetSuccess);
					router.push(clientRoutes.login);
				},
				onError(error) {
					showAxiosErrorNotification(error as AxiosError);
				},
			}
		);
	};
	return {
		handleRequestResetPasswordEmail,
		isResetEmailPending: isResetEmailPending,
		isModalOpen,
		setIsModalOpen,
		email,
		setEmail,
		handleResetPassword,
		isUpdatePasswordPending,
	};
};
