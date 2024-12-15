import ProtectedRouteWrapper from "@/components/ProtectedRouteWrapper";
import queryClient from "@/client/reactQClient";
import { GlobalStyles } from "@/constants/globalStyle";
import MainLayout from "@/layouts/MainLayout";
import { protectedRoutes, clientRoutes } from "@/routes";
import useAuthStore from "@/store/AuthStore";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
function MyApp({ Component, pageProps }: any) {
  const authStore = useAuthStore();
  const { setUpApp, isSetUpLoading } = authStore;
  useEffect(() => {
    console.log("------MY APP SETUP USE EFFECT");
    setUpApp();
  }, []);
  if (isSetUpLoading) {
    return <div>Loading...</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ProtectedRouteWrapper
        protectedRoutes={protectedRoutes}
        store={authStore}
      >
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
      </ProtectedRouteWrapper>
    </QueryClientProvider>
  );
}

export default MyApp;
