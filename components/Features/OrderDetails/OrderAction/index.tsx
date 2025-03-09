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

const OrderAction = (props: OrderActionProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const { isFetcherSeller, orderStatus, orderId, setIsDisputeFormOpen } = props;
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
	} = useOrderActions(
		orderId,
		isFetcherSeller,
		orderStatus,
		setIsDisputeFormOpen
	);

	return (
		<MainWrapper>
			<MSText
				fontSize="18px"
				mobileFontSize="16px"
				fontWeight="700"
				color={colors.black}
				style={{
					marginBottom: 10,
					borderBottom: `3px solid ${colors.green}`,
					width: "120px",
				}}
			>
				{text.orderStatus}
			</MSText>
			<MSText
				fontSize="14px"
				mobileFontSize="13px"
				fontWeight="700"
				color={colors.darkGray}
			>
				{" "}
				{orderStatusText}
			</MSText>
			<MessageDiv>
				<MSText
					fontSize="16px"
					mobileFontSize="14px"
					color={colors.black}
					fontWeight="500"
				>
					{text[message]}
				</MSText>
			</MessageDiv>

			{actions.length > 0 && (
				<FlexRow>
					{actions.map((action, index) => (
						<MSButton
							key={index}
							title={action.label}
							onClick={() => handleOpenConfirmationModal(action.handler)}
							loading={loadingAndDisable}
						/>
					))}
				</FlexRow>
			)}

			<MSModal
				open={isConfirmModalOpen}
				onClose={() => handleCloseConfirmationModal()}
				title={text[popupStatusMessage.title]}
				onConfirm={handleConfirmAction}
			>
				<div style={{ padding: "10px 0px" }}>
					<MSText color={colors.black}>
						{text[popupStatusMessage.message]}
					</MSText>
				</div>
			</MSModal>
		</MainWrapper>
	);
};

export default OrderAction;
