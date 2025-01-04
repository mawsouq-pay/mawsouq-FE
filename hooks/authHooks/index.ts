import { usePost } from "@/client/customHooks";
import { serverRoutes } from "@/routes";
import { LoginInput, LoginResponse, RegisterInput, RegisterResponse } from "@/types/authenticationTypes";

export const useRegister = () => {
    return usePost<RegisterResponse, RegisterInput>(serverRoutes.register);
};

export const useLogin = () => {
    return usePost<LoginResponse, LoginInput>(serverRoutes.login);

}