import { StartTransactionIcon, ViewTransactionIcon } from "@/assets/icons";
import ActionCard from "../ActionCard";
import { MainWrapper, RowFlex } from "./ActionSection.style";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSText from "../MSText";
import useCustomBreakpoint from "@/helpers/screenSizes";

const ActionSection = () => {
	const { locale } = useLocaleStore();
	const { isMobile } = useCustomBreakpoint();
	const text = textTr(locale);
	return (
		<MainWrapper>
			<MSText fontSize={"20px"} mobileFontSize="16px" fontWeight="600">
				{text.whatWouldYouLikeToDoTod}
			</MSText>
			<RowFlex>
				<ActionCard
					Icon={StartTransactionIcon}
					title={text.createANewTransaction}
					onPress={() => {
						console.log("Start Transaftion");
					}}
				/>
				<ActionCard
					Icon={ViewTransactionIcon}
					title={text.viewMyTransactions}
					onPress={() => {
						console.log("Start Transaftion");
					}}
				/>
			</RowFlex>
		</MainWrapper>
	);
};
export default ActionSection;
