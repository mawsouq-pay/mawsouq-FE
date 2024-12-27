const clientRoutes = {
	homePage: "/homePage",
	landingPage: "/landingPage",
	login: "/login",
	register: "/register",
	orderConfirmation: "/orderConfirmation",
	orders: "/orders",
	startTransaction: "/startTransaction",
};

const publicRoutes = [
	clientRoutes.login,
	clientRoutes.register,
	clientRoutes.landingPage,
];
const protectedRoutes = Object.values(clientRoutes).filter(
	(route) => !publicRoutes.includes(route)
);

export { clientRoutes, protectedRoutes };
