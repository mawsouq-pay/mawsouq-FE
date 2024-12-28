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
	zIndex: active ? 2 : 1, // Higher z-index for active container
	position: "relative",
	backgroundColor: active ? "rgba(52, 152, 219, 0.1)" : "transparent",
}));

export const StepContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const ImageWrapper = styled.div`
	display: flex;
	justify-content: row;
	flex: 1;
	justify-content: flex-end;
`;
export const BlobContainer = styled.div<{ active?: boolean }>`
	width: 55%;
	height: 100%;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	background-image: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M812.5 728.5Q648 957 391.5 861.5t-266-368q-9.5-272.5 243-319T799 314q178 186 13.5 414.5Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.05 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%2368c17c%22 d=%22M812.5 728.5Q648 957 391.5 861.5t-266-368q-9.5-272.5 243-319T799 314q178 186 13.5 414.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
	border-radius: 50%;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	margin: 0 auto;

	align-self: center;

	${({ active }) =>
		active &&
		`
		animation: pulse 1.5s infinite;
	`}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.02);
		}
		100% {
			transform: scale(1);
		}
	}
`;
