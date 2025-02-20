import MSButton from "@/components/Shared/MSButton";
import MSText from "@/components/Shared/MSText";
import React, { useState } from "react";
import { LinkSection, Tooltip } from "./ShareLink.styles";
import { colors } from "@/constants/theme";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { ShareLinkSectionProps } from "./types";
const PREVIEW_ORDER_LINK = process.env.NEXT_PUBLIC_PREVIEW_ORDER_LINK;

const ShareLinkSection = (props: ShareLinkSectionProps) => {
	const { isPendingSeller, orderId } = props;
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });
	const previewLink = `${PREVIEW_ORDER_LINK}/${orderId}` ?? "";

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
				fontSize="22px"
				mobileFontSize="16px"
				color={colors.blue}
				fontWeight="bold"
				style={{ textAlign: "center" }}
			>
				{text.shareOrderLink} {text.withThe}{" "}
				{isPendingSeller ? text.seller : text.buyer} {text.toJoinTheOrder}!
			</MSText>
			<a
				href={previewLink}
				style={{
					textDecoration: "none",
					wordBreak: "break-word",
					overflowWrap: "break-word",
					maxWidth: "100%",
					textAlign: "center",
				}}
				target="_blank"
				rel="noopener noreferrer"
			>
				{previewLink}
			</a>
			<MSButton
				title={text.copyOrderLink}
				style={{ backgroundColor: colors.blue }}
				onClick={(e) => handleCopy(e)}
			/>

			{tooltip.visible && <Tooltip>{text.copied}</Tooltip>}
		</LinkSection>
	);
};

export default ShareLinkSection;
