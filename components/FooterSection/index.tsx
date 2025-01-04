import React from "react";
import styled from "styled-components";
import { colors } from "@/constants/theme";

const FooterWrapper = styled.footer`
	background-color: white;
	padding: 40px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	border-top: 1px solid ${colors.lightGray};
	text-align: center;
`;

const FooterLinks = styled.div`
	display: flex;
	gap: 15px;
	flex-wrap: wrap;

	a {
		color: ${colors.blue};
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
			<FooterLinks>
				<a href="#about">About Us</a>
				<a href="#how-it-works">How It Works</a>
				<a href="#contact">Contact</a>
				<a href="#terms">Terms of Service</a>
				<a href="#privacy">Privacy Policy</a>
			</FooterLinks>
			<FooterText>
				&copy; {new Date().getFullYear()} Mawsouq. All rights reserved.
			</FooterText>
		</FooterWrapper>
	);
};

export default FooterSection;
