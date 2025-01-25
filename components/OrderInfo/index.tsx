import React from "react";
import {
	ColumnDiv,
	ItemWrapper,
	ItemsContainer,
	LabelValue,
	MainWrapper,
	TextValue,
	RowDiv,
} from "./OrderInfo.styles";
import MSText from "../MSText";
import { colors } from "@/constants/theme";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { OrderInfoProps } from "./types";
import { formatDate } from "@/helpers";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Divider } from "@mui/material";
const OrderInfo = (props: OrderInfoProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { transactionTitle, itemName, price, deliveryDate, description } =
		props;
	const formattedDate = formatDate(deliveryDate);

	const OrderItems = [
		{ title: text.transactionTitle, value: transactionTitle },
		{ title: text.itemName, value: itemName },
		{ title: text.price, value: `EGP ${price}` },
		{ title: text.deliverDate, value: formattedDate },
	];
	return (
		<MainWrapper>
			<RowDiv>
				<MSText fontSize={"16px"} color={colors.gray}>
					Order Details
				</MSText>
				<ListAltIcon />
			</RowDiv>
			<ItemsContainer>
				<ColumnDiv>
					<MSText color={colors.LabelValue}>Description</MSText>
					<MSText>{description}</MSText>
					<Divider />
				</ColumnDiv>

				{OrderItems.map((item, index) => {
					return (
						<ItemWrapper>
							<LabelValue>
								<MSText color={colors.LabelValue}>{item.title}</MSText>
							</LabelValue>
							<TextValue>
								<MSText>{item.value}</MSText>
							</TextValue>
						</ItemWrapper>
					);
				})}
			</ItemsContainer>
		</MainWrapper>
	);
};

export default OrderInfo;
