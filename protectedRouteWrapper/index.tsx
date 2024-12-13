import { clientRoutes } from '@/routes';
import { AuthStore } from '@/store';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

interface ProtectedRouteProps {
    children: ReactNode;
    protectedRoutes: string[];
    store: AuthStore;
}

const ProtectedRouteWrapper = ({ children, protectedRoutes, store }: ProtectedRouteProps) => {
    const router = useRouter();
    const { isLoggedIn, accessToken } = store;
    console.log("------INSIDE PROTECTED ROUTE WRAPPER-------", isLoggedIn, accessToken)
    useEffect(() => {
        console.log("------PROTECTED WRAPPER USE EFFECT-------")

        if (protectedRoutes.includes(router.pathname) && !isLoggedIn) {
            console.log("------PROTECTED WRAPPER ANAUTHRIZED NAVIGATE TO LOGIN-------")
            router.push(clientRoutes.login);
        }
    }, [isLoggedIn, router.pathname]);

    if (protectedRoutes.includes(router.pathname) && !isLoggedIn) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default ProtectedRouteWrapper;
