import { OrderStatusEnum } from "@/constants";

export interface OrderActionProps {
	isFetcherSeller: boolean;
	orderStatus: keyof typeof OrderStatusEnum;
}
