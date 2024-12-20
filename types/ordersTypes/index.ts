//WHEN SENDING ANYTHING IN THE ENUMS WE SEND IT AS OrderStatusEnum.PENDING maslan
//backend sees it as "Pending"
//WHen receiveing anything from backend it is sent the same so we get it as "Pending" so its type is
//(typeof OrderStatusEnum)[keyof typeof OrderStatusEnum]
const OrderStatusEnum = Object.freeze({
	PENDING: "Pending", //the order was created but not paid for
	IN_PROGRESS: "In Progress", //order is paidd for , seller is "creating ig"
	IN_TRANSIT: "In transit", //seller marked it as on the way
	DELIVERED: "Delivered", //buyer marked it as delivered
	COMPLETED: "Completed", //buyer approved it so funds released
	DISPUTED: "Disputed", //buyer wants to start khena2a
	CANCELLED: "Cancelled", //order is abandoned and no updates done to it
});
export const RolesEnum = Object.freeze({
	BUYER: "Buyer",
	SELLER: "Seller",
});

export interface Order {
	_id: string;
	buyer?: string | null;
	seller?: string | null;
	title: string;
	itemName: string;
	price: number;
	description: string;
	quantity: number;
	deliveryDate: Date;
	otherPartyEmail?: string | null;
	otherPartyPhone?: string | null;
	isFetcherSeller: boolean;
	status: (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum];
	statusHistory: {
		status: (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum];
		updatedAt: Date;
		updatedBy: string;
	}[];
}

export interface CreateOrderInput {
	transactionTitle: string;
	itemName: string;
	price: number;
	description: string;
	quantity: number;
	deliveryDate: Date;
	otherPartyEmail: string;
	otherPartyPhone: string;
	role: (typeof RolesEnum)[keyof typeof RolesEnum];
}

export interface CreateOrderResponse {
	message: string;
	order: Order;
}

export interface FetchOrdersResponse {
	message: string;
	orders?: Order[];
}
