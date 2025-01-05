//Send enum as OrderStatusEnum.PENDING,backend sees it as "Pending"
//We receive it from backend as same "Pending" so its type is (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum]

export const OrderStatusEnum = Object.freeze({
	PENDING: "PENDING", //the order was created but not paid for
	IN_PROGRESS: "IN_PROGRESS", //order is paidd for , seller is "creating ig"
	IN_TRANSIT: "IN_TRANSIT", //seller marked it as on the way
	DELIVERED: "DELIVERED", //buyer marked it as delivered
	COMPLETED: "COMPLETED", //buyer approved it so funds released
	DISPUTED: "DISPUTED", //buyer wants to start khena2a
	CANCELLED: "CANCELLED", //order is abandoned and no updates done to it
});
export const orderStatusObject: Record<
	keyof typeof OrderStatusEnum,
	{
		text: string;
		backgroundColor: string;
		textColor: string;
		historyMessage: string;
	}
> = {
	PENDING: {
		text: "pending",
		backgroundColor: "#FFF9C4",
		textColor: "#000000",
		historyMessage: "Order was created and is pending payment from the buyer.",
	},
	IN_PROGRESS: {
		text: "in_progress",
		backgroundColor: "#BBDEFB",
		textColor: "#000000",
		historyMessage: "Order is in progress; the seller is working on the item.",
	},
	IN_TRANSIT: {
		text: "in_transit",
		backgroundColor: "#FFE0B2",
		textColor: "#000000",
		historyMessage: "Order is on the way; the seller has dispatched the item.",
	},
	DELIVERED: {
		text: "delivered",
		backgroundColor: "#C8E6C9",
		textColor: "#000000",
		historyMessage: "Order has been delivered to the buyer.",
	},
	COMPLETED: {
		text: "completed",
		backgroundColor: "#A5D6A7",
		textColor: "#000000",
		historyMessage: "Order is completed; the buyer approved the delivery.",
	},
	DISPUTED: {
		text: "disputed",
		backgroundColor: "#FFCCBC",
		textColor: "#000000",
		historyMessage: "The order is disputed; the buyer has raised an issue.",
	},
	CANCELLED: {
		text: "cancelled",
		backgroundColor: "#F0F0F0",
		textColor: "#000000",
		historyMessage: "The order has been cancelled and is no longer active.",
	},
};
export const orderProgressBarData: Record<
	keyof typeof OrderStatusEnum,
	{
		activeStep: number;
		messageForBuyer: string;
		messageForSeller: string;
		buyerCTA: string | null;
		sellerCTA: string | null;
	}
> = {
	PENDING: {
		activeStep: 0,
		messageForBuyer: "Waiting for your payment to proceed with the order.",
		messageForSeller: "Waiting for the buyer to make the payment.",
		buyerCTA: "Make Payment",
		sellerCTA: null,
	},
	IN_PROGRESS: {
		activeStep: 1,
		messageForBuyer: "The seller is preparing your order.",
		messageForSeller: "Start creating the order.",
		buyerCTA: null,
		sellerCTA: "Mark as Ready for Delivery",
	},
	IN_TRANSIT: {
		activeStep: 2,
		messageForBuyer: "Your order is ready and waiting for dispatch.",
		messageForSeller: "Dispatch the order to the buyer.",
		buyerCTA: null,
		sellerCTA: "Mark as Out for Delivery",
	},
	DELIVERED: {
		activeStep: 3,
		messageForBuyer: "Confirm receipt of your order.",
		messageForSeller: "Waiting for the buyer to confirm receipt.",
		buyerCTA: "Confirm Delivery",
		sellerCTA: null,
	},
	COMPLETED: {
		activeStep: 4,
		messageForBuyer: "Thank you! Your order is completed.",
		messageForSeller:
			"The order is completed, and the payment has been released.",
		buyerCTA: null,
		sellerCTA: null,
	},
	DISPUTED: {
		activeStep: 4,
		messageForBuyer:
			"A dispute has been raised. Provide details to resolve it.",
		messageForSeller:
			"A dispute has been raised. Provide details to resolve it.",
		buyerCTA: "Submit Dispute Details",
		sellerCTA: "Submit Dispute Details",
	},
	CANCELLED: {
		activeStep: 0,
		messageForBuyer: "The order has been cancelled.",
		messageForSeller: "The order has been cancelled.",
		buyerCTA: null,
		sellerCTA: null,
	},
};

export const RolesEnum = Object.freeze({
	BUYER: "Buyer",
	SELLER: "Seller",
});
