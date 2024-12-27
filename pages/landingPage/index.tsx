import BenefitsSection from "@/components/BenefitsSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import React from "react";

const LandingPage = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
			<HeroSection />
			<HowItWorksSection />
			<BenefitsSection />
		</div>
	);
};
LandingPage.CustomLayout = LandingPageLayout;

export default LandingPage;
