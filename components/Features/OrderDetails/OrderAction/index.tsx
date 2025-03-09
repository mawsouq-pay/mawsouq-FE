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
import { OrderStatusEnum } from "@/constants";

const OrderAction = (props: OrderActionProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const { isFetcherSeller, orderStatus, orderId, setIsDisputeFormOpen } = props;
	const {
		statusMessage,
		orderStatusText,
		message,
		buttonCta,
		isConfirmModalOpen,
		setIsConfirmModalOpen,
		handleCtaClick,
		loadingAndDisable,
		handleConfirmRelease,
		handleDispute,
		handleCaptureOrder,
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
				fontSize="16px"
				mobileFontSize="14px"
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
					{message}
				</MSText>
			</MessageDiv>

			{orderStatus === OrderStatusEnum.DELIVERED ? (
				<FlexRow>
					<MSButton
						title="Confirm Release"
						onClick={handleConfirmRelease}
						disabled={loadingAndDisable}
					/>
					<MSButton
						title="Submit Dispute"
						onClick={handleDispute}
						disabled={loadingAndDisable}
						style={{ backgroundColor: colors.red }}
					/>
				</FlexRow>
			) : buttonCta ? (
				<MSButton
					title={buttonCta}
					onClick={() => setIsConfirmModalOpen(true)}
					loading={loadingAndDisable}
					disabled={loadingAndDisable}
					style={{
						height: 40,
						width: "fit-content",
					}}
				/>
			) : null}

			<MSModal
				open={isConfirmModalOpen}
				onClose={() => setIsConfirmModalOpen(false)}
				title={statusMessage.title}
				onConfirm={handleCtaClick}
			>
				<div style={{ padding: "10px 0px" }}>
					<MSText color={colors.black}>{statusMessage.message}</MSText>
				</div>
			</MSModal>
		</MainWrapper>
	);
};

export default OrderAction;
