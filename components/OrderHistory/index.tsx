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
				<MSText fontSize={"20px"} mobileFontSize={"16px"} color={colors.black}>
					{text.history}
				</MSText>
				<Icon title="Refresh history">&#x21bb;</Icon>
			</RowDiv>

			{statusHistory?.map((entry, index) => (
				<Entry key={index}>
					<MSText fontSize={"18px"} mobileFontSize={"16px"} color={colors.gray}>
						{new Date(entry?.timestamp).toLocaleString()}
					</MSText>
					<MSText
						fontSize={"18px"}
						mobileFontSize={"16px"}
						color={colors.jetBlack}
						fontWeight={"600"}
					>
						{orderStatusObject[entry?.status].text}{" "}
					</MSText>
					<Divider />
				</Entry>
			))}
		</HistoryContainer>
	);
};

export default OrderHistory;
