import HomePageLayout from "@/layouts/HomePageLayout";
import { HomePageWrapper } from "./Orders.style";
import OrdersOverviewSection from "@/components/OrdersOverviewSection";
import MSText from "@/components/MSText";
import { textTr } from "@/constants/locales";
import { useLocaleStore } from "@/store/LocaleStore";

const Orders = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	return (
		<HomePageWrapper>
			<MSText fontWeight="600">{text.myTransactions}</MSText>
		</HomePageWrapper>
	);
};
Orders.CustomLayout = HomePageLayout;
export default Orders;
