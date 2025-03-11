import React from "react";
import MSText from "@/components/Shared/MSText";
import MSButton from "@/components/Shared/MSButton";
import { colors } from "@/constants/theme";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { PayoutDetailsT } from "@/types/authenticationTypes";
import { PayoutCard, PayoutDetailsWrapper } from "./MSPayoutCard.styles";

interface MSPayoutCardProps {
	payout: PayoutDetailsT;
	onEdit: (id: string) => void;
	onDelete: (id: string) => void;
}

const MSPayoutCard = (props: MSPayoutCardProps) => {
	const { payout, onEdit, onDelete } = props;
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	return (
		<PayoutCard key={payout.method}>
			<MSText
				fontSize="22px"
				fontWeight="bold"
				color={colors.buttonGreenBackground}
			>
				{payout.method}
			</MSText>
			<PayoutDetailsWrapper>
				{payout.phoneNumber && (
					<MSText fontSize="16px" color={colors.black}>
						<strong>{text.phoneNumber}:</strong> {payout.phoneNumber}
					</MSText>
				)}
				{payout.fullName && (
					<MSText fontSize="16px" color={colors.black}>
						<strong>{text.fullName}</strong> {payout.fullName}
					</MSText>
				)}
				{payout.cardNumber && (
					<MSText fontSize="16px" color={colors.black}>
						<strong>{text.cardNumber}:</strong> {payout.cardNumber}
					</MSText>
				)}
				{payout.bankCode && (
					<MSText fontSize="16px" color={colors.black}>
						<strong>{text.bank}:</strong> {payout.bankCode}
					</MSText>
				)}
			</PayoutDetailsWrapper>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					marginTop: 20,
				}}
			>
				<MSButton
					title={text.edit}
					onClick={() => {
						onEdit(payout?._id ?? "");
					}}
				/>
				<MSButton
					title={text.delete}
					style={{ backgroundColor: colors.red }}
					fontColor={colors.white}
					onClick={() => {
						onDelete(payout?._id ?? "");
					}}
				/>
			</div>
		</PayoutCard>
	);
};

export default MSPayoutCard;
