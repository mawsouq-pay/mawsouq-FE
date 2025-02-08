import React from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { clientRoutes } from "@/routes";
import MSButton from "@/components/MSButton";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSText from "@/components/MSText";

const MSPageNotFound = () => {
	const router = useRouter();
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				textAlign: "center",
			}}
		>
			<MSText fontSize="80px" mobileFontSize="25px">
				404
			</MSText>
			<MSText
				fontSize="30px"
				mobileFontSize="16px"
				fontWeight="bold"
				style={{ paddingBottom: 10 }}
			>
				{text.pageNotFound}
			</MSText>
			<MSText
				fontSize="24px"
				mobileFontSize="12px"
				fontWeight="600"
				style={{ paddingBottom: 30 }}
			>
				{text.pageNotFoundDescription}
			</MSText>
			<MSButton
				onClick={() => {
					router.push(clientRoutes.homePage);
				}}
				title={text.goToHome}
			/>
		</Box>
	);
};

export default MSPageNotFound;
