import { requestProcessor } from "@/client/axiosClient";
import { useFetch, usePost } from "@/client/customHooks";
import queryClient from "@/client/reactQClient";
import { OrderStatusEnum } from "@/constants";
import { textTr } from "@/constants/locales";
import {
	FetchOrderTracker,
	OrderActionsTracker,
	OrderPaymentLinkTracker,
	OrderTracker,
} from "@/helpers/tracking";
import { serverRoutes } from "@/routes";
import { localeEnum } from "@/store/LocaleStore";
import { useNotification } from "@/store/SnackBarStore";
import {
	CaptureOrderInput,
	CaptureOrderResponse,
	CreateDisputeInput,
	CreateDisputeResponse,
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
		serverRoutes.createOrder,
		{
			onSuccess(data) {
				OrderTracker.submitSuccess(data?.data);
				queryClient.invalidateQueries({ queryKey: ["fetchOrders"] });
			},
			onError(error, variables) {
				OrderTracker.submitFailed(error, variables);
			},
		}
	);
};

export const useFetchOrders = () => {
	FetchOrderTracker.fetchOrdersIntent();
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
export const preFetchOrderById = async (
	orderId: string
): Promise<FetchOrderDetailsResponse> => {
	const response = await requestProcessor.get<FetchOrderDetailsResponse>(
		`${serverRoutes.fetchOrderById}/${orderId}`
	);
	return response.data;
};

export const useCreatePaymentLink = () => {
	return usePost<CreatePaymentLinkResponse, CreatePaymentLinkInput>(
		serverRoutes.createPaymentLink,
		{
			onSuccess(data, variables, context) {
				OrderPaymentLinkTracker.generatePaymentLinkSuccess(variables?.orderId);
			},
			onError(error, variables) {
				OrderPaymentLinkTracker.generatePaymentLinkFailed(
					error,
					variables.orderId
				);
			},
		}
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
					(oldData: FetchOrderDetailsResponse) => {
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
				OrderActionsTracker.updateOrderStatusSuccess(
					orderId,
					newStatus,
					response?.data?.order?.isFetcherSeller
				);
			},
			onError(error, variables) {
				console.log("-----ERROR IN UPDATING STATUS-------", error);
				showAxiosErrorNotification(error as AxiosError);
				OrderActionsTracker.updateOrderStatusFailed(
					error,
					variables?.orderId,
					variables?.newStatus
				);
			},
		}
	);
};

export const useFetchOrderPreview = (orderId: string) => {
	return useFetch<FetchOrderPreviewResponse>(
		`${serverRoutes.fetchOrderPreview}/${orderId}`
	);
};

export const useSellerRelease = (locale: localeEnum) => {
	const text = textTr(locale);
	const { showAxiosErrorNotification, showSuccessNotification } =
		useNotification();

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
				showSuccessNotification(text.transactionReleased);
				OrderActionsTracker.releasePaymentSuccess(orderId);
			},
			onError(error, variables) {
				showAxiosErrorNotification(error as AxiosError);
				OrderActionsTracker.releasePaymentFailed(error, variables.orderId);
			},
		}
	);
};

export const useCreateDispute = () => {
	return usePost<CreateDisputeResponse, CreateDisputeInput>(
		serverRoutes.createDispute,
		{
			onSuccess(data, variables, context) {
				const { orderId } = variables;
				queryClient.setQueryData(
					["fetchOrderById", orderId],
					(oldData: FetchOrderDetailsResponse) => {
						if (!oldData) return oldData;
						return {
							...oldData,
							order: {
								...oldData.order,
								status: OrderStatusEnum.DISPUTED,
							},
						};
					}
				);
				OrderActionsTracker.disputeSubmissionSuccess(data?.data);
			},
			onError(error, variables) {
				OrderActionsTracker.disputeSubmissionFailed(
					error,
					variables?.orderId,
					variables?.type,
					variables?.description
				);
			},
		}
	);
};
