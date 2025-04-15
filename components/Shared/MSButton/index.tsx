import React from "react";
import { StyledButton, ButtonContentWrapper } from "./MSButton.styles";
import { colors } from "@/constants/theme";
import { CircularProgress } from "@mui/material";
import MSText from "../MSText";

const MSButton = (props: MSButtonProps) => {
	const {
		onClick,
		style = {},
		loading,
		disabled,
		title,
		type = "button",
		fontColor,
	} = props;
	return (
		<StyledButton
			onClick={onClick}
			style={style}
			disabled={loading || disabled}
			type={type}
		>
			<ButtonContentWrapper>
				{loading && (
					<CircularProgress
						size={16}
						style={{ color: colors.white, marginRight: "8px" }}
					/>
				)}
				<MSText
					fontSize={"16px"}
					mobileFontSize="14px"
					color={fontColor ? fontColor : colors.white}
				>
					{title}
				</MSText>
			</ButtonContentWrapper>
		</StyledButton>
	);
};

export default MSButton;
