const clientRoutes = {
	homePage: "/homePage",
	landingPage: "/",
	login: "/login",
	register: "/register",
	contactPage: "/contactPage",
	resetPassword: "/resetPassword",
	privacyPolicy: "/privacyPolicy",

	startTransaction: "/startTransaction",
	orderConfirmation: "/orderConfirmation",
	order: "/orders/[id]",
	previewOrder: "/previewOrder",

	howItWorks: "/howItWorks",
	profilePage: "/profilePage",
};

const publicRoutes = [
	clientRoutes.login,
	clientRoutes.register,
	clientRoutes.landingPage,
	clientRoutes.previewOrder,
	clientRoutes.resetPassword,
	clientRoutes.privacyPolicy,
];
const protectedRoutes = Object.values(clientRoutes).filter(
	(route) => !publicRoutes.includes(route)
);

export { clientRoutes, protectedRoutes };
