import { OrderStatusEnum } from "@/constants";

export interface OrderListItemProps {
	transactionTitle: string;
	price: number;
	status: (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum];
	deliveryDate: string;
	isFetcherSeller: boolean;
	otherPartyName?: string | null;
}
