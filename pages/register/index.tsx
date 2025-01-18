import { useRegister } from "@/hooks/authHooks";
import { clientRoutes } from "@/routes";
import { useAuthStore } from "@/store";
import { useRouter } from "next/router";

const Register = () => {
	const data = {
		name: "Amr Abdelazim",
		phone: "01027556681",
		email: "amrAbdelazim@gmail.com",
		password: "amrabdelazim1!",
	};
	const { mutate: registerUser, isPending, error } = useRegister();
	const { register } = useAuthStore();
	const router = useRouter();

	const registerOnPress = () => {
		registerUser(data, {
			onSuccess: (response) => {
				const accessToken = response.headers["x-auth-token"];
				const refreshToken = response.headers["x-refresh-token"];
				console.log(
					"-------------------REGISTER SUCCESS (COMPONENT)-----------",
					{
						...response?.data,
					}
				);
				const user = {
					name: response?.data?.name,
					email: response?.data?.email,
					phone: response?.data?.phone,
				};
				if (accessToken && refreshToken) {
					register(
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
				console.error("Registration failed:", err.message);
			},
		});
	};

	return <button onClick={registerOnPress}>Register</button>;
};

export default Register;
