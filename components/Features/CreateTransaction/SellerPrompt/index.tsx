import React from "react";
import { PageWrapper, Card } from "./SellerPrompt.styles";
import MSText from "@/components/Shared/MSText";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import { colors } from "@/constants/theme";
import MSButton from "@/components/Shared/MSButton";

const SellPrompt = ({
	onSubmit,
	disableButton,
}: {
	onSubmit: () => void;
	disableButton: boolean;
}) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	return (
		<PageWrapper>
			<Card>
				<MSText
					color={colors.green}
					fontWeight="600"
					fontSize="28px"
					mobileFontSize="32px"
				>
					{text.wantToStartSellingSomething}
				</MSText>
				<MSText
					color={colors.black}
					fontSize="16px"
					fontWeight="600"
					style={{
						marginTop: 12,
						marginBottom: 22,
					}}
				>
					{text.moneyStaysSecure}
				</MSText>
				<MSButton
					title={text.startTransaction}
					onClick={onSubmit}
					disabled={disableButton}
				/>
			</Card>
		</PageWrapper>
	);
};

export default SellPrompt;
