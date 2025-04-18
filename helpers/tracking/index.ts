import { DisputeTypeEnum, OrderStatusEnum } from "@/constants";
import {
	CreatePaymentMethodResponse,
	PayoutDetailsT,
	User,
} from "@/types/authenticationTypes";
import {
	CreateDisputeResponse,
	CreateOrderInput,
	CreateOrderResponse,
} from "@/types/ordersTypes";
import { AxiosError } from "axios";
import { error } from "console";
import mixpanel from "mixpanel-browser";

//naming standard to follow
// User tried → order_submit_intent
// Backend succeeded → order_submit_success
// Backend failed → order_submit_failed

// -- Track Identify user
export const trackIdentifyUser = ({
	user,
	login,
}: {
	user: User;
	login: boolean;
}) => {
	mixpanel.identify(user?._id);
	mixpanel.people.set(user);
	const props = {
		$name: user?.name,
		$email: user?.email,
		$phone: user?.phone,
		$MSuserId: user?._id,
	};
	if (login) {
		mixpanel.track("user_logged_in", props);
	} else {
		mixpanel.track("user_registered", props);
	}
};

// -- Track when a user views a specific page
export const trackPageViewed = (pageName: string) => {
	mixpanel.track("page_viewed", {
		page: pageName,
	});
};

// -- Track when buyer navigates to paymob
export const trackNavigatingToPaymob = ({ orderId }: { orderId: string }) => {
	mixpanel.track("navigating_to_paymob", {
		orderId,
	});
};

export const OrderTracker = {
	submitIntent: (order: CreateOrderInput) => {
		mixpanel.track("order_submit_intent", { order: JSON.stringify(order) });
	},

	submitSuccess: (order: CreateOrderResponse) => {
		mixpanel.track("order_submit_success_H", { order: JSON.stringify(order) });
	},

	submitFailed: (error: unknown, order: CreateOrderInput) => {
		const errorInfo = trackErrorEvent(error);
		mixpanel.track("order_submit_failed_H", {
			errorInfo,
			order: JSON.stringify(order),
		});
	},
};

export const PayoutTracker = {
	// -- Payout Prompt
	promptOpened: () => {
		mixpanel.track("payout_prompt_opened");
	},

	promptCancelled: () => {
		mixpanel.track("payout_prompt_cancelled");
	},

	promptConfirmed: () => {
		mixpanel.track("payout_prompt_confirmed");
	},

	// -- Payout Form
	formOpened: () => {
		mixpanel.track("payout_form_opened");
	},

	formSubmitIntent: (payoutDetails: PayoutDetailsT) => {
		mixpanel.track("payout_form_submit_intent", { payoutDetails });
	},

	formSubmitSuccess: (payoutDetails: CreatePaymentMethodResponse) => {
		mixpanel.track("payout_form_submit_success", { payoutDetails });
	},

	formSubmitFailed: (error: unknown) => {
		const errorInfo = trackErrorEvent(error);
		mixpanel.track("payout_form_submit_failed", errorInfo);
	},

	formCancelled: () => {
		mixpanel.track("payout_form_cancelled");
	},
};

