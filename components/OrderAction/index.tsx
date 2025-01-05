import React from "react";
import { MainWrapper, MessageDiv, StyledButton } from "./OrderAction.styles";
import MSText from "../MSText";
import { colors } from "@/constants/theme";
import { OrderActionProps } from "./types";
import { orderProgressBarData } from "@/constants";

const OrderAction = (props: OrderActionProps) => {
	const { isFetcherSeller, orderStatus } = props;
	const { messageForSeller, messageForBuyer, sellerCTA, buyerCTA } =
		orderProgressBarData[orderStatus];

	const message = isFetcherSeller ? messageForSeller : messageForBuyer;
	const buttonCta = isFetcherSeller ? sellerCTA : buyerCTA;
	return (
		<MainWrapper>
			<MSText fontSize={"16px"} mobileFontSize={"14px"} color={colors.gray}>
				Awaiting Delivery
			</MSText>
			<MessageDiv>
				<MSText fontSize={"16px"} color={colors.black} fontWeight={"600"}>
					{message}
				</MSText>
			</MessageDiv>

			{buttonCta != null && (
				<StyledButton>
					<MSText fontSize={"14px"} mobileFontSize="12px" color={colors.white}>
						{buttonCta}
					</MSText>
				</StyledButton>
			)}
		</MainWrapper>
	);
};

export default OrderAction;
