const serverRoutes = {
	login: "/user/login",
	register: "/user/register",
	regenerateTokens: "/user/refreshTokens",
	getUser: "/user/user",
	logout: "/user/logout",
	createPayouttMethod: "/user/createPayoutMethod",
	getUserPayoutOptions: "/user/getUserPayoutOptions",

	fetchOrders: "/order/my-orders",
	createOrder: "/order/create",
	linkOrder: "/order/linkOrder",
	fetchOrderById: "/order", //"/order:_id"
	fetchOrderPreview: "/order/preview", //"/order/preview:_id"

	createPaymentLink: "/order/payment-link", //POST
	updateOrderStatus: "/order/update",

	sellerRelease: "/order/sellerRelease",
};

export default serverRoutes;
