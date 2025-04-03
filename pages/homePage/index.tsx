import OrdersOverviewSection from "@/components/Features/Home/OrdersOverviewSection";
import { useFetchOrders } from "@/hooks/orderHooks";
import HomePageLayout from "@/layouts/HomePageLayout";
import React from "react";
import styled from "styled-components";
import MSErrorAndLoadingWrapper from "@/components/Shared/MSErrorAndLoadingWrapper";
import MSButton from "@/components/Shared/MSButton";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { withMeta } from "@/layouts/MetaLayout";

const HomePage = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { data: ordersData, isLoading, error } = useFetchOrders();

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
				<OrdersOverviewSection latestOrders={ordersData?.orders} />
			</HomePageWrapper>
		</MSErrorAndLoadingWrapper>
	);
};
const HomePageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
`;

HomePage.CustomLayout = HomePageLayout;
export default withMeta("homePage", HomePage);
