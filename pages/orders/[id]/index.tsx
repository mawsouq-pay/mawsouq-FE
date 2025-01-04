import OrderHistory from "@/components/OrderHistory";
import OrderPaymentSummary from "@/components/OrderPaymentSummary";
import OrderProgress from "@/components/OrderProgress";
import { useFetchOrderById } from "@/hooks/orderHooks";
import { useRouter } from "next/router";
import React from "react";
import { HistorySection, InfoSection, MainWrapper } from "./OrderDetails.style";
import HomePageLayout from "@/layouts/HomePageLayout";
import MSText from "@/components/MSText";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { colors } from "@/constants/theme";
import OrderAction from "@/components/OrderAction";

const OrderDetails = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const router = useRouter();
	const orderId = router.query.id;

	const { data, isLoading, error } = useFetchOrderById(orderId as string);
	console.log("-----------------ORDER DETAILS---------", data);
	return (
		<>
			<MSText
				fontSize={"40px"}
				fontWeight={"600"}
				color={colors.black}
				style={{ paddingBottom: 30 }}
			>
				{text.orderDetails}
			</MSText>
			<OrderProgress status={data?.order?.status || "PENDING"} />

			<MainWrapper>
				<InfoSection>
					<OrderAction />
					<OrderPaymentSummary
						price={data?.order.price || 0}
						escrowFee={20}
						totalDue={(data?.order?.price || 0) + 20}
					/>
				</InfoSection>
				<HistorySection>
					<OrderHistory statusHistory={data?.order.statusHistory} />
				</HistorySection>
			</MainWrapper>
		</>
	);
};
OrderDetails.CustomLayout = HomePageLayout;

export default OrderDetails;
