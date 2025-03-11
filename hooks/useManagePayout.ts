import { PayoutDetailsT } from "@/types/authenticationTypes";
import {
	useCreatePayoutMethod,
	useDeleteUserPayoutOption,
	useEditPayoutMethod,
	useGetUserPayoutOptions,
} from "./authHooks";
import { AxiosError } from "axios";
import { useNotification } from "@/store/SnackBarStore";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { useState } from "react";
import queryClient from "@/client/reactQClient";

export const useManagePayout = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	//View And Edit Payout Method
	const [payoutModalOpen, setPayoutModalOpen] = useState(false);
	const [editInitialValues, setEditInitialValues] =
		useState<null | PayoutDetailsT>(null);

	//Delete Payout Method
	const [payoutDeleteId, setPayoutDeleteId] = useState("");
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const { mutate: deletePayoutOption, isPending: isDeletePayoutOptionPending } =
		useDeleteUserPayoutOption();

	const {
		showSuccessNotification,
		showAxiosErrorNotification,
		showErrorNotification,
	} = useNotification();

	const { mutate: createPayout, isPending, error } = useCreatePayoutMethod();
	const {
		data,
		isPending: getUserPayoutOptionsLoading,
		error: getUserPayoutOptionsError,
	} = useGetUserPayoutOptions();
	const { mutate: editPayout, isPending: isEditPayoutPending } =
		useEditPayoutMethod();

	const createUserPayoutMethod = (details: PayoutDetailsT) => {
		if (editInitialValues) {
			editPayout(
				{ payoutMethod: details },
				{
					onSuccess: () => {
						showSuccessNotification("Payout Method Successfully edited");
						setPayoutModalOpen(false);
					},
					onError: (error) => {
						showAxiosErrorNotification(error as AxiosError);
					},
				}
			);
		} else {
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
		}
		setEditInitialValues(null);
	};

	const onClosePayoutModal = () => {
		setPayoutModalOpen(false);
		setEditInitialValues(null);
	};
	const onDeletePress = (payoutId: string) => {
		setPayoutDeleteId(payoutId);
		setIsDeleteModalOpen(true);
	};

	const onCancelDeleteModal = () => {
		setPayoutDeleteId("");
		setIsDeleteModalOpen(false);
	};
	const onSubmitDeleteModal = () => {
		const details = { payoutId: payoutDeleteId };
		deletePayoutOption(details, {
			onSuccess: () => {
				setIsDeleteModalOpen(false);
				showSuccessNotification(text.payoutSuccessfullyDeleted);
			},
			onError: (error) => {
				showAxiosErrorNotification(error as AxiosError);
			},
		});
	};

	const onEditPress = (payoutId: string) => {
		const payout = data?.payoutOptions?.find(
			(payout: PayoutDetailsT) => payout._id === payoutId
		);
		if (!payout) return showErrorNotification(text.genericErrorMessage);
		setEditInitialValues(payout);
		setPayoutModalOpen(true);
	};
	return {
		createUserPayoutMethod,
		isPending,
		error,
		payoutModalOpen,
		onClosePayoutModal,
		setPayoutModalOpen,
		userPayoutOptions: data?.payoutOptions,
		getUserPayoutOptionsLoading,
		getUserPayoutOptionsError,
		onSubmitDeleteModal,
		onDeletePress,
		isDeleteModalOpen,
		onCancelDeleteModal,
		isDeletePayoutOptionPending,
		onEditPress,
		editInitialValues,
		isEditPayoutPending,
	};
};
