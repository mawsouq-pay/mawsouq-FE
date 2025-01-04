import { OrderStatusEnum } from "@/constants";

export interface OrderProgressProps {
	status: (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum];
}
