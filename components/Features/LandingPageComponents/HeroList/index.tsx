import React from "react";
import { Container, StepList, StepItem } from "./HeroList.styles";
import MSText from "../../../Shared/MSText";
import { colors } from "@/constants/theme";
import { CircleTickIcon } from "@/assets/icons";

const StepsList = (props: StepsListProps) => {
	const { title, steps } = props;
	return (
		<Container>
			<MSText
				fontSize="24px"
				mobileFontSize="16px"
				fontWeight="bold"
				color={colors.white}
			>
				{title}
			</MSText>
			<StepList>
				{steps.map((step, index) => (
					<StepItem key={index} isActive={step.isActive}>
						<CircleTickIcon
							fill={step.isActive ? colors.buttonGreenHover : "white"}
						/>
						<MSText
							fontSize="16px"
							mobileFontSize="14px"
							color={step.isActive ? colors.buttonGreenHover : colors.white}
						>
							{step.label}
						</MSText>
					</StepItem>
				))}
			</StepList>
		</Container>
	);
};

export default StepsList;
