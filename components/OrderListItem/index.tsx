import { colors } from "@/constants/theme";
import MSText from "../MSText";
import {
	ItemsContainer,
	ItemWrapper,
	LabelValue,
	MainWrapper,
	NameContainer,
	SellerContainer,
	StatusBadge,
	TextValue,
} from "./OrderListItem.style";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { OrderListItemProps } from "./types";
import { formatDate } from "@/helpers";
import { orderStatusObject } from "@/constants";

const OrderListItem = (props: OrderListItemProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const {
		transactionTitle,
		itemName,
		price,
		deliveryDate,
		isFetcherSeller,
		otherPartyName,
		status,
	} = props;

	const formattedDate = formatDate(deliveryDate);
	const orderStatusInfo = orderStatusObject[status];

	const OrderItems = [
		{ title: text.transactionTitle, value: transactionTitle },
		{ title: text.itemName, value: itemName },
		{ title: text.price, value: `EGP ${price}` },
		{ title: text.deliverDate, value: formattedDate },
	];

	return (
		<MainWrapper>
			<ItemsContainer>
				{OrderItems.map(
					(item, index) =>
						item.value && (
							<ItemWrapper key={index}>
								<LabelValue>
									<MSText color={colors.LabelValue} fontWeight="500">
										{item.title}
									</MSText>
								</LabelValue>
								<TextValue>
									<MSText fontWeight="600">{item.value}</MSText>
								</TextValue>
							</ItemWrapper>
						)
				)}
			</ItemsContainer>

			<SellerContainer>
				<NameContainer>
					<MSText color={colors.gray} fontSize="14px">
						{isFetcherSeller ? text.buyerName : text.sellerName}
					</MSText>
					<MSText fontWeight="600">{otherPartyName}</MSText>
				</NameContainer>

				<StatusBadge
					status={status}
					style={{ backgroundColor: orderStatusInfo.backgroundColor }}
				>
					<MSText fontSize="14px" fontWeight="600">
						{orderStatusInfo.text}
					</MSText>
				</StatusBadge>
			</SellerContainer>
		</MainWrapper>
	);
};

export default OrderListItem;
