const serverRoutes = {
	login: "/user/login",
	register: "/user/register",
	regenerateTokens: "/user/refreshTokens",
	getUser: "/user/user",
	logout: "/user/logout",
	resetPassword: "/user/resetPassword",
	updatePassword: "/user/updatePassword",

	createPayouttMethod: "/user/createPayoutMethod",
	getUserPayoutOptions: "/user/getUserPayoutOptions",
	deletePayoutOption: "/user/deleteUserPayoutOption",
	editPayoutOption: "/user/editPayoutMethod",

	fetchOrders: "/order/my-orders",
	createOrder: "/order/create",
	linkOrder: "/order/linkOrder",
	fetchOrderById: "/order", //"/order:_id"
	fetchOrderPreview: "/order/preview", //"/order/preview:_id"

	createPaymentLink: "/order/payment-link", //POST
	updateOrderStatus: "/order/update",

	sellerRelease: "/order/sellerRelease",
	captureOrder: "/order/captureOrder",

	createDispute: "/order/addDispute",
};

export default serverRoutes;
