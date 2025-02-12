import { clientRoutes } from "@/routes";
import { AuthStore } from "@/store";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { MSLoadingScreen } from "@/components/Shared/MSFallBacks";
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

	console.log(
		"------INSIDE PROTECTED ROUTE WRAPPER-------",
		isLoggedIn,
		!isSetUpLoading
	);

	useEffect(() => {
		if (isProtected && !isLoggedIn && !isSetUpLoading) {
			console.log(
				"------PROTECTED WRAPPER UNAUTHORIZED: NAVIGATE TO LOGIN-------"
			);
			router.push(clientRoutes.login);
		}
	}, [isLoggedIn, isSetUpLoading]);

	if (isSetUpLoading) {
		return <MSLoadingScreen />;
	}

	if (isProtected && !isLoggedIn) {
		return <MSLoadingScreen />;
	}

	return <>{children}</>;
};

export default ProtectedRouteWrapper;
