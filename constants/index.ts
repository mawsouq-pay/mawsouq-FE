//Send enum as OrderStatusEnum.PENDING,backend sees it as "Pending"
//We receive it from backend as same "Pending" so its type is (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum]

export const OrderStatusEnum = Object.freeze({
	PENDING: "Pending", //the order was created but not paid for
	IN_PROGRESS: "In Progress", //order is paidd for , seller is "creating ig"
	IN_TRANSIT: "In transit", //seller marked it as on the way
	DELIVERED: "Delivered", //buyer marked it as delivered
	COMPLETED: "Completed", //buyer approved it so funds released
	DISPUTED: "Disputed", //buyer wants to start khena2a
	CANCELLED: "Cancelled", //order is abandoned and no updates done to it
});
export const orderStatusObject: Record<
	string,
	{ text: string; backgroundColor: string; textColor: string }
> = {
	Pending: {
		text: "pending",
		backgroundColor: "#FFF9C4", // Light Yellow
		textColor: "#000000",
	},
	"In Progress": {
		text: "in_progress",
		backgroundColor: "#BBDEFB", // Light Blue
		textColor: "#000000",
	},
	"In Transit": {
		text: "in_transit",
		backgroundColor: "#FFE0B2", // Light Orange
		textColor: "#000000",
	},
	Delivered: {
		text: "delivered",
		backgroundColor: "#C8E6C9", // Light Green
		textColor: "#000000",
	},
	Completed: {
		text: "completed",
		backgroundColor: "#A5D6A7", // Soft Green
		textColor: "#000000",
	},
	Disputed: {
		text: "disputed",
		backgroundColor: "#FFCCBC", // Light Red/Orange
		textColor: "#000000",
	},
	Cancelled: {
		text: "cancelled",
		backgroundColor: "#F0F0F0", // Light Gray
		textColor: "#000000",
	},
};

export const RolesEnum = Object.freeze({
	BUYER: "Buyer",
	SELLER: "Seller",
});
