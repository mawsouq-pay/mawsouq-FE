import { StartTransactionIcon, ViewTransactionIcon } from "@/assets/icons";
import ActionCard from "../ActionCard";
import { MainWrapper, RowFlex } from "./ActionSection.style";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSText from "../MSText";

const ActionSection = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	console.log(locale);
	return (
		<MainWrapper>
			<MSText fontSize="20px" fontWeight="550">
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
