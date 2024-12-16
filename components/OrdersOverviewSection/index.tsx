import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSText from "../MSText";
import { MainWrapper } from "./OrdersOverview.style";
import HorizontalOrderCard from "../HorizontalOrderCard";

const OrdersOverviewSection = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	return (
		<MainWrapper>
			<MSText fontSize="20px" fontWeight="600">
				{text.transactionsOverview}
			</MSText>
			<HorizontalOrderCard orderNo={""} itemName={""} amount={""} status={""} />
		</MainWrapper>
	);
};
export default OrdersOverviewSection;
