import React from "react";
import { motion } from "framer-motion";
import MSText from "@/components/Shared/MSText";
import { colors } from "@/constants/theme";
import Image from "next/image";
import AmrImage from "@/assets/images/AmrImage.png";
import NadaImage from "@/assets/images/AmrImage.png";
import { useLocaleStore } from "@/store";
import {
	Section,
	Container,
	TextBlock,
	TeamGrid,
	TeamCard,
	ProfilePic,
} from "./AboutUs.styles";

const en = {
	heading: "About Us – Mawsouq-Pay",
	subheading: "Built for trust. Designed for today.",
	about: `Mawsouq-Pay is Egypt’s first digital escrow solution, designed to make online payments safer and more transparent. Whether you’re buying a custom product, hiring a freelancer, or running an online business, Mawsouq-Pay protects your transaction until both parties are satisfied.

We started with a simple idea: people should be able to pay online without the fear of being scammed or ghosted. So we built a system where money is only released when the job is done — no more risks, no more uncertainty.

We’re not just another fintech — we’re here to fix a real problem. Backed by strong partners and a vision for the future, we’re making trust a standard in Egypt’s digital economy.`,
	meet: "Meet the Team",
	team: [
		{
			name: "Amr Ibrahim",
			role: "Founder & CEO",
			desc: "Leads strategy, product, and partnerships. Passionate about building solutions that earn people’s trust online.",
			image: AmrImage,
		},
		{
			name: "Nada Nazeer",
			role: "Co-Founder & CTO",
			desc: "Drives the tech behind Mawsouq-Pay. Focused on building secure, scalable infrastructure that makes trust seamless and effortless.",
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
			desc: "بيقود الاستراتيجية والمنتج والشراكات. شغوف ببناء حلول تكسب ثقة الناس أونلاين.",
			image: AmrImage,
		},
		{
			name: "ندى نظير",
			role: "الشريك المؤسس والمدير التقني",
			desc: "مسؤولة عن التقنية في Mawsouq-Pay. بتركز على بناء بنية تحتية آمنة وقابلة للتوسع بتخلي الثقة عملية سهلة وطبيعية.",
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
								<MSText
									fontSize="14px"
									color={colors.gray500}
									style={{ marginTop: 8 }}
								>
									{member.desc}
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
