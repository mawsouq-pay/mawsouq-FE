import React from "react";
import styled from "styled-components";

import { useFetchOrderById } from "@/hooks/orderHooks";
import { useRouter } from "next/router";
import PreviewOrderCard from "@/components/PreviewOrderCard";
import HomePageLayout from "@/layouts/HomePageLayout";
import { formatDate } from "@/helpers";

const PreviewOrderSummary = () => {
	const router = useRouter();
	const orderId = router.query.id;

	const { data, isLoading, error } = useFetchOrderById(orderId as string);
	return (
		<PageContainer>
			<PreviewOrderCard
				transactionTitle={data?.order?.transactionTitle ?? ""}
				itemName={data?.order?.itemName ?? ""}
				description={data?.order?.description ?? ""}
				deliveryDate={formatDate(data?.order?.deliveryDate ?? "")}
				quantity={data?.order?.quantity ?? 0}
				otherPartyEmail={data?.order?.seller?.email ?? ""}
				otherPartyPhone={data?.order?.seller?.name ?? ""}
				price={data?.order?.price ?? 1}
				isPending={isLoading}
				error={error}
			/>
		</PageContainer>
	);
};

const PageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 80vh;
	background-color: #f9f9f9;
`;
PreviewOrderSummary.CustomLayout = HomePageLayout;

export default PreviewOrderSummary;
