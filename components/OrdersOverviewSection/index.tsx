import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSText from "../MSText";
import { MainWrapper } from "./OrdersOverview.style";
import OrderCard from "../OrderCard";
import { OrdersOverViewSectionProps } from "./types";
import { Order } from "@/types/ordersTypes";
import { useRouter } from "next/router";
import { clientRoutes } from "@/routes";

const OrdersOverviewSection = (props: OrdersOverViewSectionProps) => {
	const { latestOrders } = props;
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const router = useRouter();
	const navigateToOrder = (orderId: string) => {
		router.push({
			pathname: clientRoutes.order,
			query: { id: orderId },
		});
	};
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
						onPress={() => {
							navigateToOrder(order._id);
						}}
					/>
				);
			})}
		</MainWrapper>
	);
};
export default OrdersOverviewSection;
