import { OrderStatusEnum } from "@/constants";

export interface HorizontalCardProps {
	transactionTitle: string;
	itemName: string;
	price: number;
	status: (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum];
	deliveryDate: string;
}
export interface RenderValueProps {
	value: string;
	color: string;
	size?: string;
	weight?: string;
	currencyText?: string;
	mobileFontSize?: string;
}
