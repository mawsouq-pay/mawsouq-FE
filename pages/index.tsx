import React from "react";
import Navbar from "@/components/Shared/MSNavBar";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import styled from "styled-components";
import Head from "next/head";
import {
	HeroBanner,
	HowItWorks,
	CTA,
	FAQ,
	MawsouqBenefits,
	ProductOptions,
	FooterSection,
} from "@/components/Features/LandingPageComponents";
import MSAnimatedDiv from "@/components/Shared/MSAnimated/MSAnimatedDiv";
const LandingPage = () => {
	return (
		<>
			<Head>
				<title>Mawsouq – Secure Your Orders & Payments</title>
				<meta
					name="description"
					content="Mawsouq is the trustworthy way to handle deposits between buyers and sellers on Instagram, Facebook & more."
				/>
				<link rel="canonical" href="https://mawsouq-pay.com" />

				{/* Open Graph */}
				<meta
					property="og:title"
					content="Mawsouq – Secure Your Orders & Payments"
				/>
				<meta
					property="og:description"
					content="Mawsouq helps protect custom orders with secure deposits, order tracking, and a trusted process."
				/>
				<meta
					property="og:image"
					content="https://mawsouq-pay.com/meta-preview.png"
				/>
				<meta property="og:url" content="https://mawsouq-pay.com" />
				<meta property="og:type" content="website" />

				{/* Twitter Card */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Mawsouq – Secure Your Orders & Payments"
				/>
				<meta
					name="twitter:description"
					content="Protect your custom order experience with secure deposits and order flow."
				/>
				<meta
					name="twitter:image"
					content="https://mawsouq-pay.com/meta-preview.png"
				/>

				{/* Favicon (optional) */}
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar isLandingPage={true} />
			<MainDiv>
				<MSAnimatedDiv>
					<HeroBanner />
				</MSAnimatedDiv>
				<MSAnimatedDiv>
					<HowItWorks />
				</MSAnimatedDiv>

				<MSAnimatedDiv>
					<CTA />
				</MSAnimatedDiv>
				<MSAnimatedDiv>
					<FAQ />
				</MSAnimatedDiv>
				<MSAnimatedDiv>
					<MawsouqBenefits />
				</MSAnimatedDiv>
				<MSAnimatedDiv>
					<ProductOptions />
				</MSAnimatedDiv>
				<MSAnimatedDiv>
					<FooterSection />
				</MSAnimatedDiv>
			</MainDiv>
		</>
	);
};
const MainDiv = styled.div`
	display: flex;
	flex-direction: column;
`;
LandingPage.CustomLayout = LandingPageLayout;

export default LandingPage;
