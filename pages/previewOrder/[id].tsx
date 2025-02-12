import React, { useState } from "react";
import styled from "styled-components";
import { useFetchOrderPreview } from "@/hooks/orderHooks";
import PreviewOrderCard from "@/components/Features/PreviewOrder/PreviewOrderCard";
import HomePageLayout from "@/layouts/HomePageLayout";
import { formatDate } from "@/helpers";
import MSText from "@/components/Shared/MSText";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { useRouter } from "next/router";
import OrderPreviewConfirmationPopUp from "@/components/Features/PreviewOrder/OrderPreviewConfirmationPopUp";
import MSErrorAndLoadingWrapper from "@/components/Shared/MSErrorAndLoadingWrapper";
import ContactSummarySection from "@/components/Features/PreviewOrder/ContactSummarySection";

const PreviewOrderSummary = () => {
	const router = useRouter();
	const orderId = router.query.id;
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { data, isLoading, error } = useFetchOrderPreview(orderId as string);
	const [showBuyerPopUp, setShowBuyerPopUp] = useState(false);
	return (
		<PageContainer>
			<MSErrorAndLoadingWrapper
				isLoading={isLoading}
				error={error}
				displayErrorReason={true}
			>
				<InfoWrapper>
					<InfoMessage>
						<MSText fontSize="18px" fontWeight="500" color="#757575">
							{text.descriptionMessage}
						</MSText>
					</InfoMessage>
					<ContactSummarySection
						sellerNaming={true}
						email={data?.order?.seller?.email ?? ""}
						name={data?.order?.seller?.name ?? ""}
					/>
				</InfoWrapper>
				<PreviewOrderCard
					transactionTitle={data?.order?.transactionTitle ?? ""}
					description={data?.order?.description ?? ""}
					deliveryDate={formatDate(data?.order?.deliveryDate ?? "")}
					sellerEmail={data?.order?.seller?.email ?? ""}
					sellerName={data?.order?.seller?.name ?? ""}
					price={data?.order?.price ?? 1}
					onConfirmPress={() => setShowBuyerPopUp(true)}
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
	width: 100%;
	padding: 20px;
`;

const InfoWrapper = styled.div`
	width: 100%;
	max-width: 600px;
	margin-bottom: 20px;
	background-color: #fff;
	padding: 16px;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	gap: 30px;
`;

const InfoMessage = styled.div`
	text-align: center;
`;

export default PreviewOrderSummary;
