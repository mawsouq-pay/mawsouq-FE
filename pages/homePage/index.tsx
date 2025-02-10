import ActionSection from "@/components/Features/Home/ActionsSection";
import StatusSection from "@/components/Features/Home/StatusSection";
import OrdersOverviewSection from "@/components/Features/Home/OrdersOverviewSection";
import { useFetchOrders } from "@/hooks/orderHooks";
import HomePageLayout from "@/layouts/HomePageLayout";
import { useUserStats } from "@/hooks/statusHooks";
import React from "react";
import styled from "styled-components";
import MSErrorAndLoadingWrapper from "@/components/Shared/MSErrorAndLoadingWrapper";
import MSButton from "@/components/Shared/MSButton";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";

const HomePage = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { data: ordersData, isLoading, error } = useFetchOrders();
	const { numberOfActiveTransactions, walletBalance } = useUserStats(
		ordersData?.orders
	);
	const retryButton = (
		<MSButton
			title={text.pleaseTryAgain}
			onClick={() => {
				window.location.reload();
			}}
			type="submit"
			style={{
				height: 35,
				width: "fit-content",
			}}
		/>
	);
	return (
		<MSErrorAndLoadingWrapper
			isLoading={isLoading}
			error={error}
			errorButton={retryButton}
			displayErrorReason={true}
		>
			<HomePageWrapper>
				<StatusSection
					numberOfactiveTransactions={numberOfActiveTransactions}
				/>
				<ActionSection />
				<OrdersOverviewSection latestOrders={ordersData?.orders?.slice(0, 3)} />
			</HomePageWrapper>
		</MSErrorAndLoadingWrapper>
	);
};
const HomePageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

HomePage.CustomLayout = HomePageLayout;
export default HomePage;
