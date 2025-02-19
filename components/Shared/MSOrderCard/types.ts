import { OrderStatusEnum } from "@/constants";

export interface OrderCardProps {
	transactionTitle: string;
	price: number;
	status: OrderStatusEnum;
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
