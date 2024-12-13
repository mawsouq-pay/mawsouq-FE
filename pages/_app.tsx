import ProtectedRouteWrapper from "@/protectRoutesWrapper";
import { protectedRoutes } from "@/routes";

function MyApp({ Component, pageProps }: any) {
    //const authStore = useAuthStore(); 

    return (
        <ProtectedRouteWrapper protectedRoutes={protectedRoutes} store={"authStore"}>
            <Component {...pageProps} />
        </ProtectedRouteWrapper>
    );
}

export default MyApp;
