import React from "react";
import { StyledButton } from "./MSButton.styles";
import MSText from "../MSText";
import { colors } from "@/constants/theme";
import { CircularProgress } from "@mui/material";
const MSButton = (props: ButtonProps) => {
	const { onClick, style = {}, loading, disabled, title } = props;
	return (
		<StyledButton
			onClick={onClick}
			style={style}
			disabled={loading || disabled}
		>
			<MSText fontSize={"16px"} mobileFontSize="1px" color={colors.white}>
				{loading ? <CircularProgress /> : title}
			</MSText>
		</StyledButton>
	);
};

export default MSButton;
