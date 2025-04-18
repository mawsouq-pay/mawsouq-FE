import { QueryClient } from "@tanstack/react-query";
import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_KEY || "";

mixpanel.init(MIXPANEL_TOKEN, {
	debug: true,
	track_pageview: true,
	persistence: "localStorage",
	//     debug: process.env.MIXPANEL_DEBUG ? true : false,
	//   ignore_dnt: process.env.MIXPANEL_IgnoreDNT ? true : false
});
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 1,
			refetchOnWindowFocus: false,
			staleTime: 5 * 10000,
		},
		mutations: {
			retry: 1,
		},
	},
});

export default queryClient;
