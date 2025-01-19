import PaymentFailure from "@/components/PaymentFailure";
import PaymentSuccess from "@/components/PaymentSuccess";
import HomePageLayout from "@/layouts/HomePageLayout";
import { useRouter } from "next/router";
import React from "react";

const PaymentRedirect = () => {
	const router = useRouter();

	const { success, id: orderId } = router.query;

	if (!router.isReady) {
		return <div>Loading...</div>;
	}

	const isSuccess = success === "true";

	return (
		<div>
			{isSuccess ? (
				<PaymentSuccess orderId={orderId as string} />
			) : (
				<PaymentFailure orderId={orderId as string} />
			)}
		</div>
	);
};

PaymentRedirect.CustomLayout = HomePageLayout;
export default PaymentRedirect;
