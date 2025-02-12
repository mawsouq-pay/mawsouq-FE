import { OrderStatusEnum } from "@/constants";

export interface OrderInfoProps {
	transactionTitle: string;
	description: string;
	price: number;
	status: (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum];
	deliveryDate: string;
}
