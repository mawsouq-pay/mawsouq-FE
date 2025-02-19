import { Order } from "@/types/ordersTypes";

export enum OrderStatusEnum {
	PENDING_JOIN = "PENDING_JOIN", // Order created but waiting for the other party to join
	PENDING_PAYMENT = "PENDING_PAYMENT", // Buyer has joined, waiting for payment
	IN_PROGRESS = "IN_PROGRESS", // Payment completed, order in progress
	IN_TRANSIT = "IN_TRANSIT", // Seller shipped/delivered the order
	DELIVERED = "DELIVERED", // Buyer confirmed receipt
	COMPLETED = "COMPLETED", // Both parties confirmed order is finished
	DISPUTED = "DISPUTED", // Order is under dispute
	CANCELLED = "CANCELLED", // Order was cancelled
}

export enum RolesEnum {
	BUYER = "BUYER",
	SELLER = "SELLER",
}

export const orderStatusObject: Record<
	OrderStatusEnum,
	{
		text: string;
		backgroundColor: string;
		textColor: string;
		historyMessage: string;
	}
> = {
	PENDING_JOIN: {
		text: "pending_join",
		backgroundColor: "#FFF9C4",
		textColor: "#000000",
		historyMessage: "Order was created.",
	},
	PENDING_PAYMENT: {
		text: "pending_payment",
		backgroundColor: "#FFF9C4",
		textColor: "#000000",
		historyMessage:
			"Order was confirmed and is pending payment from the buyer.",
	},
	IN_PROGRESS: {
		text: "in_progress",
		backgroundColor: "#BBDEFB",
		textColor: "#000000",
		historyMessage: "Order has been paid; the seller is working on the item.",
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
	OrderStatusEnum,
	{
		activeStep: number;
		messageForBuyer: string;
		messageForSeller: string;
		buyerCTA: string | null;
		sellerCTA: string | null;
		nextStatus: OrderStatusEnum | null;
	}
> = {
	PENDING_JOIN: {
		activeStep: 0,
		messageForBuyer: "Waiting for the seller to join and accept the order.",
		messageForSeller: "Waiting for the buyer to join and accept the order.",
		buyerCTA: null,
		sellerCTA: null,
		nextStatus: OrderStatusEnum.PENDING_PAYMENT,
	},
	PENDING_PAYMENT: {
		activeStep: 1,
		messageForBuyer: "Waiting for your payment to proceed with the order.",
		messageForSeller: "Waiting for the buyer to make the payment.",
		buyerCTA: "Make Payment",
		sellerCTA: null,
		nextStatus: OrderStatusEnum.IN_PROGRESS,
	},
	IN_PROGRESS: {
		activeStep: 2,
		messageForBuyer:
			"Your order is being prepared by the seller. Please wait for updates.",
		messageForSeller:
			"The order is currently in progress. Once ready, mark it as 'Out for Delivery' to update the buyer.",
		buyerCTA: null,
		sellerCTA: "Mark as Out for Delivery",
		nextStatus: OrderStatusEnum.IN_TRANSIT,
	},

	IN_TRANSIT: {
		activeStep: 3,
		messageForBuyer:
			"Your order is currently in transit. Please confirm receipt once it has been delivered.",
		messageForSeller:
			"The order is in transit and on its way to the buyer. Awaiting confirmation from the buyer upon delivery.",
		buyerCTA: "Mark as Delivered",
		sellerCTA: null,
		nextStatus: OrderStatusEnum.DELIVERED,
	},

	DELIVERED: {
		activeStep: 4,
		messageForBuyer: "Order Is Delivered , awaiting your payment",
		messageForSeller: "Order Is Delivered , awaiting buyer release",
		buyerCTA: "Confirm Release",
		sellerCTA: null,
		nextStatus: OrderStatusEnum.COMPLETED,
	},
	COMPLETED: {
		activeStep: 5,
		messageForBuyer: "Thank you! Your order is completed.",
		messageForSeller:
			"The order is completed, and the payment has been released.",
		buyerCTA: null,
		sellerCTA: null,
		nextStatus: null,
	},
	DISPUTED: {
		activeStep: 4,
		messageForBuyer:
			"A dispute has been raised. Provide details to resolve it.",
		messageForSeller:
			"A dispute has been raised. Provide details to resolve it.",
		buyerCTA: "Submit Dispute Details",
		sellerCTA: "Submit Dispute Details",
		nextStatus: OrderStatusEnum.COMPLETED,
	},
	CANCELLED: {
		activeStep: 0,
		messageForBuyer: "The order has been cancelled.",
		messageForSeller: "The order has been cancelled.",
		buyerCTA: null,
		sellerCTA: null,
		nextStatus: null,
	},
};

export const orderStatusConfirmationMessages: Record<
	OrderStatusEnum,
	{ title: string; message: string }
> = {
	PENDING_JOIN: {
		title: "",
		message: "",
	},
	PENDING_PAYMENT: {
		title: "Mark as In Progress?",
		message: "Are you sure you want to proceed in the order by paying?",
	},
	IN_PROGRESS: {
		title: "Mark as In Transit?",
		message: "Are you sure you want to mark order as out for delivery?",
	},
	IN_TRANSIT: {
		title: "Mark as Delivered?",
		message: "Confirm that the order has been successfully delivered.",
	},
	DELIVERED: {
		title: "Complete Order?",
		message: "Final confirmation needed to mark the order as Completed.",
	},
	COMPLETED: {
		title: "Complete Order?",
		message: "Final confirmation needed to mark the order as Completed.",
	},
	CANCELLED: {
		title: "Cancel Order?",
		message:
			"Are you sure you want to cancel this order? This action cannot be undone.",
	},
	DISPUTED: {
		title: "Cancel Order?",
		message:
			"Are you sure you want to cancel this order? This action cannot be undone.",
	},
};

export const BANK_CODES = [
	{ name: "Ahli United Bank", code: "AUB" },
	{ name: "MIDBANK", code: "MIDB" },
	{ name: "Banque Du Caire", code: "BDC" },
	{ name: "HSBC Bank Egypt S.A.E", code: "HSBC" },
	{ name: "Credit Agricole Egypt S.A.E", code: "CAE" },
	{ name: "Egyptian Gulf Bank", code: "EGB" },
	{ name: "The United Bank", code: "UB" },
	{ name: "Qatar National Bank Alahli", code: "QNB" },
	{ name: "Arab Bank PLC", code: "ARAB" },
	{ name: "Emirates National Bank of Dubai", code: "ENBD" },
	{ name: "Al Ahli Bank of Kuwait – Egypt", code: "ABK" },
	{ name: "National Bank of Kuwait – Egypt", code: "NBK" },
	{ name: "Arab Banking Corporation - Egypt S.A.E", code: "ABC" },
	{ name: "First Abu Dhabi Bank", code: "FAB" },
	{ name: "Abu Dhabi Islamic Bank – Egypt", code: "ADIB" },
	{ name: "Commercial International Bank - Egypt S.A.E", code: "CIB" },
	{ name: "Housing And Development Bank", code: "HDB" },
	{ name: "Banque Misr", code: "MISR" },
	{ name: "Arab African International Bank", code: "AAIB" },
	{ name: "Egyptian Arab Land Bank", code: "EALB" },
	{ name: "Export Development Bank of Egypt", code: "EDBE" },
	{ name: "Faisal Islamic Bank of Egypt", code: "FAIB" },
	{ name: "Blom Bank", code: "BLOM" },
	{ name: "Abu Dhabi Commercial Bank – Egypt", code: "ADCB" },
	{ name: "Alex Bank Egypt", code: "BOA" },
	{ name: "Societe Arabe Internationale De Banque", code: "SAIB" },
	{ name: "National Bank of Egypt", code: "NBE" },
	{ name: "Al Baraka Bank Egypt B.S.C.", code: "ABRK" },
	{ name: "Egypt Post", code: "POST" },
	{ name: "Nasser Social Bank", code: "NSB" },
	{ name: "Industrial Development Bank", code: "IDB" },
	{ name: "Suez Canal Bank", code: "SCB" },
	{ name: "Mashreq Bank", code: "MASH" },
	{ name: "Arab Investment Bank", code: "AIB" },
	{ name: "General Authority For Supply Commodities", code: "GASC" },
	{ name: "Arab International Bank", code: "ARIB" },
	{ name: "Agricultural Bank of Egypt", code: "PDAC" },
	{ name: "National Bank of Greece", code: "NBG" },
	{ name: "Central Bank Of Egypt", code: "CBE" },
	{ name: "ATTIJARIWAFA BANK Egypt", code: "BBE" },
];
export type BankCode = (typeof BANK_CODES)[number]["code"];
export const bankCodeValues = BANK_CODES.map((bank) => bank.code);
export enum PayoutMethodEnum {
	VODAFONE = "vodafone",
	ETISALAT = "etisalat",
	ORANGE = "orange",
	BANK_WALLET = "bank_wallet",
	BANK_CARD = "bank_card",
}
