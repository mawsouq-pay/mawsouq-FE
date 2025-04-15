const serverRoutes = {
	// User
	login: "/user/login",
	register: "/user/register",
	regenerateTokens: "/user/refreshTokens",
	getUser: "/user/user",
	logout: "/user/logout",
	resetPassword: "/user/resetPassword",
	updatePassword: "/user/updatePassword",

	// Payout
	createPayoutMethod: "/payout/create",
	getUserPayoutOptions: "/payout/user-options",
	deletePayoutOption: "/payout/delete",
	editPayoutOption: "/payout/edit",
	getPayoutMethodById: "/payout/:payoutId",

	// Order
	createOrder: "/order/create",
	fetchOrders: "/order/my-orders",
	updateOrderStatus: "/order/update",
	fetchOrderById: "/order/:_id",
	fetchOrderPreview: "/order/preview/:orderId",

	// Payment
	createPaymentLink: "/payment/payment-link",
	sellerRelease: "/payment/sellerRelease",
	captureOrder: "/payment/captureOrder",

	// Dispute
	createDispute: "/dispute/add",

	// Rating
	rateOrder: "/rating/add",
};
export default serverRoutes;
