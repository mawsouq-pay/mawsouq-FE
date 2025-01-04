import { OrderStatusEnum, orderStatusObject } from "@/constants";
import { Order } from "@/types/ordersTypes";

export const useUserStats = (orders?: Order[]) => {
	const activeStates: (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum][] =
		[
			OrderStatusEnum.PENDING,
			OrderStatusEnum.IN_PROGRESS,
			OrderStatusEnum.IN_TRANSIT,
			OrderStatusEnum.DISPUTED,
		];

	const numberOfActiveTransactions =
		orders?.filter((order) => activeStates.includes(order.status)).length || 0;

	const actionRequiredStates: (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum][] =
		[
			OrderStatusEnum.PENDING,
			OrderStatusEnum.DISPUTED,
			OrderStatusEnum.IN_PROGRESS,
		];

	const numberOfTransactionsNeedingAction =
		orders?.filter((order) => actionRequiredStates.includes(order.status))
			.length || 0;
	console.log(numberOfActiveTransactions, "HHSHSHHS");
	return {
		numberOfActiveTransactions,
		numberOfTransactionsNeedingAction,
		walletBalance: 50,
	};
};
