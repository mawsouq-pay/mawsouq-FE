import React from "react";
import MSText from "@/components/MSText";
import { Button } from "@mui/material";
import { FailureCard, FailureIcon } from "./PaymentFailure.styles";
import { PaymentFailureProps } from "./types";
import { clientRoutes } from "@/routes";
import { useRouter } from "next/router";

const PaymentFailure = (props: PaymentFailureProps) => {
	const router = useRouter();
	const { orderId } = props;

	const handleReturnToOrderDetails = () => {
		router.push({
			pathname: clientRoutes.order,
			query: { id: orderId },
		});
	};

	return (
		<FailureCard>
			<FailureIcon>✘</FailureIcon>
			<MSText fontSize="32px" fontWeight="600" color="red">
				Payment Failed
			</MSText>
			<MSText fontSize="16px" style={{ margin: "10px 0 20px" }}>
				Unfortunately, your payment was not successful. Please try again. Your
				order ID is <strong>{orderId}</strong>.
			</MSText>
			<div style={{ display: "flex", gap: "10px" }}>
				<Button variant="contained" onClick={() => {}}>
					Retry Payment
				</Button>
				<Button variant="outlined" onClick={handleReturnToOrderDetails}>
					Return to Order Details
				</Button>
			</div>
		</FailureCard>
	);
};

export default PaymentFailure;
