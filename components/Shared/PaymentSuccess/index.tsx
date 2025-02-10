import React from "react";
import { useRouter } from "next/router";

import { MessagesDiv, PageInner } from "./PaymentSuccess.styles";
import { PaymentSuccessProps } from "./types";
import { clientRoutes } from "@/routes";

import { CheckImage } from "@/assets/images";

import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSText from "../MSText";
import Image from "next/image";
import MSButton from "../MSButton";
const PaymentSuccess = (props: PaymentSuccessProps) => {
	const router = useRouter();
	const { orderId } = props;
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const handleReturnToOrderDetails = () => {
		router.push({
			pathname: clientRoutes.order,
			query: { id: orderId },
		});
	};

	return (
		<PageInner>
			<Image src={CheckImage} width={255} height={255} alt={""} />
			<MessagesDiv>
				<MSText fontSize="25px" mobileFontSize="18px" fontWeight="bold">
					{text.paymentHasBeenReceivedSuccessfully}
				</MSText>
				<MSText fontSize="20px" mobileFontSize="16px" fontWeight="600">
					{text.preparingOrderPr}
				</MSText>
			</MessagesDiv>

			<MSButton
				title={text.viewOrder}
				style={{ height: 50, padding: "16px 30px 16px 30px" }}
				onClick={handleReturnToOrderDetails}
			></MSButton>
		</PageInner>
	);
};

export default PaymentSuccess;
