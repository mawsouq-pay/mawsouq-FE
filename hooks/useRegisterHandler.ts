import { useRouter } from "next/router";
import {
	useGenerateUserOtp,
	useRegister,
	useVerifyUserOtp,
} from "@/hooks/authHooks";
import { useAuthStore } from "@/store";
import { useNotification } from "@/store/SnackBarStore";
import { AxiosError } from "axios";
import { clientRoutes } from "@/routes";
import { User } from "@/types/authenticationTypes";
import { RegisterFormInput } from "@/components/Features/Authentication/RegisterForm/types";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { useHandleAcceptPayments } from "./useHandleAcceptPayment";
import { useState } from "react";

const useRegisterHandler = (orderId?: string) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const { mutate: registerSubmit, isPending: registerPending } = useRegister();
	const { mutate: generateUserOtp } = useGenerateUserOtp();
	const { mutate: verifyUserOtp, isPending: isVerifyingPending } =
		useVerifyUserOtp();

	const { register: storeRegister } = useAuthStore();
	const { showAxiosErrorNotification, showErrorNotification } =
		useNotification();
	const router = useRouter();
	const [openOtpModal, setOpenOtpModal] = useState(false);

	const [pendingRegisterData, setPendingRegisterData] =
		useState<RegisterFormInput>();

	const { handleBuyerPayment, isBuyerPaymentPending } =
		useHandleAcceptPayments();

	const handleRegister = (
		values: RegisterFormInput,
		setSubmitting: (isSubmitting: boolean) => void
	) => {
		generateUserOtp(
			{
				phone: values.phone,
				email: values.email,
			},
			{
				onSuccess: () => {
					setPendingRegisterData(values);
					setOpenOtpModal(true);
					setSubmitting(false);
				},
				onError: (error) => {
					setSubmitting(false);
					showAxiosErrorNotification(error as AxiosError);
				},
			}
		);
	};

	const handleVerifyOtp = (otp: string) => {
		if (!pendingRegisterData) return;

		verifyUserOtp(
			{
				phone: pendingRegisterData.phone,
				otp,
			},
			{
				onSuccess: () => {
					submitFinalRegister();
				},
				onError: (error) => {
					showAxiosErrorNotification(error as AxiosError);
				},
			}
		);
	};

	const submitFinalRegister = () => {
		if (!pendingRegisterData) return;

		registerSubmit(
			{
				name: pendingRegisterData.name,
				email: pendingRegisterData.email,
				password: pendingRegisterData.password,
				phone: pendingRegisterData.phone,
			},
			{
				onSuccess: (response) => {
					const accessToken = response.headers["x-auth-token"];
					const refreshToken = response.headers["x-refresh-token"];

					if (accessToken && refreshToken) {
						const user: User = {
							_id: response?.data?.id,
							name: response?.data?.name,
							email: response?.data?.email,
							phone: response?.data?.phone,
						};
						storeRegister({ accessToken, refreshToken }, user);

						navigateUser();
					} else {
						showErrorNotification(text.genericErrorMessage);
					}
				},
				onError: (error) => {
					showAxiosErrorNotification(error as AxiosError);
				},
			}
		);
	};

	const navigateUser = () => {
		if (orderId) {
			handleBuyerPayment(orderId, {
				onError: (error) => {
					showAxiosErrorNotification(error as AxiosError);
					router.replace({ pathname: clientRoutes.homePage });
				},
			});
		} else {
			router.replace({ pathname: clientRoutes.homePage });
		}
	};

	return {
		handleRegister,
		handleVerifyOtp,
		openOtpModal,
		setOpenOtpModal,
		isPending: registerPending || isBuyerPaymentPending,
		isVerifyingPending: isVerifyingPending,
	};
};

export default useRegisterHandler;
