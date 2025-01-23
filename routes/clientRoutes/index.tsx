const clientRoutes = {
	homePage: "/homePage",
	landingPage: "/landingPage",
	login: "/login",
	register: "/register",

	startTransaction: "/startTransaction",
	orderConfirmation: "/orderConfirmation",
	orders: "/orders",
	order: "/orders/[id]",
	paymentPage: "/paymentPage",
	previewOrder: "/previewOrder",
};

const publicRoutes = [
	clientRoutes.login,
	clientRoutes.register,
	clientRoutes.landingPage,
	clientRoutes.previewOrder,
	clientRoutes.startTransaction,
];
const protectedRoutes = Object.values(clientRoutes).filter(
	(route) => !publicRoutes.includes(route)
);

export { clientRoutes, protectedRoutes };
