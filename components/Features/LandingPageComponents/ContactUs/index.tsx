import React from "react";
import { MainWrapper } from "./ContactUs.styles";
import MSText from "@/components/Shared/MSText";
import ContactForm from "./ContactForm";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";

const ContactUs = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	return (
		<div
			style={{
				display: "flex",
				alignContent: "center",
				width: "100%",
				justifyContent: "center",
			}}
		>
			<MainWrapper id="contact">
				<ContactForm />
			</MainWrapper>
		</div>
	);
};

export default ContactUs;
