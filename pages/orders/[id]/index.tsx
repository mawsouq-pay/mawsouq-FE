import React from "react";
import HomePageLayout from "@/layouts/HomePageLayout";
import OrderBody from "@/components/OrderBody";
import { useRouter } from "next/router";

const OrderDetails = () => {
	const router = useRouter();
	const orderId = router.query.id;

	return <OrderBody orderId={orderId as string} />;
};
OrderDetails.CustomLayout = HomePageLayout;

export default OrderDetails;
