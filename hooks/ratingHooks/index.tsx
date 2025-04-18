import { usePost } from "@/client/customHooks";
import { OrderActionsTracker } from "@/helpers/tracking";
import { serverRoutes } from "@/routes";
import { RateOrderResponse, RateOrderInput } from "@/types/ratingTypes";

export const useRateOrder = () => {
	return usePost<RateOrderResponse, RateOrderInput>(serverRoutes.rateOrder, {
		onSuccess(data, variables, context) {
			OrderActionsTracker.submitRatingSuccess(
				variables?.orderId,
				variables?.rating,
				variables?.comment
			);
		},
		onError(error, variables) {
			OrderActionsTracker.submitRatingFailed(
				error,
				variables?.orderId,
				variables?.rating,
				variables?.comment
			);
		},
	});
};
