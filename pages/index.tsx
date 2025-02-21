import BenefitsSection from "@/components/Features/LandingPageComponents/BenefitsSection";
import FAQ from "@/components/Features/LandingPageComponents/FAQ";
import FooterSection from "@/components/Features/LandingPageComponents/FooterSection";
import HeroSection from "@/components/Features/LandingPageComponents/HeroSection";
import HowItWorksSection from "@/components/Features/LandingPageComponents/HowItWorksSection";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import React from "react";
import MSNavbar from "@/components/Shared/MSNavBar";

const Home = () => {
	return (
		<div>
			<MSNavbar isLandingPage={true} />
			<div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
				<HeroSection />
				<HowItWorksSection />
				<BenefitsSection />
				<FAQ />
				<FooterSection />
			</div>
		</div>
	);
};

Home.CustomLayout = LandingPageLayout;

export default Home;
