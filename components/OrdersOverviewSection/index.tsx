import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSText from "../MSText";
import { MainWrapper } from "./OrdersOverview.style";
import OrderCard from "../OrderCard";
import useCustomBreakpoint from "@/helpers/screenSizes";

const OrdersOverviewSection = () => {
	const { isMobile } = useCustomBreakpoint();
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	return (
		<MainWrapper>
			<MSText fontSize={isMobile ? "16px" : "20px"} fontWeight="600">
				{text.transactionsOverview}
			</MSText>
			<OrderCard
				orderNo={"22"}
				itemName={"Portrait"}
				amount={"20"}
				status={"Delivered"}
			/>
			<OrderCard
				orderNo={"22"}
				itemName={"Portrait"}
				amount={"20"}
				status={"Delivered"}
			/>
		</MainWrapper>
	);
};
export default OrdersOverviewSection;
