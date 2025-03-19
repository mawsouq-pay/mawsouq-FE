import React from "react";
import MSModal from "../MSModal";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import MSText from "../MSText";

const MSMobileSettings = ({
	isMobileSettingsModalOpen,
	onConfirm,
	onCancel,
	isLoading,
}: {
	isMobileSettingsModalOpen: boolean;
	onConfirm: () => void;
	onCancel: () => void;
	isLoading: boolean;
}) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	return (
		<MSModal
			open={isMobileSettingsModalOpen}
			onClose={onCancel}
			showActions={true}
			title={text.deletePayoutMethod}
			onConfirm={onConfirm}
			confirmButtonProps={{ loading: isLoading }}
		>
			<MSText>hh</MSText>
		</MSModal>
	);
};

export default MSMobileSettings;
