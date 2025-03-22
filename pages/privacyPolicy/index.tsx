import React from "react";
import MSText from "@/components/Shared/MSText";
import { useLocaleStore } from "@/store";

const SectionText = ({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) => (
	<MSText fontSize="16px" style={{ marginTop: 16 }}>
		<span style={{ fontWeight: 600 }}>{title}</span>
		<br />
		{children}
	</MSText>
);

const PrivacyPolicy = () => {
	const { locale } = useLocaleStore();
	const isArabic = locale === "ar";

	return (
		<div style={{ padding: "2rem" }}>
			{isArabic ? (
				<>
					<MSText fontSize="20px" fontWeight="600">
						سياسة الخصوصية
					</MSText>

					<SectionText title="1. المقدمة">
						تلتزم Mawsouq-Pay بحماية خصوصيتك وضمان أمان معلوماتك الشخصية. توضح
						هذه السياسة كيف نجمع البيانات ونستخدمها ونؤمنها عند استخدامك منصتنا.
					</SectionText>

					<SectionText title="2. المعلومات التي نجمعها">
						• المعلومات الشخصية: الاسم، البريد الإلكتروني، رقم الهاتف، وغيرها من
						البيانات اللازمة لإنشاء الحساب والتحقق منه.
						<br />
						• بيانات المعاملات: تفاصيل المدفوعات، وصف المعاملات، والمبالغ.
						<br />
						• معلومات الدفع: مثل رقم المحفظة، IBAN، أو بيانات InstaPay للبائعين.
						<br />
						• بيانات التواصل: أي رسائل مع فريق الدعم.
						<br />• بيانات الاستخدام: مثل عنوان IP، نوع المتصفح، ونظام التشغيل.
					</SectionText>

					<SectionText title="3. بيانات البطاقات وأمان الدفع">
						لا تقوم Mawsouq-Pay بتخزين أو معالجة بيانات البطاقات. تتم جميع
						العمليات عبر Paymob، وفقًا لمعايير الأمان. نقوم فقط بتخزين تفاصيل
						المعاملات وليس بيانات البطاقة.
					</SectionText>

					<SectionText title="4. كيف نستخدم المعلومات">
						• لتحسين خدماتنا.
						<br />
						• تنفيذ المعاملات.
						<br />
						• التحقق من الهوية ومنع الاحتيال.
						<br />
						• التواصل بشأن المعاملات أو الدعم.
						<br />• الالتزام بالقوانين.
					</SectionText>

					<SectionText title="5. حماية البيانات">
						نعتمد تدابير أمان مثل التشفير وتقييد الوصول لحماية بياناتك. وتلتزم
						Paymob بمعايير أمان دولية.
					</SectionText>

					<SectionText title="6. مشاركة المعلومات">
						• لا نشارك بياناتك لأغراض تسويقية.
						<br />• نشارك فقط مع: Paymob، الجهات التنظيمية عند الطلب، ومزودي
						الخدمات المتعاقدين معنا.
					</SectionText>

					<SectionText title="7. مدة الاحتفاظ بالبيانات">
						نحتفظ بالمعلومات فقط للمدة المطلوبة قانونيًا أو لغرض الخدمة.
					</SectionText>

					<SectionText title="8. حقوقك">
						• الوصول إلى بياناتك أو تعديلها أو حذفها.
						<br />
						• إلغاء الاشتراك في الرسائل غير الأساسية.
						<br />• راسل فريق الدعم لممارسة هذه الحقوق.
					</SectionText>

					<SectionText title="9. التعديلات">
						قد نقوم بتحديث هذه السياسة وسنبلغك عبر منصتنا.
					</SectionText>

					<SectionText title="10. تواصل معنا">
						لأي استفسار: support@mawsouq-pay.com
					</SectionText>
				</>
			) : (
				<>
					<MSText fontSize="20px" fontWeight="600">
						Privacy Policy
					</MSText>

					<SectionText title="1. Introduction">
						Mawsouq-Pay is committed to protecting your privacy and ensuring the
						security of your personal information. This Privacy Policy explains
						how we collect, use, and safeguard your data when you use our
						platform. By accessing or using Mawsouq-Pay, you agree to the terms
						outlined in this policy.
					</SectionText>

					<SectionText title="2. Information We Collect">
						• Personal Information: Name, email address, phone number, and any
						other details required for account creation and verification.
						<br />
						• Transaction Data: Details of payments made or received through our
						platform, including transaction descriptions and amounts.
						<br />
						• Payout Information: For sellers, we collect mobile wallet numbers,
						IBANs, or InstaPay details to facilitate payouts.
						<br />
						• Communication Data: Any messages or interactions with our customer
						support team.
						<br />• Device and Usage Data: Information about how you access and
						use our platform, including IP address, browser type, and operating
						system.
					</SectionText>

					<SectionText title="3. Card Data and Payment Security">
						Mawsouq-Pay does not store or process credit or debit card details.
						All payment transactions are securely processed by our payment
						provider, Paymob, which handles card data in compliance with
						industry security standards. Mawsouq-Pay only manages transaction
						descriptions and amounts but does not have access to card details.
					</SectionText>

					<SectionText title="4. How We Use Your Information">
						• Provide and improve our services.
						<br />
						• Process transactions and ensure secure payments.
						<br />
						• Verify identities and prevent fraudulent activities.
						<br />
						• Communicate with users regarding transactions, support inquiries,
						or service updates.
						<br />• Comply with legal and regulatory requirements.
					</SectionText>

					<SectionText title="5. Data Protection and Security">
						We implement strict security measures to protect your data from
						unauthorized access, alteration, or disclosure. This includes
						encryption, secure storage, and access controls. Our payment
						provider, Paymob, ensures compliance with international security
						standards, including PCI-DSS.
					</SectionText>

					<SectionText title="6. Sharing of Information">
						We do not sell or share your personal data with third parties for
						marketing purposes.
						<br />
						However, we may share necessary information with:
						<br />
						• Payment providers (Paymob) to facilitate secure transactions.
						<br />
						• Regulatory authorities if required by law.
						<br />• Service providers who assist us in maintaining our platform
						under strict confidentiality agreements.
					</SectionText>

					<SectionText title="7. Data Retention">
						We retain your information only for as long as necessary to fulfill
						the purposes outlined in this policy or as required by law. Payment
						and transaction data may be stored for regulatory compliance and
						financial reporting.
					</SectionText>

					<SectionText title="8. Your Rights and Choices">
						You have the right to:
						<br />
						• Access, update, or delete your personal data.
						<br />
						• Request details about how your information is used.
						<br />
						• Opt out of non-essential communications.
						<br />
						To exercise these rights, please contact our support team.
					</SectionText>

					<SectionText title="9. Changes to This Policy">
						Mawsouq-Pay reserves the right to update this Privacy Policy. Any
						changes will be communicated through our platform, and continued use
						of our services constitutes acceptance of the updated policy.
					</SectionText>

					<SectionText title="10. Contact Us">
						If you have any questions or concerns regarding this Privacy Policy,
						please reach out to us through our official contact channels.
						<br />
						support@mawsouq-pay.com
					</SectionText>
				</>
			)}
		</div>
	);
};

export default PrivacyPolicy;
