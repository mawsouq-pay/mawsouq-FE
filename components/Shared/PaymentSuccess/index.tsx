import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

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

	const [isExiting, setIsExiting] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsExiting(true);
			setTimeout(() => {
				handleReturnToOrderDetails();
			}, 500);
		}, 1000);

		return () => clearTimeout(timer);
	}, [router, orderId]);

	const handleReturnToOrderDetails = () => {
		router.push({
			pathname: clientRoutes.order,
			query: { id: orderId },
		});
	};

	return (
		<AnimatePresence>
			{!isExiting && (
				<motion.div
					initial={{ opacity: 1, y: 0 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
				>
					<PageInner>
						<Image src={CheckImage} width={200} height={200} alt={""} />
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
						/>
					</PageInner>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default PaymentSuccess;
