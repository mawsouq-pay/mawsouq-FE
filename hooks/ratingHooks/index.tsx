import { usePost } from "@/client/customHooks";
import { serverRoutes } from "@/routes";
import { RateOrderResponse, RateOrderInput } from "@/types/ratingTypes";

export const useRateOrder = () => {
	return usePost<RateOrderResponse, RateOrderInput>(serverRoutes.rateOrder);
};
