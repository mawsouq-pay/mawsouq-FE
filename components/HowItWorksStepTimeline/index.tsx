import React from "react";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
	stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import { Typography } from "@mui/material";
import Check from "@mui/icons-material/Check";
import { colors } from "@/constants/theme";
import {
	MainWrapper,
	StepContainer,
	ImageWrapper,
} from "./StepTimeLine.styles";
import Image from "next/image";
import MSText from "../MSText";

const VerticalConnector = styled(StepConnector)(({ theme }) => ({
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

const VerticalStepIconRoot = styled("div")<{
	ownerState: { active?: boolean };
}>(({ ownerState }) => ({
	color: ownerState.active ? colors.blue : "#eaeaf0",
	display: "flex",
	height: 30,
	width: 30,
	alignItems: "center",
	justifyContent: "center",
	borderRadius: "50%",
	backgroundColor: "currentColor",
	zIndex: 1,
	"& .VerticalStepIcon-completedIcon": {
		color: colors.blue,
		fontSize: 20,
	},
}));

function VerticalStepIcon(props: StepIconProps) {
	const { active, completed, className } = props;
	return (
		<VerticalStepIconRoot ownerState={{ active }} className={className}>
			{completed ? <Check className="VerticalStepIcon-completedIcon" /> : null}
		</VerticalStepIconRoot>
	);
}

const HowItWorksStepTimeline = (props: HowItWorksStepTimeLineProps) => {
	const { steps, activeStep, setActiveStep, stopAnimation } = props;
	return (
		<MainWrapper>
			<div style={{ width: "40%" }}>
				<Stepper
					orientation="vertical"
					activeStep={activeStep}
					connector={<VerticalConnector />}
					style={{ cursor: "pointer" }}
				>
					{steps.map((step, index) => (
						<Step key={step.title} active={index === activeStep}>
							<StepLabel StepIconComponent={VerticalStepIcon}>
								<StepContainer active={index === activeStep}>
									<div
										onClick={() => {
											stopAnimation();
											setActiveStep(index);
										}}
									>
										<MSText
											fontSize="35px"
											mobileFontSize="20px"
											fontWeight={index === activeStep ? "bold" : "normal"}
										>
											{step.title}
										</MSText>
										<MSText
											fontSize="25px"
											mobileFontSize="20px"
											color="textSecondary"
										>
											{step.description}
										</MSText>
									</div>
								</StepContainer>
							</StepLabel>
						</Step>
					))}
				</Stepper>
			</div>
			<ImageWrapper>
				<div
					style={{
						width: "55%",
						margin: "0 auto",
						position: "relative",
						alignSelf: "center",
					}}
				>
					<Image
						src={steps[activeStep].imageSource}
						alt="Order Success"
						layout="responsive"
						width={500}
						height={375}
					/>
				</div>
			</ImageWrapper>
		</MainWrapper>
	);
};

export default HowItWorksStepTimeline;
