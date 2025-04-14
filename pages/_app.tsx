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
import { useLocaleStore } from "@/store/LocaleStore";
import rtlPlugin from "stylis-plugin-rtl";
import { StyleSheetManager } from "styled-components";
import { useTheme } from "styled-components";
// PostHog imports
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { Router } from "next/router";
import { Inter } from "next/font/google";
import { cairo, inter } from "@/constants/theme/fonts";
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

	useEffect(() => {
		posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
			api_host: "/ingest",
			ui_host: "https://eu.posthog.com",
			loaded: (ph) => {
				if (process.env.NODE_ENV === "development") ph.debug();
			},
		});

		const handleRouteChange = () => posthog?.capture("$pageview");
		Router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			Router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, []);

	const theme = createTheme({
		direction: "ltr",
	});
	if (isSetUpLoading) {
		return <MSLoadingScreen />;
	}
	const fontClass = locale === "ar" ? cairo.className : inter.className;

	return (
		<PostHogProvider client={posthog}>
			<main className={fontClass}>
				{" "}
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
		</PostHogProvider>
	);
}

export default MyApp;
