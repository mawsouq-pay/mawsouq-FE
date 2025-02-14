import { RolesEnum } from "@/constants";

export interface StartTransactionData {
	role: keyof typeof RolesEnum;
	transactionTitle: string;
	description: string;
	price: string;
	deliveryDate: string;
	otherPartyEmail: string;
	otherPartyPhone: string;
}
