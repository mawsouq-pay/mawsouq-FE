import { format } from "date-fns";

export const getGreetingAndDate = (locale?: string) => {
	const now = new Date();
	const hour = now.getHours();
	let greeting = "Hello";
	if (hour < 12) {
		greeting = locale === "en" ? "Good Morning" : "صباح الخير";
	} else if (hour < 18) {
		greeting = locale === "en" ? "Good Afternoon" : "مساء الخير";
	} else {
		greeting = locale === "en" ? "Good Evening" : "مساء الخير";
	}
	const formattedDate = format(now, "EEEE, dd MMMM yyyy");

	return { greeting, formattedDate };
};
export const getGreeting = (locale: string) => {};
