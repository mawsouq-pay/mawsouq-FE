import React from "react";
import MSModal from "../MSModal";
import { PayoutDetailsT } from "@/types/authenticationTypes";
import MSText from "../MSText";
import MSPayoutForm from ".";
import { colors } from "@/constants/theme";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";

const MSPayoutModal = ({
	payoutModalOpen,
	onSubmit,
	onCancel,
	isPending,
	initialValues,
}: {
	payoutModalOpen: boolean;
	onSubmit: (d: PayoutDetailsT) => void;
	onCancel: () => void;
	isPending: boolean;
	initialValues?: PayoutDetailsT | null;
}) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	return (
		<MSModal
			open={payoutModalOpen}
			showActions={false}
			title={text.payoutDetails}
		>
			<MSText fontSize="16px" color={colors.black} style={{ marginBottom: 15 }}>
				{text.enterYourPayoutDetails}
			</MSText>
			<MSPayoutForm
				onCancel={() => onCancel()}
				onSubmit={(details: PayoutDetailsT) => onSubmit(details)}
				isPending={isPending}
				initialValues={initialValues || undefined}
			/>
		</MSModal>
	);
};

export default MSPayoutModal;
