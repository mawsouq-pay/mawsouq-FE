import HomePageLayout from "@/layouts/HomePageLayout";
import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const PaymentPage = () => {
	const router = useRouter();
	const iframeLink = router.query.iframeLink;

	return (
		<PageWrapper>
			<IframeContainer
				src={iframeLink as string}
				title="Payment"
				frameBorder="0"
				allowFullScreen
			/>
		</PageWrapper>
	);
};

const PageWrapper = styled.div`
	height: 100vh;
`;

const IframeContainer = styled.iframe`
	width: 100%;
	height: 100%;
	border: none;
	border-radius: 10px;
`;

PaymentPage.CustomLayout = HomePageLayout;
export default PaymentPage;
