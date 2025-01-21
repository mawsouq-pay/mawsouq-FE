import { clientRoutes } from "@/routes/clientRoutes";
import { useRouter } from "next/router";

export default function Home() {
	const router = useRouter();

	const navigateToHomePage = () => {
		router.push(clientRoutes.landingPage);
	};

	return (
		<div>
			<h1>Welcome to Mawsouq</h1>
			<button onClick={navigateToHomePage}>Go to Homepage</button>
		</div>
	);
}
