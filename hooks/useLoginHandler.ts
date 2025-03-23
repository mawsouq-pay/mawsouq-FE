import { useRouter } from "next/router";
import { useAuthStore } from "@/store";
import { useNotification } from "@/store/SnackBarStore";
import { useLogin } from "@/hooks/authHooks";
import { clientRoutes } from "@/routes";
import { User } from "@/types/authenticationTypes";
import { AxiosError } from "axios";
import { LoginFormInput } from "@/components/Features/Authentication/LoginForm/types";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { useHandleAcceptPayments } from "./useHandleAcceptPayment";
import { trackIdentifyUser } from "@/helpers/tracking";

export const useLoginHandler = (orderId?: string) => {
	const router = useRouter();
	const { mutate: loginSubmit, isPending: loginPending } = useLogin();
	const { login: storeLogin } = useAuthStore();
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const { showAxiosErrorNotification, showErrorNotification } =
		useNotification();
	const { handleBuyerPayment, isBuyerPaymentPending } =
		useHandleAcceptPayments();
	const handleLogin = (
		values: LoginFormInput,
		setSubmitting: (isSubmitting: boolean) => void
	) => {
		loginSubmit(
			{
				email: values.email,
				password: values.password,
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
							payoutOptions: response?.data?.payoutOptions,
						};
						storeLogin({ accessToken, refreshToken }, user);
						navigateUser();
					} else {
						showErrorNotification(text.genericErrorMessage);
					}
					setSubmitting(false);
					trackIdentifyUser({
						_id: response?.data?.id,
						name: response?.data?.name,
						email: response?.data?.email,
						phone: response?.data?.phone,
						login: true,
					});
				},
				onError: (error) => {
					setSubmitting(false);
					showAxiosErrorNotification(error as AxiosError);
				},
			}
		);
	};

	const navigateUser = () => {
		if (orderId) {
			handleBuyerPayment(orderId, {
				onError: (error) => {
					router.replace({
						pathname: clientRoutes.homePage,
					});
				},
			});
		} else {
			router.replace({
				pathname: clientRoutes.homePage,
			});
		}
	};

	return { handleLogin, isPending: loginPending || isBuyerPaymentPending };
};
