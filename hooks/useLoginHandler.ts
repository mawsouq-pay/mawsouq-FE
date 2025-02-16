import { useRouter } from "next/router";
import { useAuthStore } from "@/store";
import { useNotification } from "@/store/SnackBarStore";
import { useLogin } from "@/hooks/authHooks";
import { clientRoutes } from "@/routes";
import { User } from "@/types/authenticationTypes";
import { AxiosError } from "axios";
import { LoginFormInput } from "@/components/Features/Authentication/LoginForm/types";
import { useLinkOrder } from "./orderHooks";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";

export const useLoginHandler = (orderId?: string) => {
	const router = useRouter();
	const { mutate: loginSubmit, isPending: loginPending } = useLogin();
	const { login: storeLogin } = useAuthStore();
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const {
		showAxiosErrorNotification,
		showErrorNotification,
		showSuccessNotification,
	} = useNotification();
	const { mutate: LinkOrderMutate, isPending: linkOrderPending } =
		useLinkOrder();
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
							name: response?.data?.name,
							email: response?.data?.email,
							phone: response?.data?.phone,
						};
						storeLogin({ accessToken, refreshToken }, user);
						navigateUser();
					} else {
						showErrorNotification("Something went wrong. Please try again.");
					}
					setSubmitting(false);
				},
				onError: (error) => {
					setSubmitting(false);
					showAxiosErrorNotification(error as AxiosError);
				},
			}
		);
	};

	const navigateUser = () => {
		console.log("navigate");
		if (orderId) {
			console.log("navigat2");

			try {
				LinkOrderMutate(
					{ orderId },
					{
						onSuccess: () => {
							console.log("✅ Success: Order Linked!");
							router.replace({
								pathname: clientRoutes.order,
								query: { id: orderId },
							});
							showSuccessNotification(text.successfullyLinkedToOrder);
						},
						onError: (error) => {
							console.log("❌ Error occurred:", error);
							showAxiosErrorNotification(error as AxiosError);
							router.push({
								pathname: clientRoutes.homePage,
							});
						},
					}
				);
			} catch (error) {
				console.log("🚨 Caught Error before mutation execution:", error);
			}
		} else {
			console.log("navigat3");

			router.replace({
				pathname: clientRoutes.homePage,
			});
		}
	};

	return { handleLogin, isPending: loginPending || linkOrderPending };
};
