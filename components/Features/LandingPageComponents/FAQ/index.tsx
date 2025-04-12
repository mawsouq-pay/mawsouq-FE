import React, { useState } from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import { colors } from "@/constants/theme";
import { faqData, faqDataAr } from "./types";
import MSText from "@/components/Shared/MSText";
import ScribbledCircleText from "../ScribbledCircleText";
import {
	MainDiv,
	StyledAccordion,
	StyledSummary,
	StyledExpandIcon,
} from "./FAQ.styles";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import ContactForm from "../ContactForm";
import MSModal from "@/components/Shared/MSModal";

const FAQ = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const finalData = locale === "ar" ? faqDataAr : faqData;
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);
	return (
		<div
			id="FAQS"
			style={{
				paddingTop: "80px",
				borderRadius: 40,
				paddingBottom: "50px",
			}}
		>
			<div style={{ textAlign: "center", marginBottom: "20px" }}>
				<ScribbledCircleText text="FAQs" />
			</div>
			<MainDiv>
				{finalData.map((item, index) => (
					<StyledAccordion key={index}>
						<StyledSummary
							expandIcon={<StyledExpandIcon />}
							aria-controls={`panel${index}-content`}
							id={`panel${index}-header`}
						>
							<MSText fontSize="16px" fontWeight="600" color={colors.gray900}>
								{item.question}
							</MSText>
						</StyledSummary>
						<AccordionDetails>
							<MSText fontSize="16px" color={colors.gray900}>
								{item.answer}
							</MSText>
						</AccordionDetails>
					</StyledAccordion>
				))}
				<div
					onClick={() => {
						setIsContactModalOpen(true);
					}}
					style={{ cursor: "pointer" }}
				>
					<MSText fontSize="18px" style={{ marginTop: 25 }} fontWeight="bold">
						{text.haveAQuestion}
						<MSText
							style={{ textDecoration: "underline", color: colors.darkGreen }}
						>
							{text.sendMessage}
						</MSText>
					</MSText>
				</div>
			</MainDiv>
			<MSModal
				open={isContactModalOpen}
				onClose={() => setIsContactModalOpen(false)}
				showActions={false}
			>
				<ContactForm onCancel={() => setIsContactModalOpen(false)} />
			</MSModal>
		</div>
	);
};

export default FAQ;
