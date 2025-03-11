import React, { useState } from "react";
import MSText from "../../../Shared/MSText";
import { colors } from "@/constants/theme";
import {
	Wrapper,
	LinkSection,
	Tooltip,
	CopyButtonWrapper,
	ActionButtonWrapper,
} from "./ShareLink.styles";
import { ShareLinkProps } from "./types";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { clientRoutes } from "@/routes";
import { useRouter } from "next/router";
import MSButton from "../../../Shared/MSButton";
import MSErrorAndLoadingWrapper from "@/components/Shared/MSErrorAndLoadingWrapper";
import { CircleCheckBig } from "lucide-react";
import { useNotification } from "@/store/SnackBarStore";

const PREVIEW_ORDER_LINK = process.env.NEXT_PUBLIC_PREVIEW_ORDER_LINK;

const ShareOrderLink = (props: ShareLinkProps) => {
	const { isPending, error, navigateToFirstStep, orderId, isPendingSeller } =
		props;
	const { showSuccessNotification } = useNotification();
	const previewLink = `${PREVIEW_ORDER_LINK}/${orderId}`;

	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const router = useRouter();

	const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

	const handleCopy = (e: React.MouseEvent) => {
		navigator.clipboard.writeText(previewLink);
		const { clientX, clientY } = e;
		setTooltip({ visible: true, x: clientX, y: clientY });
		setTimeout(() => {
			setTooltip((prev) => ({ ...prev, visible: false }));
		}, 1500);

		navigateToOrder();
		showSuccessNotification(text.linkCopiedSuccessfully);
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
				<CircleCheckBig size={"35px"} />
				<LinkSection>
					<MSText
						fontSize="18px"
						fontWeight="bold"
						color={colors.black}
						style={{ textAlign: "center" }}
					>
						{text.shareOrderLink} {text.withThe}{" "}
						{isPendingSeller ? text.seller : text.buyer} {text.toJoinTheOrder}!
					</MSText>
					{/* <a
						href={previewLink}
						style={{
							textDecoration: "none",
							wordBreak: "break-word",
							overflowWrap: "break-word",
							maxWidth: "100%",
							textAlign: "center",
							color: colors.black,
							fontWeight: "bold",
						}}
						target="_blank"
						rel="noopener noreferrer"
					>
						{previewLink}
					</a> */}

					<CopyButtonWrapper>
						<MSButton
							title={text.copyOrderLink}
							style={{ backgroundColor: colors.blue, width: "100%" }}
							onClick={(e) => handleCopy(e)}
						/>
					</CopyButtonWrapper>

					{tooltip.visible && (
						<Tooltip style={{ top: tooltip.y, left: tooltip.x }}>
							{text.copied}
						</Tooltip>
					)}
				</LinkSection>
			</Wrapper>
		</MSErrorAndLoadingWrapper>
	);
};

export default ShareOrderLink;
