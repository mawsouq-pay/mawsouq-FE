import React from "react";
import { MainWrapper } from "./ContactUs.styles";
import MSText from "@/components/Shared/MSText";
import ContactForm from "../ContactForm";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";

const ContactUs = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	return (
		<MainWrapper id="contact">
			<MSText fontSize="3rem" color="#222" fontWeight="500">
				{text.contactUs}
			</MSText>
			<ContactForm />
		</MainWrapper>
	);
};

export default ContactUs;
