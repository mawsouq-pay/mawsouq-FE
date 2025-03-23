import React from "react";
import { FlexRow, MainWrapper, MessageDiv } from "./OrderAction.styles";
import MSText from "../../../Shared/MSText";
import { colors } from "@/constants/theme";
import { OrderActionProps } from "./types";
import MSModal from "../../../Shared/MSModal";
import MSButton from "../../../Shared/MSButton";
import { useOrderActions } from "@/hooks/useOrderActions";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { OrderActionCTAType, OrderActionT } from "@/constants";
import DisputeFormModal from "../DisputeFormModal";

const OrderAction = (props: OrderActionProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const { isFetcherSeller, orderStatus, orderId } = props;
	const {
		popupStatusMessage,
		message,
		isConfirmModalOpen,
		loadingAndDisable,
		actions,
		orderStatusText,
		handleOpenConfirmationModal,
		handleConfirmAction,
		handleCloseConfirmationModal,
		isDisputeFormOpen,
		setIsDisputeFormOpen,
		submitDispute,
	} = useOrderActions(orderId, isFetcherSeller, orderStatus);

	return (
		<MainWrapper>
			<div style={{ flexDirection: "column" }}>
				<MSText
					fontSize="18px"
					mobileFontSize="16px"
					fontWeight="600"
					color={colors.blue}
					style={{ alignSelf: "flex-start" }}
				>
					{" "}
					{orderStatusText}
				</MSText>
				<MessageDiv>
					<MSText
						fontSize="20px"
						mobileFontSize="18px"
						fontWeight="600"
						color={colors.blue}
					>
						{text[message]}
					</MSText>
				</MessageDiv>
			</div>

			{actions.length > 0 && (
				<FlexRow>
					{actions.map(
						(action: OrderActionT & { handler: () => void }, index) => (
							<MSButton
								key={index}
								title={text[action.label]}
								onClick={() => handleOpenConfirmationModal(action)}
								loading={loadingAndDisable}
								style={{
									backgroundColor:
										action.type === OrderActionCTAType.DANGER
											? colors.red
											: colors.blue,
								}}
							/>
						)
					)}
				</FlexRow>
			)}

			<MSModal
				open={isConfirmModalOpen}
				onClose={() => handleCloseConfirmationModal()}
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
		</MainWrapper>
	);
};

export default OrderAction;
