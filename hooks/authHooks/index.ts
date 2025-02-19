import { useFetch, usePost } from "@/client/customHooks";
import { serverRoutes } from "@/routes";
import {
	CreatePaymentMethodInput,
	CreatePaymentMethodResponse,
	GetUserPayoutOptionsResponse,
	LoginInput,
	LoginResponse,
	RegisterInput,
	RegisterResponse,
} from "@/types/authenticationTypes";

export const useRegister = () => {
	return usePost<RegisterResponse, RegisterInput>(serverRoutes.register);
};

export const useLogin = () => {
	return usePost<LoginResponse, LoginInput>(serverRoutes.login);
};
export const useCreatePayoutMethod = () => {
	return usePost<CreatePaymentMethodResponse, CreatePaymentMethodInput>(
		serverRoutes.createPayouttMethod
	);
};

export const useGetUserPayoutOptions = () => {
	return useFetch<GetUserPayoutOptionsResponse>(
		serverRoutes.getUserPayoutOptions,
		{
			queryKey: ["getUserPayoutOptionsK"],
		}
	);
};
