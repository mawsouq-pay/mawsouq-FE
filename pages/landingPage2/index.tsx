import React from "react";

import HowItWorks from "@/components/Features/LandingPageComponents/HowItWorks";
import SecureTransactions from "@/components/Features/LandingPageComponents/SecureTransactions";
import MawsouqBenefits from "@/components/Features/LandingPageComponents/MawsouqBenefits";
import ContactUs from "@/components/Features/LandingPageComponents/ContactUs";
import MSAnimatedDiv from "@/components/Shared/MSAnimated/MSAnimatedDiv";
import FooterSection from "@/components/Features/LandingPageComponents/FooterSection";
import Navbar from "@/components/Shared/MSNavBar";
import HeroBanner from "@/components/Features/LandingPageComponents/HeroBanner";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import PaymobFooter from "@/components/Features/LandingPageComponents/PaymobFooter";
import AfterState from "@/components/Features/LandingPageComponents/AfterState";
import styled from "styled-components";
import { media } from "@/helpers/mediaQueryHelper";
import CTA from "@/components/Features/LandingPageComponents/CTA";

const LandingPage = () => {
	return (
		<>
			<Navbar isLandingPage={true} />
			<MainDiv>
				<div
				// style={{ background: "linear-gradient(to top, #ddf8ed, #ffffff)" }}
				>
					<HeroBanner />
					{/* <MSAnimatedDiv> */}
					<HowItWorks />
					{/* </MSAnimatedDiv> */}
				</div>

				<MSAnimatedDiv>
					<AfterState />{" "}
				</MSAnimatedDiv>
				<MSAnimatedDiv>
					<CTA />
				</MSAnimatedDiv>
				<MSAnimatedDiv>
					<MawsouqBenefits />
				</MSAnimatedDiv>
				{/* <MSAnimatedDiv>
				<AfterState />
			</MSAnimatedDiv> */}

				<MSAnimatedDiv>
					<PaymobFooter />
					<ContactUs />
				</MSAnimatedDiv>
				<FooterSection />
			</MainDiv>
		</>
	);
};
const MainDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 50px;
	/* ${media.below925`
	gap:100px,
    `}; */
`;
LandingPage.CustomLayout = LandingPageLayout;

export default LandingPage;
