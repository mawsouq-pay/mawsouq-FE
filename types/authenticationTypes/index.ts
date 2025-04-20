import { PayoutMethodEnum, BankCode } from "@/constants";

export interface User {
	_id: string;
	name: string;
	phone: string;
	email: string;
	payoutOptions?: PayoutDetailsT[];
}
export interface PayoutDetailsT {
	_id?: string;
	method: PayoutMethodEnum;
	phoneNumber: string;
	fullName: string;
	cardNumber?: string;
	bankCode?: BankCode;
}

export interface GenerateUserOtpInput {
	email: string;
	phone: string;
}
export interface GenerateUserOtpResponse {
	email: string;
	phone: string;
}
export interface VerifyUserOtpInput {
	phone: string;
	otp: string;
}
export interface VerifyUserOtpResponse {
	verified: string;
	message: string;
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
	need_verification: boolean;
}

export interface CreatePaymentMethodInput extends PayoutDetailsT {}

export interface CreatePaymentMethodResponse {
	message: String;
	payment: PayoutDetailsT;
}
export interface GetUserPayoutOptionsResponse {
	payoutOptions?: PayoutDetailsT[];
}

export interface DeletePayoutOptionResponse {
	success: string;
}
export interface DeletePayoutOptionInput {
	payoutId: string;
}

export interface EditPayoutOptionInput {
	updateData: PayoutDetailsT;
}
export interface EditPayoutOptionResponse {
	payoutMethod: PayoutDetailsT;
}

export interface ResetPasswordInput {
	email: string;
}
export interface ResetPasswordResponse {
	resetPasswordToken: string;
	name: string;
}

export interface UpdatePasswordInput {
	newPassword: string;
	token: string;
}
export interface UpdatePasswordResponse {
	message: string;
}
