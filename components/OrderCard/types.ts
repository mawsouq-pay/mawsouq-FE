import { OrderStatusEnum } from "@/constants";

export interface OrderCardProps {
	transactionTitle: string;
	itemName: string;
	price: number;
	status: (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum];
	deliveryDate: string;
	onPress: () => void;
	isFetcherSeller: boolean;
	otherPartyName?: string | null;
}
export interface RenderValueProps {
	value: string;
	color: string;
	size?: string;
	weight?: string;
	currencyText?: string;
	mobileFontSize?: string;
}
