const serverRoutes = {
	// User
	login: "/user/login",
	register: "/user/register",
	regenerateTokens: "/user/refreshTokens",
	getUser: "/user/user",
	logout: "/user/logout",
	resetPassword: "/user/resetPassword",
	updatePassword: "/user/updatePassword",
	generateUserOtp: "/user/generateUserOtp",
	verifyUserOtp: "/user/verifyUserOtp",

	// Payout
	createPayoutMethod: "/payout/createPayoutMethod",
	getUserPayoutOptions: "/payout/getUserPayoutOptions",
	deletePayoutOption: "/payout/deleteUserPayoutOption",
	editPayoutOption: "/payout/editPayoutMethod",
	getPayoutMethodById: "/payout/getPayoutMethodById",

	// Order
	fetchOrders: "/order/my-orders",
	createOrder: "/order/create",
	linkOrder: "/order/linkOrder",
	fetchOrderById: "/order", // "/order/:_id"
	fetchOrderPreview: "/order/preview", // "/order/preview/:orderId"
	updateOrderStatus: "/order/update",

	// Payment
	createPaymentLink: "/payment/payment-link",
	sellerRelease: "/payment/sellerRelease",
	captureOrder: "/payment/captureOrder",

	// Dispute
	createDispute: "/dispute/addDispute",

	// Rating
	rateOrder: "/rating/addOrderRating",
};

export default serverRoutes;
