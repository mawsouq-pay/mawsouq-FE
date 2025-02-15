import React, { useEffect, useRef, useState } from "react";
import {
	Wrapper,
	TitleWrapper,
	StepsAndImagesWrapper,
} from "./HowItWorksSection.styles";
import { colors } from "@/constants/theme";
import { steps } from "./types";
import HowItWorksStepTimeline from "../HowItWorksStepTimeline";
import MSText from "@/components/Shared/MSText";
import { Divider } from "@mui/material";
const HowItWorksSection = () => {
	const [activeStep, setActiveStep] = useState(0);
	const stopAnimRef = useRef(false);
	const stopAnimation = () => {
		stopAnimRef.current = true;
	};
	const resumeAnimation = () => {
		stopAnimRef.current = false;
	};
	useEffect(() => {
		const timer = setInterval(() => {
			if (!stopAnimRef.current) {
				setActiveStep((prevStep) => (prevStep + 1) % steps.length);
			}
		}, 5000);

		return () => clearInterval(timer);
	}, [steps.length]);

	return (
		<Wrapper id="howItWorks">
			<TitleWrapper>
				<MSText
					fontSize="2rem"
					fontWeight="bold"
					color={colors.black}
					style={{ textAlign: "center" }}
				>
					How It Works
				</MSText>
				<MSText
					fontSize="1.125rem"
					color={colors.gray}
					style={{ textAlign: "center", marginTop: "10px" }}
				>
					From agreement to payment, Mawsouq ensures secure and seamless
					transactions.
				</MSText>
				<Divider
					style={{
						width: "20%",
						margin: "20px auto",
						backgroundColor: colors.divider,
					}}
				/>
			</TitleWrapper>
			<StepsAndImagesWrapper>
				<HowItWorksStepTimeline
					steps={steps}
					activeStep={activeStep}
					setActiveStep={setActiveStep}
					stopAnimation={stopAnimation}
					resumeAnimation={resumeAnimation}
				/>{" "}
			</StepsAndImagesWrapper>
		</Wrapper>
	);
};

export default HowItWorksSection;
