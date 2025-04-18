import { useNotification } from "@/store/SnackBarStore";
import { useCreatePaymentLink } from "./orderHooks";
import queryClient from "@/client/reactQClient";
import { AxiosError } from "axios";
import {
	OrderPaymentLinkTracker,
	trackNavigatingToPaymob,
} from "@/helpers/tracking";

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
		OrderPaymentLinkTracker.generatePaymentLinkIntent(orderId);
		createLink(
			{ orderId },
			{
				onSuccess: (response) => {
					window.location.href = response?.data?.iframeLink;
					queryClient.invalidateQueries({
						queryKey: ["fetchOrderById", orderId],
					});
					callbacks?.onSuccess?.(response);
					trackNavigatingToPaymob({ orderId });
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
