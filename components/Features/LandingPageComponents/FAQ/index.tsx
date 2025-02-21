import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { colors } from "@/constants/theme";
import { faqData } from "./types";
import MSText from "@/components/Shared/MSText";
import ScribbledCircleText from "../ScribbledCircleText";
import MSAnimatedDiv from "@/components/Shared/MSAnimated/MSAnimatedDiv";

const FAQ = () => {
	return (
		<MSAnimatedDiv>
			<div
				style={{
					maxWidth: "1000px",
					margin: "auto",
					padding: "20px",
				}}
			>
				<div style={{ textAlign: "center" }}>
					<ScribbledCircleText text="FAQS" />
				</div>

				<MSText
					fontSize="1.5rem"
					color={colors.gray}
					style={{
						textAlign: "center",
						marginTop: "10px",
						marginBottom: "60px",
					}}
				>
					Find Answers to Common Questions About Our Process.
				</MSText>
				{faqData.map((item, index) => (
					<Accordion key={index}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls={`panel${index}-content`}
							id={`panel${index}-header`}
						>
							<MSText
								fontSize="20px"
								fontWeight="600"
								color={colors.black}
								style={{ textAlign: "start" }}
							>
								{item.question}
							</MSText>
						</AccordionSummary>
						<AccordionDetails>
							<MSText fontSize="20px" color={colors.black}>
								{item.answer}
							</MSText>
						</AccordionDetails>
					</Accordion>
				))}
			</div>
		</MSAnimatedDiv>
	);
};

export default FAQ;
