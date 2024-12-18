import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import MSText from "../MSText";
import { colors } from "@/constants/theme";
import OrderSuccessImage from "@/assets/images/order_success.png";
import {
	Wrapper,
	ImageWrapper,
	LinkSection,
	Tooltip,
} from "./ShareLink.styles";

const ShareOrderLink = () => {
	const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

	const handleCopy = (e: React.MouseEvent) => {
		console.log("HEYEYY");
		const textToCopy = "https://mawsouq/order/#7888305";
		navigator.clipboard.writeText(textToCopy);
		const { clientX, clientY } = e;

		setTooltip({ visible: true, x: clientX, y: clientY });

		setTimeout(() => {
			setTooltip((prev) => ({ ...prev, visible: false }));
		}, 1500);
	};

	return (
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
		</Wrapper>
	);
};

export default ShareOrderLink;
