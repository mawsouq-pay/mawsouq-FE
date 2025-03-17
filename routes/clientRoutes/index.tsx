const clientRoutes = {
	homePage: "/homePage",
	landingPage: "/",
	login: "/login",
	register: "/register",
	contactPage: "/contactPage",

	startTransaction: "/startTransaction",
	orderConfirmation: "/orderConfirmation",
	order: "/orders/[id]",
	paymentPage: "/paymentPage",
	previewOrder: "/previewOrder",

	howItWorks: "/howItWorks",
	profilePage: "/profilePage",
};

const publicRoutes = [
	clientRoutes.login,
	clientRoutes.register,
	clientRoutes.landingPage,
	clientRoutes.previewOrder,
];
const protectedRoutes = Object.values(clientRoutes).filter(
	(route) => !publicRoutes.includes(route)
);

export { clientRoutes, protectedRoutes };
