import React from "react";
import { motion } from "framer-motion";
import { colors } from "@/constants/theme";
import MSButton from "@/components/Shared/MSButton";
import {
	ButtonRow,
	Container,
	FrameDive,
	Grid,
	HeroWrapper,
	LeftColumn,
} from "./HeroBanner.styles";
import Image from "next/image";
import HeroImg from "@/assets/images/HeroImg.png";
import { useRouter } from "next/router";
import MSText from "@/components/Shared/MSText";
import { useAuthStore, useLocaleStore } from "@/store";
import { arTexts, enTexts } from "./types";
import { clientRoutes } from "@/routes";

export default function HeroSection() {
	const router = useRouter();
	const { isLoggedIn } = useAuthStore();
	const { locale } = useLocaleStore();
	const textObj = locale === "en" ? enTexts : arTexts;
	const onCtaPress = () => {
		if (!isLoggedIn) {
			router.push(clientRoutes.register);
			return;
		}
		router.push(clientRoutes.startTransaction);
	};
	return (
		<HeroWrapper>
			<Container>
				<Grid>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<LeftColumn>
							<MSText
								fontSize="3rem"
								mobileFontSize="2rem"
								fontWeight="700"
								style={{ lineHeight: "1.25", color: "#111827" }}
							>
								{textObj.title}
							</MSText>

							<MSText
								fontSize="1.2rem"
								mobileFontSize="0.8rem"
								fontWeight="400"
								color={colors.gray600}
								style={{ marginTop: "0.5rem", textWrap: "wrap" }}
							>
								{textObj.description}
							</MSText>

							<ButtonRow>
								<MSButton
									title={textObj.cta}
									onClick={onCtaPress}
									style={{ width: "100%", maxWidth: "350px" }}
								/>
							</ButtonRow>
						</LeftColumn>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<FrameDive isArabic={locale === "ar"}>
							<Image
								src={HeroImg}
								priority
								loading="eager"
								alt="Release"
								height={360}
								width={360}
							/>
						</FrameDive>
					</motion.div>
				</Grid>
			</Container>
		</HeroWrapper>
	);
}
