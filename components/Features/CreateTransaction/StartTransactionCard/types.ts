import { RolesEnum } from "@/constants";

export interface StartTransactionData {
	role: RolesEnum;
	transactionTitle: string;
	description: string;
	price: string;
	deliveryDate: string;
}

export const StartTransactionFormNames = {
	role: "role",
	transactionTitle: "transactionTitle",
	description: "description",
	price: "price",
	deliveryDate: "deliveryDate",
};
