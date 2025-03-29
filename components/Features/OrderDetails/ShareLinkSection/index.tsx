import MSButton from "@/components/Shared/MSButton";
import MSText from "@/components/Shared/MSText";
import React, { useState } from "react";
import {
	LinkSection,
	Tooltip,
	CopyButtonWrapper,
	FlexRow,
} from "./ShareLink.styles";
import { colors } from "@/constants/theme";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { ShareLinkSectionProps } from "./types";
import { CircleCheckBig, LinkIcon } from "lucide-react";
const PREVIEW_ORDER_LINK = process.env.NEXT_PUBLIC_PREVIEW_ORDER_LINK;

const ShareLinkSection = (props: ShareLinkSectionProps) => {
	const { isPendingSeller, orderId } = props;
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });
	const previewLink = `${PREVIEW_ORDER_LINK}/${orderId}`;

	const handleCopy = (e: React.MouseEvent) => {
		const textToCopy = previewLink ?? "";
		navigator.clipboard.writeText(textToCopy);
		const { clientX, clientY } = e;

		setTooltip({ visible: true, x: clientX, y: clientY });

		setTimeout(() => {
			setTooltip((prev) => ({ ...prev, visible: false }));
		}, 1500);
	};
	return (
		<LinkSection>
			<MSText
				fontSize="24px"
				fontWeight="bold"
				color={colors.green}
				style={{ textAlign: "center" }}
			>
				{text.waitingForBuyerToPay}
			</MSText>
			<MSText
				fontSize="16px"
				color={colors.black}
				style={{ textAlign: "center" }}
			>
				{text.emailAfterBuyerPays}{" "}
			</MSText>
			<CopyButtonWrapper>
				<FlexRow>
					<LinkIcon />
					<MSText fontSize="20px" fontWeight="600">
						{text.shareLink}
					</MSText>
				</FlexRow>
				<MSText>{previewLink}</MSText>
				<MSButton
					title={text.copyOrderLink}
					style={{ backgroundColor: colors.green }}
					onClick={(e) => handleCopy(e)}
				/>
			</CopyButtonWrapper>

			{tooltip.visible && (
				<Tooltip style={{ top: tooltip.y, left: tooltip.x }}>
					{text.copied}
				</Tooltip>
			)}
		</LinkSection>
	);
};

export default ShareLinkSection;
