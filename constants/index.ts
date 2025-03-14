export enum OrderStatusEnum {
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
		text: OrderStatusEnum;
		backgroundColor: string;
		textColor: string;
		historyMessage: string;
	}
> = {
	[OrderStatusEnum.PENDING_PAYMENT]: {
		text: OrderStatusEnum.PENDING_PAYMENT,
		backgroundColor: "#FFF9C4",
		textColor: "#000000",
		historyMessage:
			"Order was confirmed and is pending payment from the buyer.",
	},
	[OrderStatusEnum.IN_PROGRESS]: {
		text: OrderStatusEnum.IN_PROGRESS,
		backgroundColor: "#BBDEFB",
		textColor: "#000000",
		historyMessage: "Order has been paid; the seller is working on the item.",
	},
	[OrderStatusEnum.IN_TRANSIT]: {
		text: OrderStatusEnum.IN_TRANSIT,
		backgroundColor: "#FFE0B2",
		textColor: "#000000",
		historyMessage: "Order is on the way; the seller has dispatched the item.",
	},
	[OrderStatusEnum.DELIVERED]: {
		text: OrderStatusEnum.DELIVERED,
		backgroundColor: "#C8E6C9",
		textColor: "#000000",
		historyMessage: "Order has been delivered to the buyer.",
	},
	[OrderStatusEnum.COMPLETED]: {
		text: OrderStatusEnum.COMPLETED,
		backgroundColor: "#A5D6A7",
		textColor: "#000000",
		historyMessage: "Order is completed; the buyer approved the delivery.",
	},
	[OrderStatusEnum.DISPUTED]: {
		text: OrderStatusEnum.DISPUTED,
		backgroundColor: "#FFCCBC",
		textColor: "#000000",
		historyMessage: "The order is disputed; the buyer has raised an issue.",
	},
	[OrderStatusEnum.CANCELLED]: {
		text: OrderStatusEnum.CANCELLED,
		backgroundColor: "#F0F0F0",
		textColor: "#000000",
		historyMessage: "The order has been cancelled and is no longer active.",
	},
};

export enum OrderProgressMessages {
	ORDER_PENDING_PAYMENT_BUYER = "ORDER_PENDING_PAYMENT_BUYER",
	ORDER_PENDING_PAYMENT_SELLER = "ORDER_PENDING_PAYMENT_SELLER",

	ORDER_IN_PROGRESS_BUYER = "ORDER_IN_PROGRESS_BUYER",
	ORDER_IN_PROGRESS_SELLER = "ORDER_IN_PROGRESS_SELLER",

	ORDER_IN_TRANSIT_BUYER = "ORDER_IN_TRANSIT_BUYER",
	ORDER_IN_TRANSIT_SELLER = "ORDER_IN_TRANSIT_SELLER",

	ORDER_DELIVERED_BUYER = "ORDER_DELIVERED_BUYER",
	ORDER_DELIVERED_SELLER = "ORDER_DELIVERED_SELLER",

	ORDER_COMPLETED_BUYER = "ORDER_COMPLETED_BUYER",
	ORDER_COMPLETED_SELLER = "ORDER_COMPLETED_SELLER",

	ORDER_DISPUTED_BUYER = "ORDER_DISPUTED_BUYER",
	ORDER_DISPUTED_SELLER = "ORDER_DISPUTED_SELLER",

	ORDER_CANCELLED_BUYER = "ORDER_CANCELLED_BUYER",
	ORDER_CANCELLED_SELLER = "ORDER_CANCELLED_SELLER",
}

export enum OrderActionCTAType {
	UPDATE = "update",
	DANGER = "danger",
}
export type OrderActionT = {
	label: string;
	key: string;
	type?: OrderActionCTAType;
	status: OrderStatusEnum;
};

export const orderProgressBarData: Record<
	OrderStatusEnum,
	{
		activeStep: number;
		messageForBuyer: OrderProgressMessages;
		messageForSeller: OrderProgressMessages;
		buyerActions: OrderActionT[];
		sellerActions: OrderActionT[];
	}
