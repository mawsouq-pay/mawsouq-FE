import ProtectedRouteWrapper from "@/components/Shared/ProtectedRouteWrapper";
import queryClient from "@/client/reactQClient";
import { GlobalStyles } from "@/constants/globalStyle";
import MainLayout from "@/layouts/MainLayout";
import { protectedRoutes } from "@/routes";
import useAuthStore from "@/store/AuthStore";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NotificationProvider } from "@/store/SnackBarStore";
import { MSLoadingScreen } from "@/components/Shared/MSFallBacks";
function MyApp({ Component, pageProps }: any) {
	const authStore = useAuthStore();
	const { setUpApp, isSetUpLoading } = authStore;
	const theme = createTheme();

	useEffect(() => {
		console.log("------MY APP SETUP USE EFFECT", Component.CustomLayout);
		setUpApp();
	}, []);
	if (isSetUpLoading) {
		return <MSLoadingScreen />;
	}
	return (
		<QueryClientProvider client={queryClient}>
			<ProtectedRouteWrapper
				protectedRoutes={protectedRoutes}
				store={authStore}
			>
				{" "}
				<ThemeProvider theme={theme}>
					<NotificationProvider>
						<GlobalStyles />
						{Component.CustomLayout ? (
							<Component.CustomLayout>
								<Component {...pageProps} />
							</Component.CustomLayout>
						) : (
							<MainLayout>
								<Component {...pageProps} />
							</MainLayout>
						)}
					</NotificationProvider>
				</ThemeProvider>
			</ProtectedRouteWrapper>
		</QueryClientProvider>
	);
}

export default MyApp;
