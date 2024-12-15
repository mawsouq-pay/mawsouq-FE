import { format } from "date-fns";

export const getGreetingAndDate = (locale?: string) => {
	const now = new Date();
	const hour = now.getHours();
	const greeting =
		hour < 12
			? locale == "en"
				? "Good Morning"
				: "صباح الخير،"
			: locale == "en"
				? "Good Evening"
				: "مساء الخير،";
	const formattedDate = format(now, "EEEE, dd MMMM yyyy");

	return { greeting, formattedDate };
};
