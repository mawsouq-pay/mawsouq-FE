import MSText from "@/components/Shared/MSText";
import { useLocaleStore } from "@/store/LocaleStore";
import { colors } from "@/constants/theme";
import { Check } from "lucide-react";
import {
	Section,
	Container,
	GradientBox,
	FlexRow,
	LeftCol,
	FeatureGrid,
	FeatureItem,
	IconContainer,
	InfoBox,
	InfoHeader,
	RightCol,
} from "./TrustSection.styles";
import { arTexts, enTexts } from "./types";
import StartSellingSection from "../StartSellingSection";
import PaymobImage from "@/assets/images/paymob.png";
import Image from "next/image";

export default function TrustSection() {
	const { locale } = useLocaleStore();
	const text = locale === "ar" ? arTexts : enTexts;

	return (
		<Section>
			<Container>
				<GradientBox
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<FlexRow>
						<StartSellingSection />
					</FlexRow>

					<InfoBox style={{ marginTop: "30px" }}>
						<InfoHeader>
							<MSText fontSize="20px" fontWeight="600" color={colors.black}>
								{locale === "ar" ? "موثوق مناسب لـ" : "Who is Mawsouq for?"}
							</MSText>
						</InfoHeader>

						<FeatureGrid>
							{[
								locale === "ar"
									? "البائعين اللي محتاجين تأكيد العربون"
									: "Sellers who need upfront deposits",
								locale === "ar"
									? "المشترين اللي عايزين يضمنوا أموالهم"
									: "Buyers who want safe payments",
								locale === "ar"
									? "صناع المنتجات الخاصة حسب الطلب"
									: "Custom product makers",
								locale === "ar"
									? "مقدمي الخدمات المستقلة"
									: "Service providers",
							].map((item, index) => (
								<FeatureItem
									key={index}
									initial={{ opacity: 0, x: -10 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: index * 0.1 }}
								>
									<IconContainer>
										<Check size={18} />
									</IconContainer>
									<MSText fontSize="16px" color={colors.darkGray}>
										{item}
									</MSText>
								</FeatureItem>
							))}
						</FeatureGrid>
					</InfoBox>
				</GradientBox>
			</Container>
		</Section>
	);
}
