import { PayoutMethodEnum, BankCode } from "@/constants";

export interface User {
	name: string;
	phone: string;
	email: string;
	payoutOptions?: PayoutDetailsT[];
}
export interface PayoutDetailsT {
	method: PayoutMethodEnum;
	phoneNumber: string;
	fullName: string;
	cardNumber?: string;
	bankCode?: BankCode;
}
export interface LoginInput {
	email: string;
	password: string;
}

export interface LoginResponse {
	id: string;
	phone: string;
	name: string;
	email: string;
	payoutOptions?: PayoutDetailsT[];
}
export interface RegisterInput {
	name: string;
	phone: string;
	email: string;
	password: string;
}

export interface RegisterResponse {
	id: string;
	phone: string;
	name: string;
	email: string;
}

export interface CreatePaymentMethodInput {
	method: PayoutMethodEnum;
	phoneNumber: string;
	fullName: string;
	cardNumber?: string;
	bankCode?: BankCode;
}
export interface CreatePaymentMethodResponse {
	message: String;
	payment: PayoutDetailsT;
}
export interface GetUserPayoutOptionsResponse {
	message: string;
	payoutOptions?: PayoutDetailsT[];
}
