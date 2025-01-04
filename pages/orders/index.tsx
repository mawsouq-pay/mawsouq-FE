import HomePageLayout from "@/layouts/HomePageLayout";
import { HomePageWrapper, RowDiv, StyledButton } from "./Orders.style";
import MSText from "@/components/MSText";
import { textTr } from "@/constants/locales";
import { useLocaleStore } from "@/store/LocaleStore";
import { useFetchOrders } from "@/hooks/orderHooks";
import { Order } from "@/types/ordersTypes";
import OrderCard from "@/components/OrderCard";
import { useRouter } from "next/router";
import { clientRoutes } from "@/routes";

const Orders = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const router = useRouter();

	const navigateToOrder = (orderId: string) => {
		router.push({
			pathname: clientRoutes.order,
			query: { id: orderId },
		});
	};
	const { data: ordersData, isLoading, error } = useFetchOrders();

	return (
		<HomePageWrapper>
			<RowDiv>
				<MSText fontWeight="600" fontSize="36px">
					{text.ordersList}
				</MSText>
				<StyledButton>{text.createANewTransaction}</StyledButton>
			</RowDiv>

			{ordersData?.orders?.map((order: Order) => {
				return (
					<OrderCard
						transactionTitle={order.transactionTitle}
						itemName={order.itemName}
						price={order.price}
						status={order.status}
						deliveryDate={order.deliveryDate}
						isFetcherSeller={order.isFetcherSeller}
						otherPartyName={
							order.isFetcherSeller
								? order.buyer?.name || order.buyer?.email
								: order.seller?.name || order.seller?.email
						}
						onPress={() => {
							navigateToOrder(order._id);
						}}
					/>
				);
			})}
		</HomePageWrapper>
	);
};
Orders.CustomLayout = HomePageLayout;
export default Orders;
