import { CreateOrderInput } from "@/types/ordersTypes";
import mixpanel from "mixpanel-browser";

export const trackStartTransaction = (orderData: CreateOrderInput) => {
	console.log("here");
	try {
		mixpanel.track("start_transaction", {
			orderData,
		});
	} catch (err) {
		console.error("Mixpanel track failed:", err);
	}
};
