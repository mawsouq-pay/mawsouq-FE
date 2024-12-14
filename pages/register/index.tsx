import { useRegister } from "@/hooks/authHooks";
import { clientRoutes } from "@/routes";
import { useAuthStore } from "@/store";
import { useRouter } from "next/router";

const Register = () => {
    const data = {
        "name": "Jana Elbehesy4",
        "phone": "01116008414",
        "email": "nazeer224@gmail.com",
        "password": "nazeer123!"
    }
    const { mutate: registerUser, isPending, error } = useRegister();
    const { register } = useAuthStore()
    const router = useRouter();

    const registerOnPress = () => {
        registerUser(data, {
            onSuccess: (response) => {
                const accessToken = response.headers["x-auth-token"];
                const refreshToken = response.headers["x-refresh-token"];
                console.log("-------------------REGISTER SUCCESS (COMPONENT)-----------",
                    {
                        ...response?.data
                    })
                if (accessToken && refreshToken) {
                    register({
                        accessToken,
                        refreshToken,
                    });
                    router.push(clientRoutes.homePage);

                }
            },
            onError: (err) => {
                console.error("Registration failed:", err.message);
            },
        });
    };


    return (
        <button onClick={registerOnPress}>Register</button>
    );
};

export default Register;