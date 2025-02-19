import { PayoutDetailsT } from "@/types/authenticationTypes";
import { useCreatePayoutMethod, useGetUserPayoutOptions } from "./authHooks";
import { AxiosError } from "axios";
import { useNotification } from "@/store/SnackBarStore";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { useState } from "react";
import queryClient from "@/client/reactQClient";

export const useManagePayout = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const [payoutModalOpen, setPayoutModalOpen] = useState(false);

	const { showSuccessNotification, showAxiosErrorNotification } =
		useNotification();
	const { mutate: createPayout, isPending, error } = useCreatePayoutMethod();
	const {
		data,
		isPending: getUserPayoutOptionsLoading,
		error: getUserPayoutOptionsError,
	} = useGetUserPayoutOptions();
	const createUserPayoutMethod = (details: PayoutDetailsT) => {
		createPayout(details, {
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: ["getUserPayoutOptionsK"],
				});
				showSuccessNotification(text.payoutAddedNotification);
				setPayoutModalOpen(false);
			},
			onError: (error) => {
				showAxiosErrorNotification(error as AxiosError);
			},
		});
	};
	return {
		createUserPayoutMethod,
		isPending,
		error,
		payoutModalOpen,
		setPayoutModalOpen,
		userPayoutOptions: data?.payoutOptions,
		getUserPayoutOptionsLoading,
		getUserPayoutOptionsError,
	};
};
