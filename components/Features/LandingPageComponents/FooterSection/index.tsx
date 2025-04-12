import React from "react";
import { Facebook, Instagram, Mail } from "lucide-react";
import { MSLogo } from "@/assets/icons";
import { clientRoutes } from "@/routes";
import { useLocaleStore } from "@/store";
import {
	FooterContent,
	FooterLinks,
	FooterText,
	FooterWrapper,
	SocialLinks,
} from "./FooterSection.styles";

const en = {
	terms: "Terms of Service",
	privacy: "Privacy Policy",
	copyright: `© ${new Date().getFullYear()} Mawsouq. All rights reserved.`,
};

const ar = {
	terms: "شروط الاستخدام",
	privacy: "سياسة الخصوصية",
	copyright: `© ${new Date().getFullYear()} موصوق. جميع الحقوق محفوظة.`,
};

const FooterSection = () => {
	const { locale } = useLocaleStore();
	const text = locale === "ar" ? ar : en;

	return (
		<FooterWrapper>
			<FooterContent>
				<MSLogo />
				<SocialLinks>
					<a
						href="https://www.instagram.com/mawsouq.pay"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Instagram size={24} />
					</a>
					<a
						href="https://www.facebook.com/profile.php?id=61567454860427&sk=about"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Facebook size={24} />
					</a>
					<a href="mailto:support@mawsouq-pay.com">
						<Mail size={24} />
					</a>
				</SocialLinks>
				<FooterLinks>
					<a href={clientRoutes.termsAndConditions}>{text.terms}</a>
					<a href={clientRoutes.privacyPolicy}>{text.privacy}</a>
				</FooterLinks>
				<FooterText>{text.copyright}</FooterText>
			</FooterContent>
		</FooterWrapper>
	);
};

export default FooterSection;
