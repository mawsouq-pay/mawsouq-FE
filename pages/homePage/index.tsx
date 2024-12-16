import ActionSection from "@/components/ActionsSection";
import StatusSection from "@/components/StatusSection";
import { useFetchOrders } from "@/hooks/orderHooks";
import HomePageLayout from "@/layouts/HomePageLayout";
import { HomePageWrapper } from "./HomePage.style";
import OrdersOverviewSection from "@/components/OrdersOverviewSection";

const HomePage = () => {
	const { data: ordersData, isPending, error } = useFetchOrders();
	console.log("Orders Data:", ordersData?.orders);
	return (
		<HomePageWrapper>
			<StatusSection />
			<ActionSection />
			<OrdersOverviewSection />
		</HomePageWrapper>
	);
};
HomePage.CustomLayout = HomePageLayout;
export default HomePage;
