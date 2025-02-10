import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSText from "../../../Shared/MSText";
import { EmptyStateWrapper, MainWrapper } from "./OrdersOverview.style";
import MSOrderCard from "../../../Shared/MSOrderCard";
import { OrdersOverViewSectionProps } from "./types";
import { Order } from "@/types/ordersTypes";
import { clientRoutes } from "@/routes";
import { useRouter } from "next/router";
import MSButton from "../../../Shared/MSButton";

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
	const handleStartTransaction = () => {
		router.push(clientRoutes.startTransaction);
	};
	return (
		<MainWrapper>
			<MSText fontSize={"20px"} mobileFontSize={"16px"} fontWeight="600">
				{text.transactionsOverview} ({latestOrders?.length ?? 0})
			</MSText>
			{latestOrders?.length === 0 ? (
				<EmptyStateWrapper>
					<MSText fontSize={"18px"} color={"#757575"} fontWeight="500">
						{text.noTransactionsFound}
					</MSText>
					<MSButton
						title={text.startTransaction}
						onClick={handleStartTransaction}
						style={{ height: 40 }}
					/>
				</EmptyStateWrapper>
			) : (
				latestOrders?.map((order: Order) => (
					<MSOrderCard
						transactionTitle={order.transactionTitle}
						itemName={order.itemName}
						price={order.price}
						status={order.status}
						deliveryDate={order.deliveryDate}
						isFetcherSeller={order.isFetcherSeller}
						otherPartyName={
							order.isFetcherSeller
								? order.buyer?.name || order.otherPartyEmail
								: order.seller?.name || order.otherPartyEmail
						}
						onPress={() => {
							navigateToOrder(order._id);
						}}
					/>
				))
			)}
		</MainWrapper>
	);
};
export default OrdersOverviewSection;
