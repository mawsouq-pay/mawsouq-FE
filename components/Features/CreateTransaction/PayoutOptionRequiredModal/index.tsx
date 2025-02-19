import React from "react";
import MSModal from "@/components/Shared/MSModal";
import MSText from "@/components/Shared/MSText";
import { clientRoutes } from "@/routes";
import { useRouter } from "next/router";
import { colors } from "@/constants/theme";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";

interface PayoutOptionRequiredModalProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const PayoutOptionRequiredModal = ({
	open,
	setOpen,
}: PayoutOptionRequiredModalProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const router = useRouter();

	const handleNavigateToProfile = () => {
		setOpen(false);
		router.push(clientRoutes.profilePage);
	};

	return (
		<MSModal
			open={open}
			onClose={() => {
				router.back();
			}}
			title={text.payoutRequired}
			confirmText={text.goToProfile}
			cancelText={text.cancel}
			onConfirm={handleNavigateToProfile}
		>
			<MSText fontSize="16px" color={colors.black} style={{ marginBottom: 15 }}>
				{text.payoutRequiredExplanation}
			</MSText>
		</MSModal>
	);
};

export default PayoutOptionRequiredModal;
