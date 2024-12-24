import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSText from "../MSText";
import { MainWrapper } from "./OrdersOverview.style";
import OrderCard from "../OrderCard";
import useCustomBreakpoint from "@/helpers/screenSizes";
import { OrdersOverViewSectionProps } from "./types";
import { Order } from "@/types/ordersTypes";

const OrdersOverviewSection = (props: OrdersOverViewSectionProps) => {
	const { latestOrders } = props;
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	return (
		<MainWrapper>
			<MSText fontSize={"20px"} mobileFontSize={"16px"} fontWeight="600">
				{text.transactionsOverview}
			</MSText>
			{latestOrders?.map((order: Order) => {
				return (
					<OrderCard
						transactionTitle={order.transactionTitle}
						itemName={order.itemName}
						price={order.price}
						status={order.status}
						deliveryDate={order.deliveryDate}
					/>
				);
			})}
		</MainWrapper>
	);
};
export default OrdersOverviewSection;
