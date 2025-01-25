import { useFetch, usePost } from "@/client/customHooks";
import queryClient from "@/client/reactQClient";
import { serverRoutes } from "@/routes";
import { useNotification } from "@/store/SnackBarStore";
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
import { AxiosError } from "axios";

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
		`${serverRoutes.fetchOrderById}/${orderId}`,
		{
			queryKey: ["fetchOrderById", orderId],
		}
	);
};

export const useCreatePaymentLink = () => {
	return usePost<CreatePaymentLinkResponse, CreatePaymentLinkInput>(
		serverRoutes.createPaymentLink
	);
};
export const useUpdateOrderStatus = () => {
	const { showAxiosErrorNotification } = useNotification();
	return usePost<UpdateOrderStatusResponse, UpdateOrderStatusInput>(
		serverRoutes.updateOrderStatus,
		{
			onSuccess: (response, variables) => {
				const { orderId, newStatus } = variables;
				queryClient.setQueryData(
					["fetchOrderById", orderId],
					(oldData: any) => {
						if (!oldData) return oldData;
						return {
							...oldData,
							order: {
								...oldData.order,
								status: newStatus,
							},
						};
					}
				);
			},
			onError(error) {
				showAxiosErrorNotification(error as AxiosError);
			},
		}
	);
};

export const useFetchOrderPreview = (orderId: string) => {
	return useFetch<FetchOrderPreviewResponse>(
		`${serverRoutes.fetchOrderPreview}/${orderId}`
	);
};
