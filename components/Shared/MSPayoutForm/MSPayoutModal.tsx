import React from "react";
import MSModal from "../MSModal";
import { PayoutDetailsT } from "@/types/authenticationTypes";
import MSText from "../MSText";
import MSPayoutForm from ".";
import { colors } from "@/constants/theme";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { useFormikContext } from "formik";

const MSPayoutModal = ({
	payoutModalOpen,
	onSubmit,
	onCancel,
	isPending,
}: {
	payoutModalOpen: boolean;
	onSubmit: (d: PayoutDetailsT) => void;
	onCancel: () => void;
	isPending: boolean;
}) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	return (
		<MSModal
			open={payoutModalOpen}
			onClose={onCancel}
			showActions={false}
			title={text.payoutDetails}
		>
			<MSText fontSize="16px" color={colors.black} style={{ marginBottom: 15 }}>
				{text.enterYourPayoutDetails}
			</MSText>
			<MSPayoutForm
				onCancel={onCancel}
				onSubmit={(details: PayoutDetailsT) => onSubmit(details)}
				isPending={isPending}
			/>
		</MSModal>
	);
};

export default MSPayoutModal;
