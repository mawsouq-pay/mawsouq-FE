import React from "react";

import HowItWorks from "@/components/Features/LandingPageComponents/HowItWorks";
import SecureTransactions from "@/components/Features/LandingPageComponents/SecureTransactions";
import MawsouqBenefits from "@/components/Features/LandingPageComponents/MawsouqBenefits";
import ContactUs from "@/components/Features/LandingPageComponents/ContactUs";
import MSAnimatedDiv from "@/components/Shared/MSAnimated/MSAnimatedDiv";
import FooterSection from "@/components/Features/LandingPageComponents/FooterSection";
import Navbar from "@/components/Shared/MSNavBar";
import HeroBanner from "@/components/Features/LandingPageComponents/HeroBanner";

const LandingPage = () => {
	return (
		<>
			<Navbar isLandingPage={true} />
			<HeroBanner />
			<MSAnimatedDiv>
				<HowItWorks />
			</MSAnimatedDiv>

			<MSAnimatedDiv>
				<SecureTransactions />
			</MSAnimatedDiv>
			<MSAnimatedDiv>
				<MawsouqBenefits />
			</MSAnimatedDiv>
			<MSAnimatedDiv>
				<ContactUs />
			</MSAnimatedDiv>
			<FooterSection />
		</>
	);
};

export default LandingPage;
