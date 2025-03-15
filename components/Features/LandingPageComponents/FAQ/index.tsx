import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { colors } from "@/constants/theme";
import { faqData } from "./types";
import MSText from "@/components/Shared/MSText";
import ScribbledCircleText from "../ScribbledCircleText";
import { MainDiv } from "./FAQ.styles";

const FAQ = () => {
	return (
		<div
			id="faq"
			style={{
				backgroundColor: `${colors.backgroundColor}`,
				paddingTop: "50px",
				borderRadius: 40,
			}}
		>
			<div style={{ textAlign: "center" }}>
				<ScribbledCircleText text="FAQS" />
			</div>
			<MainDiv>
				{faqData.map((item, index) => (
					<Accordion key={index} style={{}}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls={`panel${index}-content`}
							id={`panel${index}-header`}
						>
							<MSText
								fontSize="16px"
								fontWeight="600"
								color={colors.black}
								style={{ textAlign: "start" }}
							>
								{item.question}
							</MSText>
						</AccordionSummary>
						<AccordionDetails>
							<MSText fontSize="16px" color={colors.black}>
								{item.answer}
							</MSText>
						</AccordionDetails>
					</Accordion>
				))}
			</MainDiv>
		</div>
	);
};

export default FAQ;
