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
const PREVIEW_ORDER_LINK = process.env.NEXT_PUBLIC_PREVIEW_ORDER_LINK;

const ShareOrderLink = (props: ShareLinkProps) => {
	const { isPending, error, navigateToFirstStep, orderId, isPendingSeller } =
		props;
	const previewLink = `${PREVIEW_ORDER_LINK}/${orderId}`;

	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const router = useRouter();

	const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });
	const handleCopy = (e: React.MouseEvent) => {
		const textToCopy = previewLink ?? "";
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
		router.replace({
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
						width={80}
						height={80}
					/>
				</ImageWrapper>
				<MSText
					fontSize="14px"
					color={colors.black}
					fontWeight="600"
					style={{ textAlign: "center" }}
				>
					{text.orderSuccessfullyCreated}
				</MSText>

				<LinkSection>
					<MSText
						fontSize="18px"
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

				<MSButton
					title={text.viewOrder}
					onClick={navigateToOrder}
					type="submit"
					style={{
						height: 45,
						// width: "fit-content",
						marginTop: 15,
						width: "200px",
					}}
				/>
			</Wrapper>
		</MSErrorAndLoadingWrapper>
	);
};

export default ShareOrderLink;
