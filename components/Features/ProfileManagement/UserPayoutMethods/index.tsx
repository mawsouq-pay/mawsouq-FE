import MSText from "@/components/Shared/MSText";
import { colors } from "@/constants/theme";
import React from "react";
import {
	FlexRow,
	PayoutCard,
	PayoutDetailsWrapper,
} from "./UserPayoutMethods.style";
import MSButton from "@/components/Shared/MSButton";
import MSModal from "@/components/Shared/MSModal";
import PayoutForm from "../../../Shared/MSPayoutForm";
import { useManagePayout } from "@/hooks/useManagePayout";
import { PayoutDetailsT } from "@/types/authenticationTypes";
import MSErrorAndLoadingWrapper from "@/components/Shared/MSErrorAndLoadingWrapper";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSPayoutModal from "@/components/Shared/MSPayoutForm/MSPayoutModal";

const UserPayoutMethods = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const {
		createUserPayoutMethod,
		isPending,
		payoutModalOpen,
		setPayoutModalOpen,
		userPayoutOptions,
		getUserPayoutOptionsLoading,
		getUserPayoutOptionsError,
	} = useManagePayout();

	return (
		<MSErrorAndLoadingWrapper
			isLoading={getUserPayoutOptionsLoading}
			displayErrorReason={true}
			error={getUserPayoutOptionsError}
		>
			<FlexRow>
				<MSText
					fontSize="18px"
					mobileFontSize="16px"
					fontWeight="bold"
					color={colors.black}
				>
					{text.yourPayoutMethods}
				</MSText>
				<MSButton
					title={text.addPayoutMethod}
					onClick={() => setPayoutModalOpen(true)}
				/>
			</FlexRow>
			<div style={{ marginTop: 25 }}>
				{userPayoutOptions && userPayoutOptions?.length > 0 ? (
					userPayoutOptions?.map((payout) => (
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
						</PayoutCard>
					))
				) : (
					<MSText fontSize="16px" color={colors.gray} style={{ marginTop: 10 }}>
						{text.noPayoutMethods}
					</MSText>
				)}
			</div>

			<MSPayoutModal
				payoutModalOpen={payoutModalOpen}
				onCancel={() => {
					setPayoutModalOpen(false);
				}}
				onSubmit={createUserPayoutMethod}
				isPending={isPending}
			/>
		</MSErrorAndLoadingWrapper>
	);
};

export default UserPayoutMethods;
