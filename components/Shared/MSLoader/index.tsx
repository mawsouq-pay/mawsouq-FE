import { CircularProgress } from "@mui/material";
import React from "react";
import { MSLoaderProps } from "./types";

const MSLoader = ({
	color = "secondary",
	size = "40px",
	thickness = 3.6,
}: MSLoaderProps) => {
	return (
		<CircularProgress color={"secondary"} size={size} thickness={thickness} />
	);
};
export default MSLoader;
