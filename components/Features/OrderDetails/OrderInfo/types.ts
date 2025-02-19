import { OrderStatusEnum } from "@/constants";

export interface OrderInfoProps {
	transactionTitle: string;
	description: string;
	price: number;
	status: OrderStatusEnum;
	deliveryDate: string;
}
