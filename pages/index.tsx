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
