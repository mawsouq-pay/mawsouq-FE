import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { colors } from "@/constants/theme";
import { faqData } from "./types";
import MSText from "@/components/Shared/MSText";

const FAQ = () => {
	return (
		<div
			style={{
				maxWidth: "1000px",
				margin: "auto",
				padding: "20px",
			}}
		>
			<MSText
				fontSize="2rem"
				fontWeight="bold"
				color={colors.black}
				style={{ textAlign: "center" }}
			>
				Frequently Asked Questions
			</MSText>
			<MSText
				fontSize="1.5rem"
				color={colors.gray}
				style={{ textAlign: "center", marginTop: "10px", marginBottom: "60px" }}
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
							style={{ textAlign: "center" }}
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
	);
};

export default FAQ;
