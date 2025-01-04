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
	{ text: string; backgroundColor: string; textColor: string }
> = {
	PENDING: {
		text: "pending",
		backgroundColor: "#FFF9C4", // Light Yellow
		textColor: "#000000",
	},
	IN_PROGRESS: {
		text: "in_progress",
		backgroundColor: "#BBDEFB", // Light Blue
		textColor: "#000000",
	},
	IN_TRANSIT: {
		text: "in_transit",
		backgroundColor: "#FFE0B2", // Light Orange
		textColor: "#000000",
	},
	DELIVERED: {
		text: "delivered",
		backgroundColor: "#C8E6C9", // Light Green
		textColor: "#000000",
	},
	COMPLETED: {
		text: "completed",
		backgroundColor: "#A5D6A7", // Soft Green
		textColor: "#000000",
	},
	DISPUTED: {
		text: "disputed",
		backgroundColor: "#FFCCBC", // Light Red/Orange
		textColor: "#000000",
	},
	CANCELLED: {
		text: "cancelled",
		backgroundColor: "#F0F0F0", // Light Gray
		textColor: "#000000",
	},
};

export const RolesEnum = Object.freeze({
	BUYER: "Buyer",
	SELLER: "Seller",
});
