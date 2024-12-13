import { clientRoutes } from '@/routes';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

interface ProtectedRouteProps {
    children: ReactNode;
    protectedRoutes: string[];
    store: any; //TODO FIX TYPE -NADA
}

const ProtectedRouteWrapper = ({ children, protectedRoutes, store }: ProtectedRouteProps) => {
    const router = useRouter();
    const { isLoggedIn } = store;

    useEffect(() => {
        if (protectedRoutes.includes(router.pathname) && !isLoggedIn) {
            router.push(clientRoutes.login);
        }
    }, [isLoggedIn, router.pathname]);

    if (protectedRoutes.includes(router.pathname) && !isLoggedIn) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default ProtectedRouteWrapper;
