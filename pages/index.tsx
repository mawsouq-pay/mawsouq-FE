import BenefitsSection from "@/components/Features/LandingPageComponents/BenefitsSection";
import FAQ from "@/components/Features/LandingPageComponents/FAQ";
import FooterSection from "@/components/Features/LandingPageComponents/FooterSection";
import HeroSection from "@/components/Features/LandingPageComponents/HeroSection";
import HowItWorksSection from "@/components/Features/LandingPageComponents/HowItWorksSection";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import React from "react";

const Home = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: 50 }}>
			<HeroSection />
			<HowItWorksSection />
			<BenefitsSection />
			<FAQ />
			<FooterSection />
		</div>
	);
};

Home.CustomLayout = LandingPageLayout;

export default Home;
