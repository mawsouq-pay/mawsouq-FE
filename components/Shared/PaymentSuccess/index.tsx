import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import { PageInner } from "./PaymentSuccess.styles";
import { PaymentSuccessProps } from "./types";
import { clientRoutes } from "@/routes";

import { CheckImage } from "@/assets/images";
import Image from "next/image";
import queryClient from "@/client/reactQClient";
import { preFetchOrderById } from "@/hooks/orderHooks";
import { sendEmail } from "@/helpers/sendEmail";
const NEXT_PUBLIC_FE_BASE_URL = process.env.NEXT_PUBLIC_FE_BASE_URL;

const PaymentSuccess = (props: PaymentSuccessProps) => {
	const router = useRouter();
	const { orderId } = props;

	const [isExiting, setIsExiting] = useState(false);

	useEffect(() => {
		if (!orderId) return;
		setTimeout(() => {
			setIsExiting(true);
			setTimeout(() => {
				handleReturnToOrderDetails();
			}, 500);
		}, 1000);
		const handleSideEffects = async () => {
			try {
				const order = await queryClient.fetchQuery({
					queryKey: ["fetchOrderById", orderId],
					queryFn: () => preFetchOrderById(orderId),
				});

				await sendEmail(
					[order.order.seller?.email ?? ""],
					"Payment Successful",
					"SellerPaidEmail",
					{
						sellerName: order.order.seller?.name,
						buyerName: order.order.buyer?.name,
						productTitle: order.order.transactionTitle,
						price: order.order.price,
						deliveryData: order.order.deliveryDate,
						orderId: orderId,
						orderLink: `${NEXT_PUBLIC_FE_BASE_URL}/orders/${orderId}`,
					}
				);
			} catch (error) {
				console.error("Error in payment success side effects:", error);
			}
		};

		handleSideEffects();
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
						<Image src={CheckImage} width={200} height={200} alt="Checkmark" />
					</PageInner>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default PaymentSuccess;
