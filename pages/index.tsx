import React from "react";

import HowItWorks from "@/components/Features/LandingPageComponents/HowItWorks";
import MawsouqBenefits from "@/components/Features/LandingPageComponents/MawsouqBenefits";
import MSAnimatedDiv from "@/components/Shared/MSAnimated/MSAnimatedDiv";
import FooterSection from "@/components/Features/LandingPageComponents/FooterSection";
import Navbar from "@/components/Shared/MSNavBar";
import HeroBanner from "@/components/Features/LandingPageComponents/HeroBanner";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import styled from "styled-components";
import CTA from "@/components/Features/LandingPageComponents/CTA";

const LandingPage = () => {
	return (
		<>
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
					<MawsouqBenefits />
				</MSAnimatedDiv>

				<MSAnimatedDiv>
					<FooterSection />

					{/* <PaymobFooter /> */}
					{/* <ContactUs /> */}
				</MSAnimatedDiv>
				{/* <FooterSection /> */}
			</MainDiv>
		</>
	);
};
const MainDiv = styled.div`
	display: flex;
	flex-direction: column;
	/* gap: 50px; */
`;
LandingPage.CustomLayout = LandingPageLayout;

export default LandingPage;
