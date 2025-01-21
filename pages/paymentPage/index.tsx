import HomePageLayout from "@/layouts/HomePageLayout";
import React from "react";
import { useRouter } from "next/router";

const PaymentPage = () => {
	const router = useRouter();
	const iframeLink = router.query.iframeLink;
	console.log(iframeLink);
	return (
		<div style={{ textAlign: "center", marginTop: "20px" }}>
			<iframe
				src={iframeLink as string}
				width="600px"
				height="400px"
				frameBorder="0"
				title="Payment"
				style={{ border: "none", borderRadius: "10px" }}
			></iframe>
		</div>
	);
};
PaymentPage.CustomLayout = HomePageLayout;
export default PaymentPage;
