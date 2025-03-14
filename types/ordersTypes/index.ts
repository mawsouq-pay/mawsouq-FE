import {
	DisputeStatusEnum,
	DisputeTypeEnum,
	OrderStatusEnum,
	RolesEnum,
} from "@/constants";
import { User } from "../authenticationTypes";

export interface Order {
	_id: string;
	buyer?: User | null;
	seller?: User | null;
	transactionTitle: string;
	price: number;
	fees: number;
	description: string;
	deliveryDate: string;
	isFetcherSeller: boolean;
	status: OrderStatusEnum;
	statusHistory: {
		status: OrderStatusEnum;
		timestamp: string; // "2025-01-01T00:00:00.000Z"
	}[];
	initiatedBy: RolesEnum;
}

export interface CreateOrderInput {
	transactionTitle: string;
	price: number;
	fees: number;
	description: string;
	deliveryDate: Date;
	role: RolesEnum;
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
export interface CaptureOrderInput {
	orderId: string;
}
export interface CaptureOrderResponse {
	order: Order;
}

export interface DisputeModel {
	initiatedBy: RolesEnum;
	orderId: string;
	raisedBy: string;
	raisedByType: RolesEnum;
	type: DisputeTypeEnum;
	description: string;
	status: DisputeStatusEnum;
	updatedAt: string;
	createdAt: string;
}

export interface CreateDisputeInput {
	orderId: string;
	type: DisputeTypeEnum;
	description: string;
}

export interface CreateDisputeResponse {
	dispute: DisputeModel;
}
