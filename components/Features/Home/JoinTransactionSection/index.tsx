import React, { useState } from "react";
import {
	MainWrapper,
	ContentWrapper,
	StyledInput,
	ButtonWrapper,
} from "./JoinTransactionSection.styles";
import MSButton from "@/components/Shared/MSButton";
import MSText from "@/components/Shared/MSText";
import { useLinkTransaction } from "@/hooks/useLinkTransaction";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";

const JoinTransactionSection = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const [transactionLink, setTransactionLink] = useState("");
	const { manuallyLinkOrder, linkOrderPending } = useLinkTransaction();

	const handleJoin = () => {
		manuallyLinkOrder(transactionLink, () => setTransactionLink(""));
	};

	return (
		<MainWrapper>
			<MSText fontSize={"20px"} mobileFontSize="16px" fontWeight="600">
				{text.joinTransaction}
			</MSText>
			<ContentWrapper>
				<MSText fontSize="16px" color="#4A4A4A">
					{text.joinTransactionPrompt}
				</MSText>
			</ContentWrapper>
			<div style={{ marginTop: 10 }}>
				<StyledInput
					type="text"
					placeholder="Link"
					value={transactionLink}
					onChange={(e) => setTransactionLink(e.target.value)}
				/>

				<ButtonWrapper>
					<MSButton
						title={text.joinTransaction}
						onClick={handleJoin}
						disabled={!transactionLink}
						loading={linkOrderPending}
					/>
				</ButtonWrapper>
			</div>
		</MainWrapper>
	);
};

export default JoinTransactionSection;
