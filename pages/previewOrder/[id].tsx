import React from "react";
import styled from "styled-components";
import { useFetchOrderPreview } from "@/hooks/orderHooks";
import PreviewOrderCard from "@/components/PreviewOrderCard";
import HomePageLayout from "@/layouts/HomePageLayout";
import { formatDate } from "@/helpers";
import MSText from "@/components/MSText";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { useRouter } from "next/router";
import ErrorAndLoadingWrapper from "@/components/ErrorAndLoadingWrapper";
import ContactSummarySection from "@/components/ContactSummarySection";

const PreviewOrderSummary = () => {
	const router = useRouter();
	const orderId = router.query.id;
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { data, isLoading, error } = useFetchOrderPreview(orderId as string);

	return (
		<PageContainer>
			<ErrorAndLoadingWrapper
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
					itemName={data?.order?.itemName ?? ""}
					description={data?.order?.description ?? ""}
					deliveryDate={formatDate(data?.order?.deliveryDate ?? "")}
					quantity={data?.order?.quantity ?? 0}
					sellerEmail={data?.order?.seller?.email ?? ""}
					sellerName={data?.order?.seller?.name ?? ""}
					price={data?.order?.price ?? 1}
				/>
			</ErrorAndLoadingWrapper>
		</PageContainer>
	);
};

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	background-color: #f9f9f9;
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

PreviewOrderSummary.CustomLayout = HomePageLayout;

export default PreviewOrderSummary;
