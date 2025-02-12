import React from "react";
import { MainWrapper, MessageDiv } from "./OrderAction.styles";
import MSText from "../../../Shared/MSText";
import { colors } from "@/constants/theme";
import { OrderActionProps } from "./types";

import MSModal from "../../../Shared/MSModal";
import MSButton from "../../../Shared/MSButton";
import { useOrderActions } from "@/hooks/useOrderActions";

const OrderAction = (props: OrderActionProps) => {
	const { isFetcherSeller, orderStatus, orderId } = props;
	const {
		statusMessage,
		orderStatusText,
		message,
		buttonCta,
		isConfirmModalOpen,
		setIsConfirmModalOpen,
		handleCtaClick,
		loadingAndDisable,
	} = useOrderActions(orderId, isFetcherSeller, orderStatus);
	return (
		<MainWrapper>
			<MSText
				fontSize="20px"
				mobileFontSize="16px"
				fontWeight="700"
				color={colors.darkGray}
			>
				{" "}
				{orderStatusText}
			</MSText>
			<MessageDiv>
				<MSText fontSize="16px" color={colors.black} fontWeight="500">
					{message}
				</MSText>
			</MessageDiv>

			{buttonCta && (
				<MSButton
					onClick={() => setIsConfirmModalOpen(true)}
					title={buttonCta}
					loading={loadingAndDisable}
					disabled={loadingAndDisable}
					style={{
						height: 40,
						width: "fit-content",
					}}
				/>
			)}
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
