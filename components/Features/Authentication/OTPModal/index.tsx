import React, { useState } from "react";
import MSModal from "@/components/Shared/MSModal";
import { ModalContent, OTPWrapper, SubmitButton } from "./OTPModal.styles";
import MSText from "@/components/Shared/MSText";
import { OTPInput } from "./OTPInput";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";

const OTPModal = ({
	open,
	onClose,
	onSubmit,
	isPending,
}: {
	open: boolean;
	onClose: () => void;
	onSubmit: (otp: string) => void;
	isPending: boolean;
}) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const [otp, setOtp] = useState("");

	const handleConfirm = () => {
		console.log("Entered OTP:", otp);
		onSubmit(otp);
	};

	return (
		<MSModal
			open={open}
			onClose={onClose}
			onConfirm={handleConfirm}
			title={text.pleaseEnterOtp}
			confirmButtonProps={{ loading: isPending }}
			cancelButtonProps={{ disabled: isPending }}
		>
			<ModalContent>
				<OTPWrapper>
					<OTPInput length={4} value={otp} onChange={setOtp} />
				</OTPWrapper>
			</ModalContent>
		</MSModal>
	);
};

export default OTPModal;
