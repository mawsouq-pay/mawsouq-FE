import { Order } from "../ordersTypes";

export interface RatingT {
	_id: string;
	orderId: Order;
	sellerRating: number | null;
	buyerRating: number | null;
	sellerComment: string | null;
	buyerComment: string | null;
}
export interface RateOrderInput {
	orderId: string;
	rating: number;
	comment: string;
}
export interface RateOrderResponse {
	message: string;
}
