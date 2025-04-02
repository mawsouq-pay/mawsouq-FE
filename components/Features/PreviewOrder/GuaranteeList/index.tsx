import React from "react";
import { Check } from "lucide-react";
import styled from "styled-components";
import { colors } from "@/constants/theme";
import MSText from "@/components/Shared/MSText";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";

const GuaranteeList = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const isArabic = locale === "ar";

	const items = [
		text.refundIfSellerDoesntDeliver,
		text.trackYourOrder,
		text.support247,
	];

	return (
		<ListWrapper style={{ direction: isArabic ? "rtl" : "ltr" }}>
			{items.map((item, idx) => (
				<ListItem key={idx}>
					<Check size={16} color={colors.green} />
					<MSText fontSize="14px" style={{ marginInlineStart: 8 }}>
						{item}
					</MSText>
				</ListItem>
			))}
		</ListWrapper>
	);
};

export default GuaranteeList;

// Styled
const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	margin-top: 16px;
`;

const ListItem = styled.div`
	display: flex;
	align-items: center;
`;
