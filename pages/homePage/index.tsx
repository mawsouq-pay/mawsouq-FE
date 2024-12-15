import ActionSection from "@/components/ActionsSection";
import StatusSection from "@/components/StatusSection";
import { useFetchOrders } from "@/hooks/orderHooks";
import HomePageLayout from "@/layouts/HomePageLayout";
import { HomePageWrapper } from "./HomePage.style";

const HomePage = () => {
	const { data: ordersData, isPending, error } = useFetchOrders();
	console.log(ordersData?.orders);
	return (
		<HomePageWrapper>
			<StatusSection />
			<ActionSection />;
		</HomePageWrapper>
	);
};
HomePage.CustomLayout = HomePageLayout;
export default HomePage;
