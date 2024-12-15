import { useFetch } from "@/client/customHooks"
import { serverRoutes } from "@/routes"
import { FetchOrdersResponse } from "@/types/ordersTypes";

export const useFetchOrders = () => {

    return useFetch<FetchOrdersResponse>(serverRoutes.fetchOrders);
};