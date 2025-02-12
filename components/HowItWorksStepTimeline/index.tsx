import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { StepIconProps } from "@mui/material/StepIcon";
import Check from "@mui/icons-material/Check";
import {
	MainWrapper,
	StepContainer,
	ImageWrapper,
	VerticalStepIconRoot,
	VerticalConnector,
	BlobContainer,
	StepperWrapper,
} from "./StepTimeLine.styles";
import Image from "next/image";
import MSText from "../MSText";
import { HowItWorksStepTimeLineProps } from "./types";
import useCustomBreakpoint from "@/helpers/screenSizes";

function VerticalStepIcon(props: StepIconProps) {
	const { active, completed, className } = props;
	return (
		<VerticalStepIconRoot ownerState={{ active }} className={className}>
			{completed ? <Check className="VerticalStepIcon-completedIcon" /> : null}
		</VerticalStepIconRoot>
	);
}

const HowItWorksStepTimeline = (props: HowItWorksStepTimeLineProps) => {
	const { steps, activeStep, setActiveStep, stopAnimation, resumeAnimation } =
		props;
	const { isMobile, xxl } = useCustomBreakpoint();

	return (
		<MainWrapper style={{ flexDirection: isMobile ? "column" : "row" }}>
			<StepperWrapper>
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
											setTimeout(() => {
												resumeAnimation();
											}, 5000);
										}}
									>
										<MSText
											fontSize="18px"
											mobileFontSize="16px"
											fontWeight={index === activeStep ? "600" : "normal"}
										>
											{step.title}
										</MSText>
										<MSText
											fontSize="16px"
											mobileFontSize="14px"
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
			</StepperWrapper>
			<ImageWrapper>
				<BlobContainer active={true}>
					<Image
						src={steps[activeStep].imageSource}
						alt="Order Success"
						layout="responsive"
						width={500}
						height={375}
					/>
				</BlobContainer>
			</ImageWrapper>
		</MainWrapper>
	);
};

export default HowItWorksStepTimeline;
