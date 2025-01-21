import { OrderStatusEnum, RolesEnum } from "@/constants";
import { User } from "../authenticationTypes";

export interface Order {
	_id: string;
	buyer?: User | null;
	seller?: User | null;
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
		timestamp: string; // "2025-01-01T00:00:00.000Z"
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

export interface FetchOrderDetailsResponse {
	order: Order;
}

export interface CreatePaymentLinkInput {
	orderId: string;
}

export interface CreatePaymentLinkResponse {
	message: string;
	iframeLink: string;
}

export interface UpdateOrderStatusInput {
	orderId: string;
	newStatus: keyof typeof OrderStatusEnum;
}

export interface UpdateOrderStatusResponse {
	message: string;
	order: Order;
}

export interface FetchOrderPreviewResponse {
	order: Order;
}
