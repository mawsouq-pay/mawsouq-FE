import { useRouter } from "next/router";
import { useAuthStore } from "@/store";
import { useNotification } from "@/store/SnackBarStore";
import { useLogin } from "@/hooks/authHooks";
import { clientRoutes } from "@/routes";
import { User } from "@/types/authenticationTypes";
import { AxiosError } from "axios";

export const useLoginHandler = (orderId?: string) => {
	const router = useRouter();
	const { mutate: loginSubmit, isPending } = useLogin();
	const { login: storeLogin } = useAuthStore();
	const { showAxiosErrorNotification, showErrorNotification } =
		useNotification();

	const handleLogin = (
		values: { email: string; password: string },
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
		if (orderId) {
			router.replace({
				pathname: clientRoutes.order,
				query: { id: orderId },
			});
		} else {
			router.replace(clientRoutes.homePage);
		}
	};

	return { handleLogin, isPending };
};
