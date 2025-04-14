import React from "react";
import { colors } from "@/constants/theme";
import MSText from "@/components/Shared/MSText";
import MSButton from "@/components/Shared/MSButton";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useAuthStore, useLocaleStore } from "@/store";
import {
	Section,
	Container,
	ButtonRow,
	FeaturesRow,
	ListItem,
} from "./CTA.styles";
import { ar, en } from "./types";
import { useRouter } from "next/router";
import { clientRoutes } from "@/routes";
const CTASection = () => {
	const { locale } = useLocaleStore();
	const text = locale === "ar" ? ar : en;
	const { isLoggedIn } = useAuthStore();
	const router = useRouter();
	const onCtaPress = () => {
		if (!isLoggedIn) {
			router.push(clientRoutes.register);
			return;
		}
		router.push(clientRoutes.startTransaction);
	};
	return (
		<Section>
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<MSText
						fontSize="32px"
						mobileFontSize="24px"
						fontWeight="700"
						color={colors.jetBlack}
						style={{ textAlign: "center", marginBottom: 16 }}
					>
						{text.heading}
					</MSText>

					<MSText
						fontSize="18px"
						mobileFontSize="16px"
						color={colors.gray600}
						style={{ textAlign: "center", marginBottom: 32 }}
					>
						{text.subheading}
					</MSText>

					<ButtonRow>
						<MSButton title={text.cta} onClick={onCtaPress} />
					</ButtonRow>

					<motion.div
						className="mt-12"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<FeaturesRow>
							{text.features.map((item) => (
								<ListItem key={item}>
									<Check size={16} color={colors.green} />
									<MSText fontSize="14px" style={{ marginInlineStart: 8 }}>
										{item}
									</MSText>
								</ListItem>
							))}
						</FeaturesRow>
					</motion.div>
				</motion.div>
			</Container>
		</Section>
	);
};

export default CTASection;
