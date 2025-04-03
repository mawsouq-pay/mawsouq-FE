import StartTransactionCard from "@/components/Features/CreateTransaction/StartTransactionCard";
import MSText from "@/components/Shared/MSText";
import { textTr } from "@/constants/locales";
import { colors } from "@/constants/theme";
import HomePageLayout from "@/layouts/HomePageLayout";
import { withMeta } from "@/layouts/MetaLayout";
import { useLocaleStore } from "@/store";

const StartTransaction = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	return (
		<div>
			<MSText
				fontSize="24px"
				mobileFontSize="20px"
				fontWeight="bold"
				color={colors.black}
				style={{
					display: "inline-block",
					borderBottom: `2px solid ${colors.green}`,
					paddingBottom: "5px",
				}}
			>
				{text.startTransaction}
			</MSText>

			<StartTransactionCard />
		</div>
	);
};

StartTransaction.CustomLayout = HomePageLayout;
export default withMeta("startTransaction", StartTransaction);
