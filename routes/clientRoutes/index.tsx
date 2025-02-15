const clientRoutes = {
	homePage: "/homePage",
	landingPage: "/landingPage",
	login: "/login",
	register: "/register",
	contactPage: "/contactPage",

	startTransaction: "/startTransaction",
	orderConfirmation: "/orderConfirmation",
	orders: "/orders",
	order: "/orders/[id]",
	paymentPage: "/paymentPage",
	previewOrder: "/previewOrder",

	howItWorks: "/howItWorks",
};

const publicRoutes = [
	clientRoutes.login,
	clientRoutes.register,
	clientRoutes.landingPage,
	clientRoutes.previewOrder,
	clientRoutes.contactPage,
];
const protectedRoutes = Object.values(clientRoutes).filter(
	(route) => !publicRoutes.includes(route)
);

export { clientRoutes, protectedRoutes };
