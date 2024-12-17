import { colors } from "@/constants/theme";
import MSText from "../MSText";
import { MainWrapper, TitleWrapper } from "./TransactionForm.styles";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";

const TransactionForm = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	return (
		<MainWrapper>
			<TitleWrapper>
				<MSText
					fontSize={"30px"}
					mobileFontSize={"20px"}
					color={colors.black}
					fontWeight="bold"
				>
					{text.createOrder}
				</MSText>
			</TitleWrapper>
		</MainWrapper>
	);
};

export default TransactionForm;
