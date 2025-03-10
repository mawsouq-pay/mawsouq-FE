import PaymentFailure from "@/components/Shared/PaymentFailure";
import PaymentSuccess from "@/components/Shared/PaymentSuccess";
import React from "react";
import { useRouter } from "next/router";
import MSLoader from "@/components/Shared/MSLoader";

const PaymentRedirect = () => {
	const router = useRouter();

	const { success, orderId } = router.query;

	if (!router.isReady) {
		return <MSLoader />;
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

export default PaymentRedirect;
