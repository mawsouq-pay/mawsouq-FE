import ProtectedRouteWrapper from "@/components/ProtectedRouteWrapper";
import queryClient from "@/client/reactQClient";
import { GlobalStyles } from "@/constants/globalStyle";
import MainLayout from "@/layouts/MainLayout";
import { protectedRoutes, clientRoutes } from "@/routes";
import useAuthStore from "@/store/AuthStore";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
function MyApp({ Component, pageProps }: any) {
	const authStore = useAuthStore();
	const { setUpApp, isSetUpLoading } = authStore;
	const theme = createTheme();

	useEffect(() => {
		console.log("------MY APP SETUP USE EFFECT", Component.CustomLayout);
		setUpApp();
	}, []);
	if (isSetUpLoading) {
		return <div>Loading...</div>;
	}
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<ProtectedRouteWrapper
					protectedRoutes={protectedRoutes}
					store={authStore}
				>
					{" "}
					<ThemeProvider theme={theme}>
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
					</ThemeProvider>
				</ProtectedRouteWrapper>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default MyApp;
