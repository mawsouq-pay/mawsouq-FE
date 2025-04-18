import { colors } from "@/constants/theme";
import MSText from "../Shared/MSText";
import {
	ItemsContainer,
	ItemWrapper,
	LabelValue,
	MainWrapper,
	NameContainer,
	SellerContainer,
	StatusContainer,
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
		{ title: text.price, value: `EGP ${price}` },
		{ title: text.deliverDate, value: formattedDate },
	];
	return (
		<MainWrapper>
			<ItemsContainer>
				{OrderItems.map((item) => {
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
			<SellerContainer>
				<NameContainer>
					<MSText color={colors.LabelValue} fontSize="14px">
						{isFetcherSeller ? text.buyerName : text.sellerName}
					</MSText>
					<MSText>{otherPartyName}</MSText>
				</NameContainer>
				<StatusContainer>
					<MSText color="#FCA311">{orderStatusInfo.text}</MSText>
				</StatusContainer>
			</SellerContainer>
		</MainWrapper>
	);
};
export default OrderListItem;
