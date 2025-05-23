import { useFetch, usePost } from "@/client/customHooks";
import queryClient from "@/client/reactQClient";
import { OrderStatusEnum } from "@/constants";
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
	SellerReleaseInput,
	SellerReleaseResponse,
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
				console.log("-----ERROR IN UPDATING STATUS-------", error);
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

export const useSellerRelease = () => {
	const { showAxiosErrorNotification } = useNotification();

	return usePost<SellerReleaseResponse, SellerReleaseInput>(
		serverRoutes.sellerRelease,
		{
			onSuccess(data, variables, context) {
				const { orderId } = variables;
				queryClient.setQueryData(
					["fetchOrderById", orderId],
					(oldData: any) => {
						if (!oldData) return oldData;
						return {
							...oldData,
							order: {
								...oldData.order,
								status: OrderStatusEnum.COMPLETED,
							},
						};
					}
				);
			},
			onError(error, variables, context) {
				showAxiosErrorNotification(error as AxiosError);
			},
		}
	);
};
