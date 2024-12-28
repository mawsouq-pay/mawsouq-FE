import BenefitsSection from "@/components/BenefitsSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import React from "react";

const LandingPage = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "90px" }}>
			<HeroSection />
			<HowItWorksSection />
			<BenefitsSection />
			<FooterSection />
		</div>
	);
};
LandingPage.CustomLayout = LandingPageLayout;

export default LandingPage;
