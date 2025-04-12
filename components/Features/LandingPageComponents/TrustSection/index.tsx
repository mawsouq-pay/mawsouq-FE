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
	Placeholder,
	RightCol,
	ProfileCard,
} from "./TrustSection.styles";
import { arTexts, enTexts } from "./types";
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
						<LeftCol>
							<MSText
								fontSize="28px"
								fontWeight="bold"
								color={colors.black}
								style={{ marginBottom: "16px" }}
							>
								{text.heading}
							</MSText>
							<MSText
								fontSize="16px"
								fontWeight="400"
								color={colors.gray600}
								style={{ marginBottom: "24px" }}
							>
								{text.description}
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
									<Placeholder />
									<MSText
										fontSize="12px"
										fontWeight="500"
										color={colors.gray600}
									>
										{text.partner}
									</MSText>
								</InfoHeader>
								<MSText fontSize="12px" fontWeight="400" color={colors.gray500}>
									{text.partnerDesc}
								</MSText>
							</InfoBox>
						</LeftCol>

						<RightCol
							initial={{ opacity: 0, x: 10 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							{text.trustPoints.map((point, index) => (
								<ProfileCard key={index}>
									<MSText fontSize="16px" fontWeight="600" color={colors.black}>
										{point.title}
									</MSText>
									<MSText
										fontSize="14px"
										fontWeight="400"
										color={colors.gray700}
									>
										{point.body}
									</MSText>
								</ProfileCard>
							))}
						</RightCol>
					</FlexRow>
				</GradientBox>
			</Container>
		</Section>
	);
}
