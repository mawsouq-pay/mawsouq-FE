import styled from "styled-components";
import { colors } from "@/constants/theme";
import { StepConnector, stepConnectorClasses } from "@mui/material";

export const VerticalConnector = styled(StepConnector)(({ theme }) => ({
	[`& .${stepConnectorClasses.line}`]: {
		borderColor: "#eaeaf0",
		borderLeftWidth: 3,
		minHeight: 50,
	},
	[`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
		borderColor: colors.black,
	},
	[`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
		borderColor: colors.black,
	},
}));

export const VerticalStepIconRoot = styled("div")<{
	ownerState: { active?: boolean };
}>(({ ownerState }) => ({
	color: ownerState.active ? "transparent" : "#eaeaf0",
	display: "flex",
	height: 30,
	width: 30,
	alignItems: "center",
	justifyContent: "center",
	borderRadius: "50%",
	backgroundColor: "currentColor",
	zIndex: ownerState.active ? 1 : 0,
	"& .VerticalStepIcon-completedIcon": {
		color: colors.blue,
		fontSize: 20,
	},
}));
export const MainWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;
export const StepContainer = styled.div<{ active?: boolean }>(({ active }) => ({
	display: "flex",
	alignItems: "flex-start",
	gap: "16px",
	opacity: active ? 1 : 0.5,
	transform: active ? "scale(1.1)" : "scale(1)",
	boxShadow: active ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
	borderRadius: "8px",
	transition: "all 0.3s ease-in-out",
	padding: "10px",
	zIndex: active ? 2 : 1,
	position: "relative",
	backgroundColor: active ? "rgba(52, 152, 219, 0.1)" : "transparent",
}));

export const StepContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
