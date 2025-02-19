import { ActiveTransactionsIcon, WalletIcon } from "@/assets/icons";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { MainWrapper, GreetingDiv } from "./StatusSection.style";
import MSText from "../../../Shared/MSText";
import { colors } from "@/constants/theme";
import { useAuthStore } from "@/store";
import { getGreetingAndDate } from "@/helpers";

const StatusSection = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { user } = useAuthStore();
	const { greeting, formattedDate } = getGreetingAndDate(locale);

	return (
		<MainWrapper>
			<GreetingDiv>
				<MSText>
					{greeting} , {user?.name ?? "User"}
				</MSText>
				<MSText fontSize="12px" color={colors.gray}>
					{text.todayIs} {formattedDate}
				</MSText>
			</GreetingDiv>
			{/* <DirectionFlex>
				<StatusCard
					Icon={ActiveTransactionsIcon}
					title={text.activeTransactions}
					Status={
						<Circle>
							<MSText
								fontSize={"30px"}
								mobileFontSize={"20px"}
								color={colors.blue}
								fontWeight={isMobile ? "600" : "bold"}
							>
								{numberOfactiveTransactions}
							</MSText>
						</Circle>
					}
				/>
				<StatusCard
					Icon={WalletIcon}
					title={text.walletBalance}
					Status={
						<MSText
							fontSize={"30px"}
							mobileFontSize={"20px"}
							color={colors.green}
							fontWeight="600"
						>
							$3,000
						</MSText>
					}
				/>
			</DirectionFlex> */}
		</MainWrapper>
	);
};
export default StatusSection;
