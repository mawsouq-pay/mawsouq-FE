import { clientRoutes } from "@/routes";
import { AuthStore } from "@/store";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { MSLoadingScreen } from "@/MSFallBacks";
interface ProtectedRouteProps {
	children: ReactNode;
	protectedRoutes: string[];
	store: AuthStore;
}

const ProtectedRouteWrapper = ({
	children,
	protectedRoutes,
	store,
}: ProtectedRouteProps) => {
	const router = useRouter();
	const { isLoggedIn, isSetUpLoading } = store;

	const isProtected = protectedRoutes.includes(router.pathname);

	console.log("------INSIDE PROTECTED ROUTE WRAPPER-------", isLoggedIn);

	useEffect(() => {
		if (isProtected && !isLoggedIn && !isSetUpLoading) {
			console.log(
				"------PROTECTED WRAPPER UNAUTHORIZED: NAVIGATE TO LOGIN-------"
			);
			router.push(clientRoutes.login);
		}
	}, [isLoggedIn, isSetUpLoading, router.pathname]);

	if (isProtected && isSetUpLoading) {
		return <MSLoadingScreen />;
	}

	if (isProtected && !isLoggedIn && !isSetUpLoading) {
		return null;
	}

	return <>{children}</>;
};

export default ProtectedRouteWrapper;
