import { useFetch, usePost } from "@/client/customHooks";
import { serverRoutes } from "@/routes";
import {
	CreateOrderInput,
	CreateOrderResponse,
	FetchOrdersResponse,
} from "@/types/ordersTypes";

export const useCreateOrder = () => {
	return usePost<CreateOrderResponse, CreateOrderInput>(
		serverRoutes.createOrder
	);
};
export const useFetchOrders = () => {
	return useFetch<FetchOrdersResponse>(serverRoutes.fetchOrders);
};
