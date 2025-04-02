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
				{/* Basic Meta */}
				<title>Mawsouq – Secure Your Orders & Payments</title>
				<meta
					name="description"
					content="Mawsouq helps protect custom orders with secure deposits, order tracking, and trusted delivery confirmation between buyers and sellers."
				/>
				<link rel="canonical" href="https://mawsouq-pay.com" />

				{/* Open Graph (Facebook, LinkedIn) */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://mawsouq-pay.com" />
				<meta
					property="og:title"
					content="Mawsouq – Secure Your Orders & Payments"
				/>
				<meta
					property="og:description"
					content="Mawsouq is the trustworthy way to handle deposits between buyers and sellers. Prevent scams and gain confidence in every transaction."
				/>
				<meta
					property="og:image"
					content="https://mawsouq-pay.com/meta-preview.png"
				/>

				{/* Twitter Card */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://mawsouq-pay.com" />
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

				{/* Favicon */}
				<link rel="icon" href="/favicon.ico" />

				{/* JSON-LD: Organization Logo Schema */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "Mawsouq",
							url: "https://mawsouq-pay.com",
							logo: "https://mawsouq-pay.com/logo.png",
						}),
					}}
				/>

				{/* JSON-LD: Sitelinks Search Box Schema (if you have a search page) */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "WebSite",
							name: "Mawsouq",
							url: "https://mawsouq-pay.com/",
							potentialAction: {
								"@type": "SearchAction",
								target: "https://mawsouq-pay.com/search?q={search_term_string}",
								"query-input": "required name=search_term_string",
							},
						}),
					}}
				/>
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
