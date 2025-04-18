import React from "react";
import { motion } from "framer-motion";
import MSText from "@/components/Shared/MSText";
import { colors } from "@/constants/theme";
import Image from "next/image";
import AmrImage from "@/assets/images/AmrImage.png";
import NadaImage from "@/assets/images/NadaImage.png";
import { useLocaleStore } from "@/store";
import {
	Section,
	Container,
	TextBlock,
	TeamGrid,
	TeamCard,
	ProfilePic,
} from "./AboutUsSection.styles";

const en = {
	heading: "About Us – Mawsouq-Pay",
	subheading: "Built for trust. Designed for today.",
	about: `Mawsouq-Pay is a platform designed to build trust between online buyers and sellers by securing payments until orders are delivered.

	We help sellers request deposits safely and provide buyers with peace of mind, knowing their money is protected.
	
	Through Mawsouq-Pay, sellers can easily create payment links, track their orders, and manage all transactions through a simple dashboard.
	
	Our mission is to make online transactions safer, smoother, and more reliable for everyone.`,
	meet: "Meet the Team",
	team: [
		{
			name: "Amr Ibrahim",
			role: "Founder & CEO",
			image: AmrImage,
		},
		{
			name: "Nada Nazeer",
			role: "Co-Founder & CTO",
			image: NadaImage,
		},
	],
};

const ar = {
	heading: "من نحن – Mawsouq-Pay",
	subheading: "مبني على الثقة. مصمم لاحتياجات اليوم.",
	about: `Mawsouq-Pay هو أول حل ضمان رقمي في مصر، مصمم ليجعل الدفع أونلاين أكثر أمانًا وشفافية. سواء بتشتري منتج مخصص، أو بتتعامل مع فريلانسر، أو بتدير بيزنس أونلاين — Mawsouq-Pay بيحمي المعاملة لحد ما الطرفين يكونوا راضيين.

بدأنا بفكرة بسيطة: الناس لازم تقدر تدفع أونلاين من غير خوف من النصب أو الاختفاء. فبنينا نظام بيضمن إن الفلوس مش هتتحول غير لما الشغل يخلص — من غير مخاطر، ومن غير توتر.

إحنا مش مجرد شركة فينتك تانية — إحنا جايين نحل مشكلة حقيقية. بدعم من شركاء أقوياء ورؤية للمستقبل، بنحط الثقة كمعيار في الاقتصاد الرقمي المصري.`,
	meet: "تعرف على الفريق",
	team: [
		{
			name: "عمرو إبراهيم",
			role: "المؤسس والرئيس التنفيذي",
			image: AmrImage,
		},
		{
			name: "ندى نظير",
			role: "الشريك المؤسس والمدير التقني",
			image: NadaImage,
		},
	],
};

const AboutUsSection = () => {
	const { locale } = useLocaleStore();
	const text = locale === "ar" ? ar : en;

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
						fontWeight="700"
						style={{
							textAlign: "center",
							color: colors.jetBlack,
							marginBottom: 16,
						}}
					>
						{text.heading}
					</MSText>

					<MSText
						fontSize="18px"
						fontWeight="500"
						style={{
							textAlign: "center",
							color: colors.gray600,
							marginBottom: 48,
						}}
					>
						{text.subheading}
					</MSText>
				</motion.div>

				<TextBlock>
					<MSText
						fontSize="16px"
						color={colors.gray700}
						style={{ whiteSpace: "pre-line" }}
					>
						{text.about}
					</MSText>
				</TextBlock>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<MSText
						fontSize="24px"
						fontWeight="600"
						style={{
							marginTop: 64,
							marginBottom: 32,
							textAlign: "center",
							color: colors.jetBlack,
						}}
					>
						{text.meet}
					</MSText>

					<TeamGrid>
						{text.team.map((member, i) => (
							<TeamCard key={i}>
								<ProfilePic>
									<Image
										src={member.image}
										alt={member.name}
										fill
										style={{ borderRadius: "50%", objectFit: "cover" }}
									/>
								</ProfilePic>
								<MSText
									fontSize="16px"
									fontWeight="600"
									style={{ marginTop: 12 }}
								>
									{member.name}
								</MSText>
								<MSText fontSize="14px" color={colors.gray600}>
									{member.role}
								</MSText>
							</TeamCard>
						))}
					</TeamGrid>
				</motion.div>
			</Container>
		</Section>
	);
};

export default AboutUsSection;
