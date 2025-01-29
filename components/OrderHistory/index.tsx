import React from "react";
import { HistoryProps } from "./types";
import { Icon } from "@mui/material";
import {
	HistoryContainer,
	Entry,
	RowDiv,
	Divider,
} from "./OrderHistory.styles";
import MSText from "../MSText";
import { colors } from "@/constants/theme";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { orderStatusObject } from "@/constants";

const OrderHistory = ({ statusHistory }: HistoryProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	return (
		<HistoryContainer>
			<RowDiv>
				<MSText fontSize={"18px"} fontWeight="600" color={colors.black}>
					{text.history}
				</MSText>
				<Icon title="Refresh history">&#x21bb;</Icon>
			</RowDiv>

			{statusHistory?.map((entry, index) => (
				<Entry key={index}>
					<MSText fontSize={"14px"} mobileFontSize={"12px"} color={colors.gray}>
						{new Date(entry?.timestamp).toLocaleString()}
					</MSText>

					<MSText
						fontSize={"15px"}
						mobileFontSize={"13px"}
						color={colors.black}
					>
						{orderStatusObject[entry?.status].historyMessage}{" "}
					</MSText>

					{index !== statusHistory.length - 1 && <Divider />}
				</Entry>
			))}
		</HistoryContainer>
	);
};

export default OrderHistory;
