import {
	CreatePaymentMethodResponse,
	EditPayoutOptionResponse,
	PayoutDetailsT,
} from "@/types/authenticationTypes";
import { CreateOrderInput, Order } from "@/types/ordersTypes";
import posthog from "posthog-js";

// -- Track Identify user
export const trackIdentifyUser = ({
	_id,
	name,
	phone,
	email,
	login,
}: {
	_id: string;
	name: string;
	phone: string;
	email: string;
	login?: boolean;
}) => {
	const prop = {
		name,
		phone_number: phone,
		email,
	};
	posthog.identify(_id, prop);
	if (login) {
		posthog.capture("user_logged_in", prop);
	} else {
		posthog.capture("user_registered", prop);
	}
};
// -- Track when a user views a specific page
export const trackPageViewed = (pageName: string) => {
	posthog.capture("$pageview", {
		page: pageName,
	});
};

// -- Track when buyer navigates to paymob
export const trackNavigatingToPaymob = ({ orderId }: { orderId: string }) => {
	posthog.capture("navigating_to_paymob", {
		orderId,
	});
};

// -- Track when a seller created order
export const trackOrderSubmitted = (order: CreateOrderInput) => {
	posthog.capture("order_submitted", { order });
};

// -- Track when the buyer approves delivery
export const trackOrderApproved = (orderId: string) => {
	posthog.capture("order_approved_by_buyer", {
		order_id: orderId,
	});
};

// -- Track when user completes payout setup
export const trackPayoutMethodAdded = (methodType: string) => {
	posthog.capture("payout_method_added", {
		method: methodType,
	});
};

///////////////////////////////////////////////PAYOUTS///////////////////////////////////////////////////////////
export const trackOpenedPayoutPrompt = () => {
	posthog.capture("opened_payout_prompt");
};
export const trackCancelPayoutPrompt = () => {
	posthog.capture("cancel_payout_prompt");
};
export const trackConfirmPayoutPrompt = () => {
	posthog.capture("confirm_payout_prompt");
};
export const trackCancelPayoutDetails = () => {
	posthog.capture("cancel_payout_details");
};
export const trackSubmitPayoutDetails = (payoutDetails: PayoutDetailsT) => {
	posthog.capture("submit_payout_details", { payoutDetails });
};
