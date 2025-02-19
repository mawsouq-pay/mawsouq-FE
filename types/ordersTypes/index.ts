import { OrderStatusEnum, RolesEnum } from "@/constants";
import { User } from "../authenticationTypes";

export interface Order {
	_id: string;
	buyer?: User | null;
	seller?: User | null;
	transactionTitle: string;
	price: number;
	description: string;
	deliveryDate: string;
	otherPartyEmail?: string | null;
	otherPartyPhone?: string | null;
	isFetcherSeller: boolean;
	status: OrderStatusEnum;
	statusHistory: {
		status: OrderStatusEnum;
		timestamp: string; // "2025-01-01T00:00:00.000Z"
	}[];
}

export interface CreateOrderInput {
	transactionTitle: string;
	price: number;
	description: string;
	deliveryDate: Date;
	role: RolesEnum;
}

export interface CreateOrderResponse {
	message: string;
	order: Order;
}
export interface LinkOrderInput {
	orderId: string;
}
export interface LinkOrderResponse {
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
	newStatus: OrderStatusEnum;
}

export interface UpdateOrderStatusResponse {
	message: string;
	order: Order;
}

export interface FetchOrderPreviewResponse {
	order: Order;
}

export interface SellerReleaseInput {
	orderId: string;
}

export interface SellerReleaseResponse {
	order: Order;
}
