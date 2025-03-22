import React, { useState } from "react";
import MSModal from "@/components/Shared/MSModal";
import MSText from "@/components/Shared/MSText";
import MSTextField from "@/components/Shared/MSTextField";
import { useResetPasswordHook } from "@/hooks/useResetPassword";
import { textTr } from "@/constants/locales";
import { useLocaleStore } from "@/store";
import { colors } from "@/constants/theme";

const ResetPasswordButton = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const {
		handleRequestResetPasswordEmail,
		isResetEmailPending,
		isModalOpen,
		setIsModalOpen,
		email,
		setEmail,
	} = useResetPasswordHook();

	const [error, setError] = useState("");

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleConfirm = () => {
		if (!validateEmail(email)) {
			setError(text.invalidEmail);
			return;
		}
		handleRequestResetPasswordEmail(email);
		setError("");
	};

	return (
		<>
			<div onClick={() => setIsModalOpen(true)}>
				<MSText
					fontSize="14px"
					color={colors.green}
					style={{
						cursor: "pointer",
						textDecoration: "underline",
						marginTop: 10,
					}}
				>
					{text.forgotPassword}
				</MSText>
			</div>

			<MSModal
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				showActions={true}
				title={text.resetPassword}
				onConfirm={handleConfirm}
				confirmButtonProps={{ loading: isResetEmailPending }}
			>
				<MSText fontSize="14px" style={{ marginBottom: 10 }}>
					{text.enterEmailToResetPassword}
				</MSText>

				<MSTextField
					value={email}
					onChange={(e: any) => setEmail(e.target.value)}
					placeholder={text.emailPlaceHolder}
					error={!!error}
					helperText={error}
				/>
			</MSModal>
		</>
	);
};

export default ResetPasswordButton;
