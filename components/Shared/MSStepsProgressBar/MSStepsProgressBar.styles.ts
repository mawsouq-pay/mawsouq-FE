import { styled } from "@mui/material/styles";
import StepConnector, {
	stepConnectorClasses,
} from "@mui/material/StepConnector";
import { colors } from "@/constants/theme";

export const VerticalConnector = styled(StepConnector)(({ theme }) => ({
	[`& .${stepConnectorClasses.line}`]: {
		borderColor: `${colors.green}`,
		borderLeftWidth: 3,
		borderRadius: 1,
		//marginLeft: "15px",
		height: "20px",
	},
	[`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
		borderColor: `${colors.green}`,
	},
	[`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
		borderColor: `${colors.green}`,
	},
}));
export const HorizontalConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 15,
		left: "calc(-50% + 16px)",
		right: "calc(50% + 16px)",
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: `${colors.green}`,
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: `${colors.green}`,
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		borderColor: "#eaeaf0",
		borderTopWidth: 3,
		borderRadius: 1,
	},
}));

export const QontoStepIconRoot = styled("div")<{
	ownerState: { active?: boolean; completed?: boolean };
}>(({ ownerState }) => ({
	color: ownerState.completed
		? `${colors.green}`
		: ownerState.active
			? `${colors.green}`
			: "#eaeaf0",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: 30,
	height: 30,
	borderRadius: "50%",
	border: ownerState.active ? `3px solid ${colors.green}` : "3px solid #eaeaf0",
	backgroundColor: ownerState.completed
		? `${colors.green}`
		: ownerState.active
			? "#ffffff"
			: "#eaeaf0",
	zIndex: 1,
	"& .QontoStepIcon-number": {
		color: ownerState.completed
			? "#ffffff"
			: ownerState.active
				? `${colors.green}`
				: "#555555",
		fontWeight: 600,
		fontSize: "16px",
	},
	"& .QontoStepIcon-check": {
		color: "#ffffff",
		width: 16,
		height: 16,
		fontSize: "18px",
	},
}));
