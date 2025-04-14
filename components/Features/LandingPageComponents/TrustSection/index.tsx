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
	console.log(enTexts);
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
						<LeftCol>
							<MSText
								fontSize="28px"
								fontWeight="bold"
								mobileFontSize="20px"
								color={colors.black}
								style={{
									marginBottom: "16px",
									width: "100%",
									textAlign: "start",
								}}
							>
								{text.heading}
							</MSText>
							<MSText
								fontSize="16px"
								fontWeight="500"
								color={colors.gray700}
								style={{ marginBottom: "24px" }}
								mobileFontSize="14px"
							>
								{text.mawsouqPrivacy}
							</MSText>

							<FeatureGrid>
								{text.features.map((title, index) => (
									<FeatureItem
										key={index}
										initial={{ opacity: 0, x: -10 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.4, delay: index * 0.1 }}
									>
										<IconContainer>
											<Check size={12} />
										</IconContainer>
										<MSText
											fontSize="14px"
											fontWeight="600"
											color={colors.gray600}
										>
											{title}
										</MSText>
									</FeatureItem>
								))}
							</FeatureGrid>

							<InfoBox>
								<InfoHeader>
									<MSText
										fontSize="12px"
										fontWeight="400"
										color={colors.gray500}
									>
										{text.paymentsProvidedBy}
									</MSText>
									<Image
										src={PaymobImage}
										alt="Paymob"
										width={60}
										height={15}
									/>
								</InfoHeader>
								<MSText fontSize="12px" fontWeight="400" color={colors.gray500}>
									{text.description}
								</MSText>
							</InfoBox>
						</LeftCol>

						<RightCol
							initial={{ opacity: 0, x: 10 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<StartSellingSection />
						</RightCol>
					</FlexRow>
				</GradientBox>
			</Container>
		</Section>
	);
}
