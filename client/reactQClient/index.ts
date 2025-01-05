import Config from "@/Config";
import { QueryClient } from "@tanstack/react-query";
import mixpanel from "mixpanel-browser";

const mixPanelId = Config.MIXPANEL_TOKEN as string;

mixpanel.init(mixPanelId, {
	debug: true,
	ignore_dnt: true,
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
