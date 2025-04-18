import React from "react";
import { FlexRow, MainWrapper, MessageDiv } from "./OrderAction.styles";
import MSText from "@/components/Shared/MSText";
import { colors } from "@/constants/theme";
import { OrderActionProps } from "./types";
import MSModal from "@/components/Shared/MSModal";
import MSButton from "@/components/Shared/MSButton";
import { useOrderActions } from "@/hooks/useOrderActions";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { OrderStatusEnum } from "@/constants";
import DisputeFormModal from "../DisputeFormModal";
import RateOrderModal from "../RateOrderModal";

const OrderAction = ({
	isFetcherSeller,
	orderStatus,
	orderId,
}: OrderActionProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const {
		popupStatusMessage,
		message,
		isConfirmModalOpen,
		loadingAndDisable,
		orderStatusText,
		handleOpenConfirmationModal,
		handleConfirmAction,
		handleCloseConfirmationModal,
		isDisputeFormOpen,
		setIsDisputeFormOpen,
		submitDispute,
		isRateModalOpen,
		submitRateModal,
		cancelRatingModal,
		isRateOrderPending,
		handleReleasePayment,
		handleMarkAsOutForDelivery,
		handleOpenDisputeForm,
		sellerReleasePending,
		updateOrderPending,
	} = useOrderActions(orderId, isFetcherSeller, orderStatus);

	return (
		<MainWrapper>
			<div style={{ flexDirection: "column" }}>
				<MSText
					fontSize="18px"
					fontWeight="500"
					color={colors.black}
					style={{ alignSelf: "flex-start" }}
				>
					{orderStatusText}
				</MSText>

				<MessageDiv>
					<MSText fontSize="18px" fontWeight="600" color={colors.black}>
						{text[message]}
					</MSText>
				</MessageDiv>
			</div>

			<FlexRow>
				{(orderStatus === OrderStatusEnum.IN_PROGRESS ||
					orderStatus === OrderStatusEnum.IN_TRANSIT) &&
					!isFetcherSeller && (
						<>
							<MSButton
								title={text.CONFIRM_RELEASE}
								onClick={() =>
									handleOpenConfirmationModal(
										handleReleasePayment,
										OrderStatusEnum.COMPLETED
									)
								}
								loading={sellerReleasePending}
							/>
							<MSButton
								title={text.SUBMIT_COMPLAINT}
								onClick={handleOpenDisputeForm}
								style={{ backgroundColor: colors.red }}
							/>
						</>
					)}

				{orderStatus === OrderStatusEnum.IN_PROGRESS && isFetcherSeller && (
					<MSButton
						title={text.MARK_AS_OUT_FOR_DELIVERY}
						onClick={() =>
							handleOpenConfirmationModal(
								handleMarkAsOutForDelivery,
								OrderStatusEnum.IN_TRANSIT
							)
						}
						loading={updateOrderPending}
					/>
				)}
			</FlexRow>

			<MSModal
				open={isConfirmModalOpen}
				onClose={handleCloseConfirmationModal}
				title={text[popupStatusMessage?.title as keyof typeof text]}
				onConfirm={handleConfirmAction}
			>
				<div style={{ padding: "10px 0px" }}>
					<MSText color={colors.black}>
						{text[popupStatusMessage?.message as keyof typeof text]}
					</MSText>
				</div>
			</MSModal>

			<DisputeFormModal
				open={isDisputeFormOpen}
				setOpen={setIsDisputeFormOpen}
				onSubmit={submitDispute}
			/>

			<RateOrderModal
				open={isRateModalOpen}
				onCancel={cancelRatingModal}
				onSubmit={submitRateModal}
				isRateOrderPending={isRateOrderPending}
			/>
		</MainWrapper>
	);
};

export default OrderAction;
