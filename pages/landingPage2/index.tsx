import MSText from "@/components/Shared/MSText";
import { colors } from "@/constants/theme";
import useTypewriter from "@/hooks/useTypeWriter";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import LaptopFrame from "@/assets/images/FrameLaptop.png";
import { FrameLaptopImage } from "@/assets/images";

const LandingPage = () => {
	const textList = [
		"Marketplaces",
		"eCommerce",
		"Individuals",
		"Startups",
		"YOU",
	];

	const displayText = useTypewriter(textList, 100);
	return (
		<>
			<HeroContainer>
				<NavbarContainer>
					<NavItems>
						<NavItem>People ▼</NavItem>
						<NavItem>Business ▼</NavItem>
						<NavItem>Company ▼</NavItem>
					</NavItems>
					<LoginButton>Log in</LoginButton>
				</NavbarContainer>
				<HeroContent>
					<MSText
						style={{ paddingTop: 24, color: `${colors.buttonGreenBackground}` }}
						fontSize={"1.5rem"}
						fontWeight="600"
						mobileFontSize={"1.5rem"}
						color={colors.white}
					>
						Built for <span>{displayText}</span>
					</MSText>
					<HeroTitle>Trust your transactions. Secure your deposits.</HeroTitle>
					<HeroSubtitle>
						Say goodbye to order uncertainty. Mawsouq ensures your deposits are
						safe, so you can buy and sell with confidence.
					</HeroSubtitle>
					<HeroButton>Get Started</HeroButton>
				</HeroContent>
				<HeroImage>
					<Image
						src={FrameLaptopImage}
						alt="Desktop Frame"
						style={{
							width: "100%",
							height: "auto",
							display: "block",
						}}
					/>
					<IframeOverlay
						src="https://www.youtube.com/embed/19g66ezsKAg"
						allowFullScreen
						title="Mawsouq Video"
					/>
				</HeroImage>
			</HeroContainer>
		</>
	);
};

export default LandingPage;
export const HeroContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	flex-direction: column;
	min-height: 80vh;
	background: linear-gradient(to top, #ddf8ed, #ffffff);
	padding: 1rem 2rem;
`;

export const HeroContent = styled.div`
	max-width: 700px;
	margin-top: 1rem;
`;

export const HeroImage = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 600px;
	height: auto;
`;

export const IframeOverlay = styled.iframe`
	position: absolute;
	top: 20%;
	left: 13.3%;
	width: 72%;
	height: 58%;
	border: none;
	border-radius: 10px;
`;
export const HeroTitle = styled.h1`
	font-size: 3rem;
	font-weight: bold;
	color: #222;
	margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.p`
	font-size: 1rem;
	color: #444;
	line-height: 1.6;
	margin-bottom: 1.5rem;
`;
export const HeroButton = styled.button`
	background-color: black;
	color: white;
	font-size: 1rem;
	font-weight: bold;
	padding: 12px 20px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	transition: 0.3s ease-in-out;

	&:hover {
		background-color: #015b53;
	}
`;

export const NavbarContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #111;
	padding: 5px 20px;
	border-radius: 10px;
	width: fit-content;
	margin: 20px auto 40px auto;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const NavItems = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

export const NavItem = styled.div`
	color: white;
	font-size: 14px;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
`;

export const LoginButton = styled.button`
	background: white;
	color: black;
	font-size: 14px;
	font-weight: bold;
	padding: 3px 10px;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	margin-left: 20px;
	&:hover {
		background: #ddd;
	}
`;
