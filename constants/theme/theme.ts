import { createTheme } from "@mui/material/styles";

export const createMuiTheme = (fontVariable: string) =>
	createTheme({
		typography: {
			fontFamily: fontVariable,
		},
	});
