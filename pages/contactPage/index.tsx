import ContactForm from "@/components/ContactForm";
import HomePageLayout from "@/layouts/HomePageLayout";
import React from "react";

const ContactPage = () => {
	return (
		<div>
			<ContactForm />
		</div>
	);
};
ContactPage.CustomLayout = HomePageLayout;
export default ContactPage;
