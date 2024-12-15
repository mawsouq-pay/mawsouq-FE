import { ActiveTransactionsIcon, WalletIcon } from "@/assets/icons";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import {
	MainWrapper,
	DirectionFlex,
	Circle,
	GreetingDiv,
} from "./StatusSection.style";
import StatusCard from "../StatusCard";
import MSText from "../MSText";
import { colors } from "@/constants/theme";
import { getGreetingAndDate } from "@/utility/helperFunctions";

const StatusSection = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	console.log(locale);
	const { greeting, formattedDate } = getGreetingAndDate(locale);

	return (
		<MainWrapper>
			<GreetingDiv>
				<MSText>{greeting},Nada</MSText>
				<MSText fontSize="12px" color={colors.gray}>
					{text.todayIs} {formattedDate}
				</MSText>
			</GreetingDiv>
			<DirectionFlex>
				<StatusCard
					Icon={ActiveTransactionsIcon}
					title={text.activeTransactions}
					Status={
						<Circle>
							<MSText fontSize="30px" color={colors.blue} fontWeight="bold">
								05
							</MSText>
						</Circle>
					}
				/>
				<StatusCard
					Icon={WalletIcon}
					title={text.walletBalance}
					Status={
						<MSText fontSize="30px" color={colors.green} fontWeight="medium">
							$1,000
						</MSText>
					}
				/>
			</DirectionFlex>
		</MainWrapper>
	);
};
export default StatusSection;
