import { textTr } from "@/constants/locales";
import { useFetchOrders } from "@/hooks/orderHooks";
import { clientRoutes } from "@/routes";
import { useLocaleStore } from "@/store/LocaleStore";
import { useRouter } from "next/router";
import React from "react";
import OrderCard from "../OrderCard";
import {
	EmptyStateWrapper,
	HomePageWrapper,
	RowDiv,
	StyledButton,
} from "./OrdersList.styles";
import { Order } from "@/types/ordersTypes";
import ErrorAndLoadingWrapper from "../ErrorAndLoadingWrapper";
import MSButton from "../MSButton";
import MSText from "../MSText";

const OrdersList = () => {
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
	const { data: ordersData, isLoading, error } = useFetchOrders();
	const isOrdersExist = (ordersData?.orders?.length ?? 0) > 0;
	return (
		<ErrorAndLoadingWrapper
			isLoading={isLoading}
			displayErrorReason={true}
			error={error}
		>
			<HomePageWrapper>
				<RowDiv>
					<MSText fontWeight="600" fontSize="30px" mobileFontSize="24px">
						{text.ordersList} ({ordersData?.orders?.length ?? 0})
					</MSText>
					{isOrdersExist && (
						<StyledButton onClick={handleStartTransaction}>
							{text.createANewTransaction}
						</StyledButton>
					)}
				</RowDiv>
				{ordersData?.orders?.length === 0 ? (
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
					ordersData?.orders?.map((order: Order) => {
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
					})
				)}
			</HomePageWrapper>
		</ErrorAndLoadingWrapper>
	);
};

export default OrdersList;
