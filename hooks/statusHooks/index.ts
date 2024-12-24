import { OrderStatusEnum, orderStatusObject } from "@/constants";
import { Order } from "@/types/ordersTypes";

export const useUserStats = (orders?: Order[]) => {
	const numberOfactiveTransactions =
		orders?.filter((order) => order.status === OrderStatusEnum.PENDING)
			.length || 0;

	return { numberOfactiveTransactions, walletBalance: 50 };
};
