import { useLogin } from "@/hooks/authHooks";
import { clientRoutes } from "@/routes";
import { useAuthStore } from "@/store";
import { useRouter } from "next/router";

const Login = () => {
    const data = {
        "email": "n2aze3er2214@gmail.com",
        "password": "nazeer123!"
    }
    const { mutate: loginUser, isPending, error } = useLogin();
    const { login } = useAuthStore()
    const router = useRouter();

    const registerOnPress = () => {
        loginUser(data, {
            onSuccess: (response) => {
                const accessToken = response.headers["x-auth-token"];
                const refreshToken = response.headers["x-refresh-token"];
                console.log("-------------------LOGIN SUCCESS (COMPONENT)-----------",
                    {
                        ...response?.data
                    })
                if (accessToken && refreshToken) {
                    login({
                        accessToken,
                        refreshToken,
                    });
                    router.push(clientRoutes.homePage);

                }
            },
            onError: (err) => {
                console.error("Login failed:", err.message);
            },
        });
    };


    return (
        <button onClick={registerOnPress}>Login</button>
    );
};

export default Login;