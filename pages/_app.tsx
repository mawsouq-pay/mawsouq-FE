import ProtectedRouteWrapper from "@/components/Shared/ProtectedRouteWrapper";
import queryClient from "@/client/reactQClient";
import { GlobalStyles } from "@/constants/globalStyle";
import MainLayout from "@/layouts/MainLayout";
import { protectedRoutes } from "@/routes";
import useAuthStore from "@/store/AuthStore";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MSLoadingScreen from "@/components/Shared/MSFallBacks/MSLoadingScreen";
import { NotificationProvider } from "@/store/SnackBarStore";
import { BrowserRouter } from "react-router-dom";
import { Roboto } from "next/font/google";
import { useLocaleStore } from "@/store/LocaleStore";
import rtlPlugin from "stylis-plugin-rtl";
import { StyleSheetManager } from "styled-components";
import { useTheme } from "styled-components";
const roboto = Roboto({
	weight: ["400", "700", "900"],
	subsets: ["latin"],
});

function MyApp({ Component, pageProps }: any) {
	const authStore = useAuthStore();
	const { setUpApp, isSetUpLoading } = authStore;
	const { locale } = useLocaleStore();
	useEffect(() => {
		setUpApp();
	}, []);
	useEffect(() => {
		document.documentElement.setAttribute(
			"dir",
			locale === "ar" ? "rtl" : "ltr"
		);
	}, [locale]);

	const theme = createTheme({
		direction: "ltr",
	});
	if (isSetUpLoading) {
		return <MSLoadingScreen />;
	}

	return (
		<main className={roboto.className}>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<ProtectedRouteWrapper
						protectedRoutes={protectedRoutes}
						store={authStore}
					>
						<ThemeProvider theme={theme}>
							<StyleSheetManager
								stylisPlugins={locale == "ar" ? [rtlPlugin] : []}
							>
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
							</StyleSheetManager>
						</ThemeProvider>
					</ProtectedRouteWrapper>
				</BrowserRouter>
			</QueryClientProvider>
		</main>
	);
}

export default MyApp;
