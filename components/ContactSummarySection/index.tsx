import React from "react";
import MSText from "../MSText";
import {
	MainWrapper,
	ItemsContainer,
	ItemWrapper,
	LabelValue,
	TextValue,
} from "./ContactSummarySection.styles";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { ContactSummarySectionProps } from "./types";
import { colors } from "@/constants/theme";

const ContactSummarySection = (props: ContactSummarySectionProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { sellerNaming, email, phoneNumber, name } = props;

	const contactInfo = [
		{
			title: sellerNaming ? `${text.sellerName}` : `${text.buyerName}`,
			value: name,
			fontWeight: "600",
			fontSize: "14px",
			mobileFontSize: "12px",
			color: colors.gray,
		},
		{
			title: sellerNaming ? `${text.sellerEmail}` : `${text.buyerEmail}`,
			value: email,
			fontWeight: "600",
			fontSize: "14px",
			mobileFontSize: "12px",
			color: colors.gray,
		},
		{
			title: sellerNaming ? `${text.sellerPhone}` : `${text.buyerPhone}`,
			value: phoneNumber,
			fontWeight: "600",
			fontSize: "14px",
			mobileFontSize: "12px",
			color: colors.gray,
		},
	];

	return (
		<MainWrapper>
			<ItemsContainer>
				{contactInfo.map(
					(item, index) =>
						item.value && (
							<ItemWrapper key={index}>
								<LabelValue>
									<MSText
										color={colors.black}
										fontSize={item.fontSize}
										mobileFontSize={item.mobileFontSize}
										fontWeight={item.fontWeight}
									>
										{item.title}
									</MSText>
								</LabelValue>
								<TextValue>
									<MSText
										color={item.color}
										fontSize={item.fontSize}
										mobileFontSize={item.mobileFontSize}
										fontWeight={item.fontWeight}
									>
										{item.value}
									</MSText>
								</TextValue>
							</ItemWrapper>
						)
				)}
			</ItemsContainer>
		</MainWrapper>
	);
};

export default ContactSummarySection;
