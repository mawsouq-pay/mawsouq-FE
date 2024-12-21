const en = {
	// General
	goodMorning: "Good Morning,",
	goodEvening: "Good Evening,",
	todayIs: "Today is",

	// Actions
	createANewTransaction: "Start Transaction",
	viewMyTransactions: "View Transactions",
	whatWouldYouLikeToDoTod: "What would you like to do today?",
	createOrder: "Create an Order",
	next: "Next",
	submit: "Submit",
	back: "Back",

	// Navigation and Overview
	walletBalance: "Wallet Balance",
	activeTransactions: "Active Transactions",
	transactionsOverview: "Transactions Overview",
	myTransactions: "My Transactions",

	// Order attributes
	transactionTitle: "Transaction title",
	itemName: "Item Name",
	description: "Description",
	deliverDate: "Delivery Date",
	quantity: "Quantity",
	price: "Price",
	phoneNumber: "Phone Number",
	email: "Email",
	status: "Status",

	// Placeholders
	phoneNumberPlaceHolder: "Enter phone number",
	emailPlaceHolder: "Enter email",
	enterQuantity: "Enter Quantity",
	enterDescription: "Enter description",
	enterTitle: "Enter transaction title",
	enterItemName: "Enter item name",

	//FORM Error Messages
	requiredTitle: "Transaction title is required",
	minLength: "Minimum length is 3 characters",
	maxLength: "Maximum length is 255 characters",
	itemNameRequired: "Item name is required",
	requiredDescription: "Description is required",
	requiredPrice: "Price is required",
	mustBePositive: "Value must be greater than zero",
	mustBeNumber: "Value must be a valid number",
	deliveryDateRequired: "Delivery date is required",
	futureDateOnly: "Delivery date must be in the future",
	quantityRequired: "Quantity is required",
	mustBeInteger: "Quantity must be an integer",
	requiredEmail: "Email is required",
	invalidEmail: "Invalid email address",
	requiredPhone: "Phone number is required",
	invalidPhone:
		"A valid phone number should start with '01' followed by 9 digits.",
	invalidStatus: "Invalid status value",

	//Backend Error Messages
	refreshAndTryAgain:
		"An unexpected error occurred, please refresh and try again.",

	// Payment Summary
	subTotal: "Sub total",
	escrowFee: "Fee",
	totalDue: "Total due",

	//Button CTA
	viewOrder: "View Order",
};

export default en;
