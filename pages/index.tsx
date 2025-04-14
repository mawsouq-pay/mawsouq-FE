import React from "react";
import Navbar from "@/components/Shared/MSNavBar";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import styled from "styled-components";
import {
	HeroBanner,
	HowItWorks,
	CTA,
	FAQ,
	MawsouqBenefits,
	FooterSection,
	SecurityBanner,
} from "@/components/Features/LandingPageComponents";
import ProductPreviewSection from "@/components/Features/LandingPageComponents/ProductPreviewSection";
import TrustSection from "@/components/Features/LandingPageComponents/TrustSection";
import StartSellingSection from "@/components/Features/LandingPageComponents/StartSellingSection";
const LandingPage = () => {
	return (
		<>
			<Navbar isLandingPage={true} />
			<MainDiv>
				<HeroBanner />
				<SecurityBanner />
				<HowItWorks />
				<ProductPreviewSection />

				{/* <MawsouqBenefits /> */}
				<TrustSection />
				<FAQ />
				<CTA />
				<FooterSection />
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
