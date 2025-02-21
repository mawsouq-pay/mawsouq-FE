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
import { colors } from "@/constants/theme";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { OrderInfoProps } from "./types";
import { formatDate } from "@/helpers";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Divider } from "@mui/material";
import MSText from "@/components/Shared/MSText";
const OrderInfo = (props: OrderInfoProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { transactionTitle, price, deliveryDate, description } = props;
	const formattedDate = formatDate(deliveryDate);

	const OrderItems = [
		{ title: text.transactionTitle, value: transactionTitle },
		{ title: text.price, value: `EGP ${price}` },
		{ title: text.deliverDate, value: formattedDate },
	];
	return (
		<MainWrapper>
			<RowDiv>
				<MSText
					fontSize="20px"
					mobileFontSize="16px"
					fontWeight="700"
					color={colors.darkGray}
				>
					{" "}
					{text.orderDetails}
				</MSText>
				<ListAltIcon />
			</RowDiv>

			<ItemsContainer>
				<ColumnDiv>
					<MSText color={colors.black} fontSize="16px" fontWeight="600">
						{text.description}
					</MSText>
					<MSText fontSize="16px" color={colors.black} fontWeight="400">
						{description}
					</MSText>
					<Divider style={{ margin: "10px 0" }} />
				</ColumnDiv>

				{OrderItems.map((item, index) => (
					<ItemWrapper key={index}>
						<LabelValue>
							<MSText color={colors.black} fontSize="14px" fontWeight="500">
								{item.title}
							</MSText>
						</LabelValue>
						<TextValue>
							<MSText
								fontSize="14px"
								fontWeight="500"
								color={colors.black}
								style={{ textWrap: "wrap" }}
							>
								{item.value}{" "}
							</MSText>
						</TextValue>
					</ItemWrapper>
				))}
			</ItemsContainer>
		</MainWrapper>
	);
};

export default OrderInfo;
