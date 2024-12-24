import { OrderStatusEnum } from "@/constants";

export interface OrderListItemProps {
	transactionTitle: string;
	itemName: string;
	price: number;
	status: (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum];
	deliveryDate: string;
}
