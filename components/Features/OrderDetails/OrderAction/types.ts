import { OrderStatusEnum } from "@/constants";

export interface OrderActionProps {
	orderId: string;
	isFetcherSeller: boolean;
	orderStatus: OrderStatusEnum;
	setIsDisputeFormOpen: () => void;
}
