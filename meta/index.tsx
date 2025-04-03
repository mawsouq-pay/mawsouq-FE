type PageKey =
	| "homePage"
	| "login"
	| "register"
	| "previewOrder"
	| "startTransaction"
	| "paymentRedirect"
	| "resetPassword"
	| "profilePage"
	| "termsAndConditions"
	| "privacyPolicy"
	| "orders";

type PageMeta = {
	title: string;
	description: string;
	canonical?: string;
	image?: string;
};

export const pageMetadata: Record<PageKey, PageMeta> = {
	homePage: {
		title: "Mawsouq – Secure Your Orders & Payments",
		description:
			"Handle deposits safely with Mawsouq. Track, confirm, and pay only when you're sure.",
		canonical: "https://mawsouq-pay.com/homePage",
	},
	login: {
		title: "Login – Mawsouq",
		description: "Login securely to your Mawsouq account.",
		canonical: "https://mawsouq-pay.com/login",
	},
	register: {
		title: "Register – Mawsouq",
		description: "Create your Mawsouq account to securely trade.",
		canonical: "https://mawsouq-pay.com/register",
	},
	previewOrder: {
		title: "Order Preview – Mawsouq",
		description: "Review your order before confirming and paying.",
		canonical: "https://mawsouq-pay.com/previewOrder",
		image: "https://mawsouq-pay.com/layout/opengraph-image.png",
	},
	startTransaction: {
		title: "Start Transaction – Mawsouq",
		description: "Fill in the transaction details and begin securely.",
		canonical: "https://mawsouq-pay.com/startTransaction",
	},
	paymentRedirect: {
		title: "Redirecting… – Mawsouq",
		description: "Verifying your payment and redirecting you now.",
		canonical: "https://mawsouq-pay.com/paymentRedirect",
	},
	resetPassword: {
		title: "Reset Password – Mawsouq",
		description: "Change or reset your password securely.",
		canonical: "https://mawsouq-pay.com/resetPassword",
	},
	profilePage: {
		title: "My Profile – Mawsouq",
		description: "View or update your Mawsouq account details.",
		canonical: "https://mawsouq-pay.com/profilePage",
	},
	termsAndConditions: {
		title: "Terms & Conditions – Mawsouq",
		description: "Read our terms and conditions before using Mawsouq.",
		canonical: "https://mawsouq-pay.com/termsAndConditions",
	},
	privacyPolicy: {
		title: "Privacy Policy – Mawsouq",
		description: "Learn how we protect your data at Mawsouq.",
		canonical: "https://mawsouq-pay.com/privacyPolicy",
	},
	orders: {
		title: "Order Details – Mawsouq",
		description: "Track or manage your Mawsouq order.",
		canonical: "https://mawsouq-pay.com/orders",
	},
};
