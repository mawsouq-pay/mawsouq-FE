import { useRouter } from "next/router";
import { useRegister } from "@/hooks/authHooks";
import { useAuthStore } from "@/store";
import { useNotification } from "@/store/SnackBarStore";
import { AxiosError } from "axios";
import { clientRoutes } from "@/routes";
import { User } from "@/types/authenticationTypes";
import { RegisterFormInput } from "@/components/Features/Authentication/RegisterForm/types";
import { useLinkOrder } from "./orderHooks";

const useRegisterHandler = (orderId?: string) => {
	const { mutate: registerSubmit, isPending: registerPending } = useRegister();
	const { register: storeRegister } = useAuthStore();
	const { showAxiosErrorNotification, showErrorNotification } =
		useNotification();
	const router = useRouter();
	const { mutate: LinkOrderMutate, isPending: linkOrderPending } =
		useLinkOrder();

	const handleRegister = (
		values: RegisterFormInput,
		setSubmitting: (isSubmitting: boolean) => void
	) => {
		registerSubmit(
			{
				name: values.name,
				email: values.email,
				password: values.password,
				phone: values.phone,
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
						storeRegister({ accessToken, refreshToken }, user);
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
			LinkOrderMutate(
				{ orderId },
				{
					onSuccess: () => {
						router.push({
							pathname: clientRoutes.order,
							query: { id: orderId },
						});
					},
					onError: (error) => {
						showAxiosErrorNotification(error as AxiosError);
						router.replace({
							pathname: clientRoutes.homePage,
						});
					},
				}
			);
		} else {
			router.replace({
				pathname: clientRoutes.homePage,
			});
		}
	};

	return { handleRegister, isPending: registerPending || linkOrderPending };
};

export default useRegisterHandler;
