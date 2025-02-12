const serverRoutes = {
	login: "/user/login",
	register: "/user/register",
	regenerateTokens: "/user/refreshTokens",
	getUser: "/user/user",
	logout: "/user/logout",

	fetchOrders: "/order/my-orders",
	createOrder: "/order/create",
	fetchOrderById: "/order", //"/order:id"
	fetchOrderPreview: "/order/preview", //"/order/preview:id"

	createPaymentLink: "/order/payment-link", //POST
	updateOrderStatus: "/order/update",

	sellerRelease: "/order/sellerRelease",
};

export default serverRoutes;
