import React from "react";
import MSText from "@/components/Shared/MSText";
import { colors } from "@/constants/theme";
import { FlexRow } from "./UserPayoutMethods.style";
import MSButton from "@/components/Shared/MSButton";
import MSErrorAndLoadingWrapper from "@/components/Shared/MSErrorAndLoadingWrapper";
import { useManagePayout } from "@/hooks/useManagePayout";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSPayoutModal from "@/components/Shared/MSPayoutForm/MSPayoutModal";
import MSPayoutCard from "@/components/Shared/MSPayoutCard";
import MSDeletePayoutModal from "@/components/Shared/MSDeletePayoutModal";

const UserPayoutMethods = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const {
		createUserPayoutMethod,
		isPending,
		payoutModalOpen,
		setPayoutModalOpen,
		onClosePayoutModal,
		userPayoutOptions,
		getUserPayoutOptionsLoading,
		getUserPayoutOptionsError,
		onDeletePress,
		isDeleteModalOpen,
		onCancelDeleteModal,
		onSubmitDeleteModal,
		isDeletePayoutOptionPending,
		onEditPress,
		editInitialValues,
		isEditPayoutPending,
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
						<MSPayoutCard
							key={payout.method}
							payout={payout}
							onEdit={onEditPress}
							onDelete={onDeletePress}
						/>
					))
				) : (
					<MSText fontSize="16px" color={colors.gray} style={{ marginTop: 10 }}>
						{text.noPayoutMethods}
					</MSText>
				)}
			</div>

			<MSPayoutModal
				payoutModalOpen={payoutModalOpen}
				onCancel={onClosePayoutModal}
				onSubmit={createUserPayoutMethod}
				isPending={isPending || isEditPayoutPending}
				initialValues={editInitialValues}
			/>
			<MSDeletePayoutModal
				isDeletePayoutModalOpen={isDeleteModalOpen}
				onCancel={onCancelDeleteModal}
				onConfirm={onSubmitDeleteModal}
				isLoading={isDeletePayoutOptionPending}
			/>
		</MSErrorAndLoadingWrapper>
	);
};

export default UserPayoutMethods;
