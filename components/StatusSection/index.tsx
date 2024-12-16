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
import { useAuthStore } from "@/store";
import useCustomBreakpoint from "@/helpers/screenSizes";

const StatusSection = () => {
	const { locale } = useLocaleStore();
	const { user } = useAuthStore();
	const text = textTr(locale);
	const { isMobile } = useCustomBreakpoint();
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
			<DirectionFlex>
				<StatusCard
					Icon={ActiveTransactionsIcon}
					title={text.activeTransactions}
					Status={
						<Circle>
							<MSText
								fontSize={isMobile ? "24px" : "30px"}
								color={colors.blue}
								fontWeight={isMobile ? "600" : "bold"}
							>
								05
							</MSText>
						</Circle>
					}
				/>
				<StatusCard
					Icon={WalletIcon}
					title={text.walletBalance}
					Status={
						<MSText
							fontSize={isMobile ? "24px" : "30px"}
							color={colors.green}
							fontWeight="medium"
						>
							$3,000
						</MSText>
					}
				/>
			</DirectionFlex>
		</MainWrapper>
	);
};
export default StatusSection;
