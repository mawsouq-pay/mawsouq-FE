import { colors } from "@/constants/theme";
import MSText from "../MSText";
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

const OrderListItem = (props: OrderListItemProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { transactionTitle, itemName, price, deliveryDate } = props;
	const formattedDate = formatDate(deliveryDate);

	const OrderItems = [
		{ title: text.transactionTitle, value: transactionTitle },
		{ title: text.itemName, value: itemName },
		{ title: text.price, value: price },
		{ title: text.deliverDate, value: formattedDate },
	];
	return (
		<MainWrapper>
			<ItemsContainer>
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
			<SellerContainer>
				<NameContainer>
					<MSText color={colors.LabelValue} fontSize="14px">
						Seller Name
					</MSText>
					<MSText>Eliane Fares</MSText>
				</NameContainer>
				<StatusContainer>
					<MSText color="#FCA311">Pending</MSText>
				</StatusContainer>
			</SellerContainer>
		</MainWrapper>
	);
};
export default OrderListItem;
