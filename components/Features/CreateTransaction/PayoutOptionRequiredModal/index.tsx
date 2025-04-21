import React from "react";
import MSModal from "@/components/Shared/MSModal";
import MSText from "@/components/Shared/MSText";
import { colors } from "@/constants/theme";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";

interface PayoutOptionRequiredModalProps {
	open: boolean;
	setOpen: (open: boolean) => void;
	onPayoutRequiredModalSubmit: () => void;
}

const PayoutOptionRequiredModal = ({
	open,
	setOpen,
	onPayoutRequiredModalSubmit,
}: PayoutOptionRequiredModalProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	return (
		<MSModal
			open={open}
			onClose={() => {
				//trackCancelPayoutPrompt();
				setOpen(false);
			}}
			title={text.payoutRequired}
			confirmText={text.addPayoutMethod}
			cancelText={text.cancel}
			onConfirm={onPayoutRequiredModalSubmit}
		>
			<MSText
				fontSize="18px"
				fontWeight="600"
				color={colors.black}
				style={{ marginBottom: 15 }}
			>
				{text.payoutRequiredExplanation}
			</MSText>
		</MSModal>
	);
};

export default PayoutOptionRequiredModal;
