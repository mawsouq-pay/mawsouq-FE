import { useNotification } from "@/store/SnackBarStore";
import { useCreatePaymentLink } from "./orderHooks";
import queryClient from "@/client/reactQClient";
import { AxiosError } from "axios";

export const useHandleAcceptPayments = () => {
	const { mutate: createLink, isPending: createLinkPending } =
		useCreatePaymentLink();
	const { showAxiosErrorNotification } = useNotification();

	const handleBuyerPayment = (
		orderId: string,
		callbacks?: {
			onSuccess?: (response: any) => void;
			onError?: (error: any) => void;
		}
	) => {
		createLink(
			{ orderId },
			{
				onSuccess: (response) => {
					window.location.href = response?.data?.iframeLink;
					queryClient.invalidateQueries({
						queryKey: ["fetchOrderById", orderId],
					});
					callbacks?.onSuccess?.(response);
				},
				onError: (error) => {
					showAxiosErrorNotification(error as AxiosError);
					callbacks?.onError?.(error);
				},
			}
		);
	};
	return {
		handleBuyerPayment,
		isBuyerPaymentPending: createLinkPending,
	};
};
