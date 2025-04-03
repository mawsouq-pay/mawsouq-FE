import React, { useState } from "react";
import styled from "styled-components";
import { useFetchOrderPreview } from "@/hooks/orderHooks";
import PreviewOrderCard from "@/components/Features/PreviewOrder/PreviewOrderCard";
import { formatDate } from "@/helpers";
import { useRouter } from "next/router";
import OrderPreviewConfirmationPopUp from "@/components/Features/PreviewOrder/OrderPreviewConfirmationPopUp";
import MSErrorAndLoadingWrapper from "@/components/Shared/MSErrorAndLoadingWrapper";
import { clientRoutes } from "@/routes";
import { useAuthStore } from "@/store";
import MSLoader from "@/components/Shared/MSLoader";
import { withMeta } from "@/layouts/MetaLayout";

const PreviewOrderSummary = () => {
	const router = useRouter();
	const orderId = router.query.id;
	const { data, isLoading, error } = useFetchOrderPreview(orderId as string);
	const [showBuyerPopUp, setShowBuyerPopUp] = useState(false);
	const { isLoggedIn } = useAuthStore();
	const orderIsJoined = Boolean(data?.order?.seller && data?.order?.buyer);
	if (isLoading) {
		return <MSLoader />;
	}
	if (orderIsJoined && isLoggedIn) {
		router.replace({
			pathname: clientRoutes.order,
			query: { id: orderId },
		});
	}
	return (
		<PageContainer>
			<MSErrorAndLoadingWrapper
				isLoading={isLoading}
				error={error}
				displayErrorReason={true}
			>
				<PreviewOrderCard
					transactionTitle={data?.order?.transactionTitle ?? ""}
					description={data?.order?.description ?? ""}
					deliveryDate={formatDate(data?.order?.deliveryDate ?? "")}
					sellerEmail={data?.order?.seller?.email ?? ""}
					sellerName={data?.order?.seller?.name ?? ""}
					price={data?.order?.price ?? 1}
					onConfirmPress={() => {
						if (orderIsJoined) {
							router.replace({
								pathname: clientRoutes.register,
								query: { orderId: orderId },
							});
						} else {
							setShowBuyerPopUp(true);
						}
					}}
					orderIsJoined={orderIsJoined ?? false}
				/>
				<OrderPreviewConfirmationPopUp
					open={showBuyerPopUp}
					setOpen={setShowBuyerPopUp}
					orderId={(orderId as string) ?? ""}
				/>
			</MSErrorAndLoadingWrapper>
		</PageContainer>
	);
};

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
	margin-bottom: 70px;
`;

export default withMeta("previewOrder", PreviewOrderSummary);
