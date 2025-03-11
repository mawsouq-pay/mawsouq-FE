import React from "react";
import MSModal from "../MSModal";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import MSText from "../MSText";

const MSDeletePayoutModal = ({
	isDeletePayoutModalOpen,
	onConfirm,
	onCancel,
	isLoading,
}: {
	isDeletePayoutModalOpen: boolean;
	onConfirm: () => void;
	onCancel: () => void;
	isLoading: boolean;
}) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	return (
		<MSModal
			open={isDeletePayoutModalOpen}
			onClose={onCancel}
			showActions={true}
			title={text.deletePayoutMethod}
			onConfirm={onConfirm}
			confirmButtonProps={{ loading: isLoading }}
		>
			<MSText>{text.deletePayoutDescription}</MSText>
		</MSModal>
	);
};

export default MSDeletePayoutModal;
