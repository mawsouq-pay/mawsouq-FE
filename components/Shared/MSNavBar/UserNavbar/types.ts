import { textTr } from "@/constants/locales";
import { clientRoutes } from "@/routes";
import { useAuthStore } from "@/store";
import { useRouter } from "next/router";

export const userButtonsList = (locale: any) => {
	const router = useRouter();
	const { logout } = useAuthStore();
	const text = textTr(locale);

	const { push } = router;
	return [
		{
			label: text.startTransaction,
			onPress: () => {
				push(clientRoutes.startTransaction);
			},
		},
		{
			label: text.viewMyTransactions,
			onPress: () => {
				push(clientRoutes.orders);
			},
		},
		{
			label: text.profileManagement,
			onPress: () => {
				push(clientRoutes.profilePage);
			},
		},
		{
			label: text.logout,
			onPress: () => {
				logout();
			},
		},
	];
};
