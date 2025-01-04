const serverRoutes = {
	login: "/user/login",
	register: "/user/register",
	regenerateTokens: "/user/refreshTokens",
	getUser: "/user/user",

	fetchOrders: "/order/my-orders",
	createOrder: "/order/create",
	fetchOrderById: "/order", //"/order:id"
};

export default serverRoutes;
