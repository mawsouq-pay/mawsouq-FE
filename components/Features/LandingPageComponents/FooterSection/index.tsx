import React from "react";
import styled from "styled-components";
import { colors } from "@/constants/theme";
import { Facebook, Instagram, Mail } from "lucide-react";
import { MSLogo } from "@/assets/icons";
import { clientRoutes } from "@/routes";

const FooterWrapper = styled.footer`
	background-color: #43d9a4;
	padding: 50px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;
	border-top: 1px solid ${colors.lightGray};
	text-align: center;
	width: 100%;
	border-top-right-radius: 40px;
	border-top-left-radius: 40px;
`;

const FooterContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	width: 100%;
	max-width: 1200px;
`;

const Logo = styled.img`
	width: 150px;
	margin-bottom: 15px;
`;

const SocialLinks = styled.div`
	display: flex;
	gap: 20px;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${colors.white};
		text-decoration: none;
		transition: 0.3s;

		&:hover {
			color: ${colors.darkGreen};
		}
	}
`;

const FooterLinks = styled.div`
	display: flex;
	gap: 15px;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	a {
		color: ${colors.white};
		text-decoration: none;
		font-weight: 500;
		font-size: 16px;

		&:hover {
			text-decoration: underline;
		}
	}
`;

const FooterText = styled.p`
	color: ${colors.gray};
	font-size: 14px;
	margin: 0;
`;

const FooterSection = () => {
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
						href="https://www.facebook.com/mawsouq"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Facebook size={24} />
					</a>
					<a href="mailto:contact@mawsouq.com">
						<Mail size={24} />
					</a>
				</SocialLinks>
				<FooterLinks>
					<a href="/contact">Contact Us</a>
					<a href="/about">About Us</a>
					<a href="/terms">Terms of Service</a>
					<a href={clientRoutes.privacyPolicy}>Privacy Policy</a>
				</FooterLinks>
				<FooterText>
					&copy; {new Date().getFullYear()} Mawsouq. All rights reserved.
				</FooterText>
			</FooterContent>
		</FooterWrapper>
	);
};

export default FooterSection;
