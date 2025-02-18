import { OrderStatusEnum } from "@/constants";

export interface OrderListItemProps {
	transactionTitle: string;
	price: number;
	status: OrderStatusEnum;
	deliveryDate: string;
	isFetcherSeller: boolean;
	otherPartyName?: string | null;
}