> = {
	PENDING_PAYMENT: {
		activeStep: 0,
		messageForBuyer: OrderProgressMessages.ORDER_PENDING_PAYMENT_BUYER,
		messageForSeller: OrderProgressMessages.ORDER_PENDING_PAYMENT_SELLER,
		buyerActions: [
			{
				label: "Make Payment",
				key: "createPaymentLink",
				status: OrderStatusEnum.PENDING_PAYMENT,
			},
		],
		sellerActions: [],
	},

	IN_PROGRESS: {
		activeStep: 1,
		messageForBuyer: OrderProgressMessages.ORDER_IN_PROGRESS_BUYER,
		messageForSeller: OrderProgressMessages.ORDER_IN_PROGRESS_SELLER,
		buyerActions: [
			{
				label: "Confirm Release",
				key: "releasePayment",
				status: OrderStatusEnum.COMPLETED,
			},
			{
				label: "Send Complaint",
				key: "openDispute",
				type: OrderActionCTAType.DANGER,
				status: OrderStatusEnum.DISPUTED,
			},
		],
		sellerActions: [
			{
				label: "Mark as Out for Delivery",
				key: "updateOrderToInTransit",
				status: OrderStatusEnum.IN_TRANSIT,
			},
		],
	},

	IN_TRANSIT: {
		activeStep: 1,
		messageForBuyer: OrderProgressMessages.ORDER_IN_TRANSIT_BUYER,
		messageForSeller: OrderProgressMessages.ORDER_IN_TRANSIT_SELLER,
		buyerActions: [
			{
				label: "Confirm Release",
				key: "releasePayment",
				status: OrderStatusEnum.COMPLETED,
			},
			{
				label: "Send Complaint",
				key: "openDispute",
				type: OrderActionCTAType.DANGER,
				status: OrderStatusEnum.DISPUTED,
			},
		],
		sellerActions: [
			{
				label: "Submit Complaint",
				key: "openDispute",
				type: OrderActionCTAType.DANGER,
				status: OrderStatusEnum.DISPUTED,
			},
		],
	},

	DELIVERED: {
		activeStep: 1,
		messageForBuyer: OrderProgressMessages.ORDER_DELIVERED_BUYER,
		messageForSeller: OrderProgressMessages.ORDER_DELIVERED_SELLER,
		buyerActions: [],
		sellerActions: [],
	},

	COMPLETED: {
		activeStep: 2,
		messageForBuyer: OrderProgressMessages.ORDER_COMPLETED_BUYER,
		messageForSeller: OrderProgressMessages.ORDER_COMPLETED_SELLER,
		buyerActions: [],
		sellerActions: [],
	},

	DISPUTED: {
		activeStep: 1,
		messageForBuyer: OrderProgressMessages.ORDER_DISPUTED_BUYER,
		messageForSeller: OrderProgressMessages.ORDER_DISPUTED_SELLER,
		buyerActions: [],
		sellerActions: [],
	},

	CANCELLED: {
		activeStep: 3,
		messageForBuyer: OrderProgressMessages.ORDER_CANCELLED_BUYER,
		messageForSeller: OrderProgressMessages.ORDER_CANCELLED_SELLER,
		buyerActions: [],
		sellerActions: [],
	},
};

export enum OrderConfirmationMessages {
	ORDER_PENDING_PAYMENT_TITLE = "ORDER_PENDING_PAYMENT_TITLE",
	ORDER_PENDING_PAYMENT_MESSAGE = "ORDER_PENDING_PAYMENT_MESSAGE",

	ORDER_IN_PROGRESS_TITLE = "ORDER_IN_PROGRESS_TITLE",
	ORDER_IN_PROGRESS_MESSAGE = "ORDER_IN_PROGRESS_MESSAGE",

	ORDER_IN_TRANSIT_TITLE = "ORDER_IN_TRANSIT_TITLE",
	ORDER_IN_TRANSIT_MESSAGE = "ORDER_IN_TRANSIT_MESSAGE",

	ORDER_DELIVERED_TITLE = "ORDER_DELIVERED_TITLE",
	ORDER_DELIVERED_MESSAGE = "ORDER_DELIVERED_MESSAGE",

	ORDER_COMPLETED_TITLE = "ORDER_COMPLETED_TITLE",
	ORDER_COMPLETED_MESSAGE = "ORDER_COMPLETED_MESSAGE",

	ORDER_CANCELLED_TITLE = "ORDER_CANCELLED_TITLE",
	ORDER_CANCELLED_MESSAGE = "ORDER_CANCELLED_MESSAGE",

	ORDER_DISPUTED_TITLE = "ORDER_DISPUTED_TITLE",
	ORDER_DISPUTED_MESSAGE = "ORDER_DISPUTED_MESSAGE",
}
export const orderStatusConfirmationMessages: Record<
	OrderStatusEnum,
	{ title: OrderConfirmationMessages; message: OrderConfirmationMessages }
> = {
	PENDING_PAYMENT: {
		title: OrderConfirmationMessages.ORDER_PENDING_PAYMENT_TITLE,
		message: OrderConfirmationMessages.ORDER_PENDING_PAYMENT_MESSAGE,
	},
	IN_PROGRESS: {
		title: OrderConfirmationMessages.ORDER_IN_PROGRESS_TITLE,
		message: OrderConfirmationMessages.ORDER_IN_PROGRESS_MESSAGE,
	},
	IN_TRANSIT: {
		title: OrderConfirmationMessages.ORDER_IN_TRANSIT_TITLE,
		message: OrderConfirmationMessages.ORDER_IN_TRANSIT_MESSAGE,
	},
	DELIVERED: {
		title: OrderConfirmationMessages.ORDER_DELIVERED_TITLE,
		message: OrderConfirmationMessages.ORDER_DELIVERED_MESSAGE,
	},
	COMPLETED: {
		title: OrderConfirmationMessages.ORDER_COMPLETED_TITLE,
		message: OrderConfirmationMessages.ORDER_COMPLETED_MESSAGE,
	},
	CANCELLED: {
		title: OrderConfirmationMessages.ORDER_CANCELLED_TITLE,
		message: OrderConfirmationMessages.ORDER_CANCELLED_MESSAGE,
	},
	DISPUTED: {
		title: OrderConfirmationMessages.ORDER_DISPUTED_TITLE,
		message: OrderConfirmationMessages.ORDER_DISPUTED_MESSAGE,
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
export enum DisputeTypeEnum {
	QUALITY_ISSUE = "QUALITY_ISSUE",
	INCORRECT_ITEM = "INCORRECT_ITEM",
	DAMAGED_ITEM = "DAMAGED_ITEM",
	OTHER = "OTHER",
	NOT_RECEIVED = "NOT_RECEIVED",
}
export enum DisputeStatusEnum {
	PENDING = "PENDING",
	UNDER_REVIEW = "UNDER_REVIEW",
	RESOLVED = "RESOLVED",
	REJECTED = "REJECTED",
}
