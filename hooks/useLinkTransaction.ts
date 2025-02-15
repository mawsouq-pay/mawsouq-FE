import { useNotification } from "@/store/SnackBarStore";
import { useLinkOrder } from "./orderHooks";
import { useRouter } from "next/router";
import { clientRoutes } from "@/routes";
import { textTr } from "@/constants/locales";
import { useLocaleStore } from "@/store/LocaleStore";
import { AxiosError } from "axios";

export const useLinkTransaction = () => {
	const router = useRouter();
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const { mutate: LinkOrderMutate, isPending: linkOrderPending } =
		useLinkOrder();
	const {
		showErrorNotification,
		showSuccessNotification,
		showAxiosErrorNotification,
	} = useNotification();
	const extractOrderId = (link: string) => {
		const match = link.match(/previewOrder\/([a-fA-F0-9]+)/);
		return match ? match[1] : null;
	};

	const manuallyLinkOrder = (link: string, onSuccess?: () => void) => {
		const extractedOrderId = extractOrderId(link);
		if (!extractedOrderId) {
			showErrorNotification(text.joinLinkInvalidType);
			return;
		}
		LinkOrderMutate(
			{ orderId: extractedOrderId },
			{
				onSuccess: () => {
					router.replace({
						pathname: clientRoutes.order,
						query: { id: extractedOrderId },
					});
					showSuccessNotification(text.successfullyLinkedToOrder);
					if (onSuccess) onSuccess();
				},
				onError: (error) => {
					showAxiosErrorNotification(error as AxiosError);
				},
			}
		);
	};
	return { manuallyLinkOrder, linkOrderPending };
};
