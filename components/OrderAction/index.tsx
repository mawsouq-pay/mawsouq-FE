import React from "react";
import { MainWrapper, MessageDiv } from "./OrderAction.styles";
import MSText from "../MSText";
import { colors } from "@/constants/theme";

const OrderAction = () => {
	return (
		<MainWrapper>
			<MSText fontSize={"20px"} color={colors.gray} fontWeight={"600"}>
				Awaiting Delivery
			</MSText>
			<MessageDiv>
				<MSText fontSize={"18px"} color={colors.black} fontWeight={"600"}>
					Order is being prepared by the seler
				</MSText>
			</MessageDiv>
		</MainWrapper>
	);
};

export default OrderAction;
