import { StartTransactionIcon, ViewTransactionIcon } from "@/assets/icons";
import { MainWrapper, RowFlex } from "./ActionSection.style";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSText from "../../../Shared/MSText";
import { clientRoutes } from "@/routes";
import { useRouter } from "next/router";
import ActionCard from "../ActionCard";

const ActionSection = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { push } = useRouter();
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
						push(clientRoutes.startTransaction);
					}}
				/>
				<ActionCard
					Icon={ViewTransactionIcon}
					title={text.viewMyTransactions}
					onPress={() => {
						push(clientRoutes.orders);
					}}
				/>
			</RowFlex>
		</MainWrapper>
	);
};
export default ActionSection;
