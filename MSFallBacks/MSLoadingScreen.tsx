import React from "react";
import { Box } from "@mui/material";
import MSLoader from "@/components/MSLoader";

const MSLoadingScreen = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}
		>
			<MSLoader size="80px" thickness={4.5} />
		</Box>
	);
};

export default MSLoadingScreen;
