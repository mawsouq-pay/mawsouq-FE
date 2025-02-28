import React from "react";
import { MainWrapper } from "./ContactUs.styles";
import MSText from "@/components/Shared/MSText";
import ContactForm from "../ContactForm";

const ContactUs = () => {
	return (
		<MainWrapper>
			<MSText fontSize="3rem" color="#222" fontWeight="500">
				Contact Us
			</MSText>
			<ContactForm />
		</MainWrapper>
	);
};

export default ContactUs;
