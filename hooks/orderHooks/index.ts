import { useFetch, usePost } from "@/client/customHooks";
import { serverRoutes } from "@/routes";
import {
	CreateOrderInput,
	CreateOrderResponse,
	CreatePaymentLinkInput,
	CreatePaymentLinkResponse,
	FetchOrderDetailsResponse,
	FetchOrderPreviewResponse,
	FetchOrdersResponse,
	UpdateOrderStatusInput,
	UpdateOrderStatusResponse,
} from "@/types/ordersTypes";

export const useCreateOrder = () => {
	return usePost<CreateOrderResponse, CreateOrderInput>(
		serverRoutes.createOrder
	);
};
export const useFetchOrders = () => {
	return useFetch<FetchOrdersResponse>(serverRoutes.fetchOrders, {
		queryKey: ["fetchOrders"],
	});
};
export const useFetchOrderById = (orderId: string) => {
	return useFetch<FetchOrderDetailsResponse>(
		`${serverRoutes.fetchOrderById}/${orderId}`
	);
};

export const useCreatePaymentLink = () => {
	return usePost<CreatePaymentLinkResponse, CreatePaymentLinkInput>(
		serverRoutes.createPaymentLink
	);
};
export const useUpdateOrderStatus = () => {
	return usePost<UpdateOrderStatusResponse, UpdateOrderStatusInput>(
		serverRoutes.updateOrderStatus
	);
};

export const useFetchOrderPreview = (orderId: string) => {
	return useFetch<FetchOrderPreviewResponse>(
		`${serverRoutes.fetchOrderPreview}/${orderId}`
	);
};
