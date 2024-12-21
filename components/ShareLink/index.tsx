import React, { useState } from "react";
import Image from "next/image";
import MSText from "../MSText";
import { colors } from "@/constants/theme";
import OrderSuccessImage from "@/assets/images/order_success.png";
import {
	Wrapper,
	ImageWrapper,
	LinkSection,
	Tooltip,
	NavButton,
} from "./ShareLink.styles";
import { ShareLinkProps } from "./types";
import ErrorAndLoadingWrapper from "../ErrorAndLoadingWrapper";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";

const ShareOrderLink = (props: ShareLinkProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const { isPending, error, orderLink } = props;
	const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });
	const handleCopy = (e: React.MouseEvent) => {
		const textToCopy = orderLink ?? "";
		navigator.clipboard.writeText(textToCopy);
		const { clientX, clientY } = e;

		setTooltip({ visible: true, x: clientX, y: clientY });

		setTimeout(() => {
			setTooltip((prev) => ({ ...prev, visible: false }));
		}, 1500);
	};
	const retryButton = (
		<NavButton onClick={() => console.log("Retry clicked!")}>
			Please Try Again
		</NavButton>
	);

	return (
		<ErrorAndLoadingWrapper
			isLoading={isPending}
			error={error}
			errorButton={retryButton}
			displayErrorReason={true}
		>
			<Wrapper>
				<ImageWrapper>
					<Image
						src={OrderSuccessImage}
						alt="Order Success"
						width={100}
						height={100}
					/>
				</ImageWrapper>

				<LinkSection onClick={handleCopy}>
					<a
						href="https://mawsouq/order/#7888305"
						style={{ textDecoration: "none" }}
						target="_blank"
						rel="noopener noreferrer"
					>
						https://mawsouq/order/#7888305
					</a>
					<MSText style={{ alignSelf: "center" }}>Share Order Link</MSText>

					{tooltip.visible && <Tooltip>Copied!</Tooltip>}
				</LinkSection>

				<MSText fontSize="14px" color={colors.gray}>
					An email with the order details has also been sent to the buyer.
				</MSText>
				<NavButton>
					<MSText color={colors.white} fontSize={"14px"} fontWeight="600">
						{text.viewOrder}
					</MSText>
				</NavButton>
			</Wrapper>
		</ErrorAndLoadingWrapper>
	);
};

export default ShareOrderLink;
