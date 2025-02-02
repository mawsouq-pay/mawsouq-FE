import { useLogin } from "@/hooks/authHooks";
import { clientRoutes } from "@/routes";
import { useRouter } from "next/router";

import { useAuthStore } from "@/store";

const Login = () => {
	// const data = {
	// 	email: "n2aze3er2214@gmail.com",
	// 	password: "nazeer123!",
	// };
	const data = {
		email: "nadanazeer13@gmail.com",
		password: "Handball_28",
	};
	const { mutate: loginUser, isPending, error } = useLogin();
	const { login } = useAuthStore();
	const router = useRouter();

	const registerOnPress = () => {
		loginUser(data, {
			onSuccess: (response) => {
				const accessToken = response.headers["x-auth-token"];
				const refreshToken = response.headers["x-refresh-token"];
				console.log("-------------------LOGIN SUCCESS (COMPONENT)-----------", {
					...response?.data,
				});
				const user = {
					name: response?.data?.name,
					email: response?.data?.email,
					phone: response?.data?.phone,
				};
				if (accessToken && refreshToken) {
					login(
						{
							accessToken,
							refreshToken,
						},
						user
					);
					router.push(clientRoutes.homePage);
				}
			},
			onError: (err) => {
				console.error("Login failed:", err.message);
			},
		});
	};

	return <button onClick={registerOnPress}>Logins</button>;
};

export default Login;
