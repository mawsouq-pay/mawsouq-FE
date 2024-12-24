import { OrderStatusEnum, RolesEnum } from "@/constants";

export interface Order {
	_id: string;
	buyer?: string | null;
	seller?: string | null;
	transactionTitle: string;
	itemName: string;
	price: number;
	description: string;
	quantity: number;
	deliveryDate: string;
	otherPartyEmail?: string | null;
	otherPartyPhone?: string | null;
	isFetcherSeller: boolean;
	status: (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum];
	statusHistory: {
		status: (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum];
		updatedAt: string; // "2025-01-01T00:00:00.000Z"
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
