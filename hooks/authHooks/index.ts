import { usePost } from "@/client/customHooks";
import { serverRoutes } from "@/routes";
import { RegisterInput, RegisterResponse } from "@/types/authenticationTypes";

export const useRegister = () => {
    return usePost<RegisterResponse, RegisterInput>(serverRoutes.register);
};