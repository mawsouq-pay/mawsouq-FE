import { useFetch, usePost } from "@/client/customHooks";
import queryClient from "@/client/reactQClient";
import { serverRoutes } from "@/routes";
import {
	CreatePaymentMethodInput,
	CreatePaymentMethodResponse,
	DeletePayoutOptionInput,
	DeletePayoutOptionResponse,
	EditPayoutOptionResponse,
	GetUserPayoutOptionsResponse,
	LoginInput,
	LoginResponse,
	PayoutDetailsT,
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

export const useDeleteUserPayoutOption = () => {
	return usePost<DeletePayoutOptionResponse, DeletePayoutOptionInput>(
		serverRoutes.deletePayoutOption,
		{
			onSuccess: (data, variables) => {
				const { payoutId } = variables;

				const cachedPayoutOptions =
					queryClient.getQueryData<GetUserPayoutOptionsResponse>([
						"getUserPayoutOptionsK",
					]);
				if (cachedPayoutOptions) {
					const updatedPayoutOptions =
						cachedPayoutOptions?.payoutOptions?.filter(
							(option) => option._id !== payoutId
						);
					const updateData = {
						payoutOptions: updatedPayoutOptions,
					};
					queryClient.setQueryData(["getUserPayoutOptionsK"], updateData);
				}
			},
		}
	);
};

export const useEditPayoutMethod = () => {
	return usePost<EditPayoutOptionResponse, EditPayoutOptionResponse>(
		serverRoutes.editPayoutOption,
		{
			onSuccess: (data, variables, context) => {
				queryClient.invalidateQueries({
					queryKey: ["getUserPayoutOptionsK"],
				});
			},
		}
	);
};
