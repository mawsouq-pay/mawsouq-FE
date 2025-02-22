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
	setPayoutModalOpen,
	onSubmit,
	onCancel,
	isPending,
}: {
	payoutModalOpen: boolean;
	setPayoutModalOpen: (b: boolean) => void;
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
			<div style={{ maxHeight: "80vh", overflowY: "auto", padding: "0 10px" }}>
				<MSText
					fontSize="18px"
					color={colors.gray}
					style={{ marginBottom: 15 }}
				>
					{text.enterYourPayoutDetails}
				</MSText>
				<MSPayoutForm
					onCancel={onCancel}
					onSubmit={(details: PayoutDetailsT) => onSubmit(details)}
					isPending={isPending}
				/>
			</div>{" "}
		</MSModal>
	);
};

export default MSPayoutModal;
