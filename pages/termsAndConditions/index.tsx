import React from "react";
import MSText from "@/components/Shared/MSText";
import { useLocaleStore } from "@/store";
import { withMeta } from "@/layouts/MetaLayout";

const SectionText = ({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) => (
	<MSText fontSize="16px" fontWeight={"600"} style={{ marginTop: 16 }}>
		<span style={{ fontWeight: 600 }}>{title}</span>
		<br />
		{children}
	</MSText>
);

const TermsAndConditions = () => {
	const { locale } = useLocaleStore();
	const isArabic = locale === "ar";

	return (
		<div style={{ padding: "2rem" }}>
			<MSText fontSize="20px" fontWeight="600">
				Terms and Conditions
			</MSText>

			<SectionText title="1. Introduction">
				Welcome to Mawsouq-Pay. By using our platform, you agree to these Terms
				and Conditions. Please read them carefully before proceeding.
			</SectionText>

			<SectionText title="2. Services Provided">
				Mawsouq-Pay facilitates secure online transactions between buyers and
				sellers. We act as an intermediary, ensuring payments are only released
				when both parties meet agreed-upon conditions.
			</SectionText>

			<SectionText title="3. User Responsibilities">
				• Users must provide accurate information and comply with all applicable
				laws.
				<br />
				• Buyers must ensure they have sufficient funds for transactions.
				<br />
				• Sellers must fulfill their commitments before requesting payment
				release.
				<br />• Illegal goods and services are strictly prohibited. Any attempt
				to sell prohibited items will result in account suspension.
			</SectionText>

			<SectionText title="4. Payment Handling">
				• Mawsouq-Pay does not store or process credit/debit card details.
				Transactions are handled securely by our payment provider, Paymob.
				<br />• We only collect payout details for sellers, such as mobile
				wallets, IBANs, or InstaPay information, to facilitate payments.
			</SectionText>

			<SectionText title="5. Dispute Resolution">
				• If a dispute arises, buyers and sellers must attempt to resolve it
				between themselves first.
				<br />
				• If no agreement is reached, Mawsouq-Pay provides a structured
				resolution process based on transaction details and provided evidence.
				<br />
				• If a dispute lacks clear evidence or sufficient details, Mawsouq-Pay
				may decide on a partial refund split between both parties.
				<br />• If a buyer does not respond to a dispute within 48 hours after
				being contacted, Mawsouq-Pay may automatically release the payment to
				the seller.
			</SectionText>

			<SectionText title="6. Prohibited Goods and Services">
				• Mawsouq-Pay strictly prohibits the sale of illegal goods or services.
				<br />
				• This includes, but is not limited to:
				<br />
				• Drugs or controlled substances
				<br />
				• Counterfeit goods
				<br />
				• Stolen items
				<br />
				• Weapons or dangerous materials
				<br />
				• Fraudulent or scam-related services
				<br />
				• Any item that violates Egyptian law
				<br />• Sellers violating this policy will have their accounts
				permanently banned, and legal action may be taken if necessary.
			</SectionText>

			<SectionText title="7. Reviews and Feedback">
				• Buyers can leave reviews based on their experience.
				<br />
				• Sellers cannot remove or modify any review, whether positive or
				negative.
				<br />• Reviews must be honest and free from offensive language or false
				claims.
			</SectionText>

			<SectionText title="8. Fees and Charges">
				• Using Mawsouq-Pay may involve transaction fees, which will be clearly
				communicated before payment processing.
			</SectionText>

			<SectionText title="9. Refund & Cancellation Policy">
				• Seller’s Terms Apply: Refund and cancellation policies are determined
				by the seller. Buyers must review these terms before placing an order.
				<br />
				• Seller Control: Once a seller begins working on a product or service,
				only the seller has the right to cancel the transaction. Buyers cannot
				request a cancellation unless the seller agrees.
				<br />
				• Failure to Deliver: If the seller fails to deliver the agreed-upon
				product or service within the specified timeframe, the buyer is entitled
				to a full refund.
				<br />• Automatic Payment Release: If a buyer does not respond within 48
				hours after receiving an order and being contacted, the payment will be
				released to the seller.
			</SectionText>

			<SectionText title="10. Limitations of Liability">
				Mawsouq-Pay is not responsible for:
				<br />
				• Issues arising from seller performance or product/service quality.
				<br />
				• External factors like payment provider disruptions.
				<br />• Losses due to unauthorized account access resulting from user
				negligence.
			</SectionText>

			<SectionText title="11. Account Suspension & Termination">
				• We reserve the right to suspend or terminate user accounts for
				violations of these terms, fraudulent activities, or misuse of the
				platform.
				<br />• Users engaging in fraudulent activities or violating platform
				rules may be permanently banned.
			</SectionText>

			<SectionText title="12. Changes to Terms">
				• Mawsouq-Pay may update these Terms and Conditions as needed.
				<br />• Continued use of the platform implies acceptance of any
				modifications.
			</SectionText>

			<SectionText title="Contact Us">
				By using Mawsouq-Pay, you acknowledge and agree to these Terms and
				Conditions. If you have any questions, please contact us.
				<br />
				Support@mawsouq-pay.com
			</SectionText>
		</div>
	);
};

export default withMeta("termsAndConditions", TermsAndConditions);
