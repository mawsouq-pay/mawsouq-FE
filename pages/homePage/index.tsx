import ActionSection from "@/components/ActionsSection";
import StatusSection from "@/components/StatusSection";
import { useFetchOrders } from "@/hooks/orderHooks";
import HomePageLayout from "@/layouts/HomePageLayout";
import OrdersOverviewSection from "@/components/OrdersOverviewSection";
import { useUserStats } from "@/hooks/statusHooks";
import React from "react";
import styled from "styled-components";

const HomePage = () => {
	const { data: ordersData, isLoading, error } = useFetchOrders();
	console.log("Orders Data:", ordersData?.orders);
	const { numberOfActiveTransactions, walletBalance } = useUserStats(
		ordersData?.orders
	);

	return (
		<HomePageWrapper>
			<StatusSection numberOfactiveTransactions={numberOfActiveTransactions} />
			<ActionSection />
			<OrdersOverviewSection latestOrders={ordersData?.orders?.slice(0, 3)} />
		</HomePageWrapper>
	);
};
const HomePageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

HomePage.CustomLayout = HomePageLayout;
export default HomePage;
