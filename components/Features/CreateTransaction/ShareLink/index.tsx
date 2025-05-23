import React, { useState } from "react";
import MSText from "../../../Shared/MSText";
import { colors } from "@/constants/theme";
import {
	Wrapper,
	ImageWrapper,
	LinkSection,
	Tooltip,
} from "./ShareLink.styles";
import { ShareLinkProps } from "./types";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import Image from "next/image";

import { clientRoutes } from "@/routes";
import { useRouter } from "next/router";
import { OrderSuccessImage } from "@/assets/images";
import MSButton from "../../../Shared/MSButton";
import MSErrorAndLoadingWrapper from "@/components/Shared/MSErrorAndLoadingWrapper";
const ShareOrderLink = (props: ShareLinkProps) => {
	const { isPending, error, orderLink, navigateToFirstStep, orderId } = props;

	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const router = useRouter();

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
		<MSButton
			title={text.pleaseTryAgain}
			onClick={navigateToFirstStep}
			type="submit"
			style={{
				height: 35,
				width: "fit-content",
			}}
		/>
	);
	const navigateToOrder = () => {
		console.log(orderId);
		router.push({
			pathname: clientRoutes.order,
			query: { id: orderId },
		});
	};

	return (
		<MSErrorAndLoadingWrapper
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
					<MSText style={{ alignSelf: "center" }} fontSize={"14px"}>
						{text.shareOrderLink}
					</MSText>

					{tooltip.visible && <Tooltip>{text.copied}</Tooltip>}
				</LinkSection>

				<MSText fontSize="14px" color={colors.gray}>
					{text.emailSentToOtherParty}
				</MSText>

				<MSButton
					title={text.viewOrder}
					onClick={navigateToOrder}
					type="submit"
					style={{
						height: 35,
						width: "fit-content",
					}}
				/>
			</Wrapper>
		</MSErrorAndLoadingWrapper>
	);
};

export default ShareOrderLink;