export const OrderActionsTracker = {
	confirmationModalOpened: (
		newStatus: OrderStatusEnum,
		orderId: string,
		isFetcherSeller: boolean
	) => {
		mixpanel.track("order_confirmation_modal_opened", {
			newStatus,
			orderId,
			isFetcherSeller,
		});
	},

	confirmationModalConfirmed: (
		newStatus: OrderStatusEnum,
		orderId: string,
		isFetcherSeller: boolean
	) => {
		mixpanel.track("order_confirmation_modal_confirmed", {
			newStatus,
			orderId,
			isFetcherSeller,
		});
	},

	confirmationModalCancelled: (
		newStatus: OrderStatusEnum,
		orderId: string,
		isFetcherSeller: boolean
	) => {
		mixpanel.track("order_confirmation_modal_cancelled", {
			newStatus,
			orderId,
			isFetcherSeller,
		});
	},

	disputeFormOpened: (orderId: string, isFetcherSeller: boolean) => {
		mixpanel.track("order_dispute_form_opened", {
			orderId,
			isFetcherSeller,
		});
	},

	disputeFormSubmitIntent: (
		type: DisputeTypeEnum,
		description: string,
		isFetcherSeller: boolean
	) => {
		mixpanel.track("order_dispute_submit_intent", {
			type,
			description,
			isFetcherSeller,
		});
	},
	disputeSubmissionSuccess: (dispute: CreateDisputeResponse) => {
		mixpanel.track("order_dispute_submission_success_H", {
			dispute: JSON.stringify(dispute),
		});
	},

	disputeSubmissionFailed: (
		error: unknown,
		orderId: string,
		type: DisputeTypeEnum,
		description: string
	) => {
		const errorInfo = trackErrorEvent(error);
		mixpanel.track("order_dispute_submission_failed_H", {
			errorInfo,
			orderId,
			type,
			description,
		});
	},

	ratingModalOpened: () => {
		mixpanel.track("order_rating_modal_opened");
	},

	ratingSubmitted: (rating: number) => {
		mixpanel.track("order_rating_submitted", {
			rating,
		});
	},

	ratingCancelled: () => {
		mixpanel.track("order_rating_cancelled");
	},
	submitRatingSuccess: (orderId: string, rating: number, comment: string) => {
		mixpanel.track("order_rating_success_H", {
			orderId,
			rating,
			comment,
		});
	},
	submitRatingFailed: (
		error: unknown,
		orderId: string,
		rating: number,
		comment: string
	) => {
		const errorInfo = trackErrorEvent(error);
		mixpanel.track("order_rating_failed_H", {
			errorInfo,
			orderId,
			rating,
			comment,
		});
	},

	updateOrderStatusSuccess: (
		orderId: string,
		newStatus: string,
		isFetcherSeller: boolean
	) => {
		mixpanel.track("update_order_status_success_H", {
			orderId,
			newStatus,
			isFetcherSeller,
		});
	},
	updateOrderStatusFailed: (
		error: unknown,
		orderId: string,
		newStatus: string
	) => {
		const errorInfo = trackErrorEvent(error);
		mixpanel.track("update_order_status_failed_H", {
			errorInfo,
			orderId,
			newStatus,
		});
	},

	markAsOutForDeliveryIntent: (orderId: string) => {
		mixpanel.track("order_marked_as_out_for_delivery_intent", {
			order_id: orderId,
		});
	},

	releasePaymentIntent: (orderId: string) => {
		mixpanel.track("order_release_payment_intent", {
			order_id: orderId,
		});
	},
	releasePaymentSuccess: (orderId: string) => {
		mixpanel.track("order_release_payment_success_H", {
			order_id: orderId,
		});
	},
	releasePaymentFailed: (error: unknown, orderId: string) => {
		const errorInfo = trackErrorEvent(error);
		mixpanel.track("order_release_payment_failed_H", { errorInfo, orderId });
	},
};

export const OrderPaymentLinkTracker = {
	generatePaymentLinkIntent: (orderId: string) => {
		mixpanel.track("generate_payment_link_intent", {
			orderId,
		});
	},
	generatePaymentLinkSuccess: (orderId: string) => {
		mixpanel.track("generate_payment_link_success_H", {
			orderId,
		});
	},
	generatePaymentLinkFailed: (error: unknown, orderId: string) => {
		const errorInfo = trackErrorEvent(error);
		mixpanel.track("generate_payment_link_failed_H", {
			errorInfo,
			orderId,
		});
	},
};

export const FetchOrderTracker = {
	fetchOrdersIntent: () => {
		mixpanel.track("fetch_orders_intent");
	},

	fetchOrdersSuccess: () => {
		mixpanel.track("fetch_orders_success_H");
	},

	fetchOrdersFailed: (error: unknown) => {
		const errorInfo = trackErrorEvent(error);
		mixpanel.track("fetch_orders_failed_H", { errorInfo });
	},

	fetchOrderByIdIntent: (orderId: string) => {
		mixpanel.track("fetch_order_by_id_intent", {
			orderId,
		});
	},

	fetchOrderByIdSuccess: (orderId: string) => {
		mixpanel.track("fetch_order_by_id_success_H", {
			orderId,
		});
	},

	fetchOrderByIdFailed: (error: unknown, orderId: string) => {
		const errorInfo = trackErrorEvent(error);
		mixpanel.track("fetch_order_by_id_failed_H", {
			errorInfo,
			orderId,
		});
	},
};

export const trackErrorEvent = (error: unknown) => {
	let errorInfo: Record<string, any> = {
		message: "Unknown error",
		name: "UnknownError",
	};

	if (error instanceof AxiosError) {
		errorInfo = {
			message: error.response?.data?.message || error.message,
			code: error.code,
			status: error.response?.status,
			url: error.config?.url,
			method: error.config?.method,
		};
	} else if (error instanceof Error) {
		errorInfo = {
			message: error.message,
			name: error.name,
			stack: error.stack,
		};
	}

	return errorInfo;
};
