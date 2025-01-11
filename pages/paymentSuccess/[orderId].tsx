import { useRouter } from "next/router";
import React from "react";

const PaymentSuccess = () => {
	const router = useRouter();
	const orderId = router.query.orderId;

	return <div>PaymentSuccess for {orderId}</div>;
};

export default PaymentSuccess;
