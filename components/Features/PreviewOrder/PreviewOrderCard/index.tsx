import React from "react";
import {
	CardWrapper,
	Section,
	SummaryRow,
	Divider,
	PoweredBy,
	FooterNote,
	StepsBar,
	Step,
	StepIcon,
	LineBetween,
	Logo,
	ContentDiv,
	Wrapper,
	RowDiv,
} from "./PreviewOrderCard.styles";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import { MSLogo } from "@/assets/icons";
import { ShoppingCart, Lock, Repeat, Package } from "lucide-react";
import MSText from "@/components/Shared/MSText";
import { colors } from "@/constants/theme";
import MSButton from "@/components/Shared/MSButton";
import PaymobImage from "@/assets/images/paymob.png";
import Image from "next/image";
import GuaranteeList from "../GuaranteeList";
import MSPaymentSummarySection from "@/components/Shared/MSPaymentSummarySection";

const PreviewOrderCard = (props: PreviewOrderCardProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	const {
		transactionTitle,
		description,
		deliveryDate,
		onConfirmPress,
		price,
		sellerName,
		sellerEmail,
		orderIsJoined,
		fees,
	} = props;

	const steps = [
		{ icon: <Lock size={18} />, label: text.holdMoney },
		{ icon: <Package size={18} />, label: text.receive },
		{ icon: <Repeat size={18} />, label: text.release },
	];

	return (
		<CardWrapper>
			<Logo>
				<MSLogo />
			</Logo>

			<ContentDiv>
				<MSText fontSize={"15px"} style={{ marginBottom: 10 }}>
					{text.orderPrevConfirmationDescription}
				</MSText>
				<RowDiv>
					<ShoppingCart color={colors.darkGreen} strokeWidth={1.2} />
					<MSText fontSize="13px" fontWeight="500" color={colors.darkGreen}>
						{text.youAreTheBuyer}
					</MSText>
				</RowDiv>
				<StepsBar>
					{steps.map((step, index) => (
						<React.Fragment key={index}>
							<Step>
								<div
									style={{
										height: 34,
										justifyContent: "center",
										display: "flex",
									}}
								>
									<StepIcon>{step.icon}</StepIcon>
								</div>

								<MSText
									fontWeight="600"
									style={{
										textAlign: "center",
										fontSize: 12,
										whiteSpace: "nowrap",
									}}
									color={colors.semiBlack}
								>
									{step.label}
								</MSText>
							</Step>
							{index < steps.length - 1 && <LineBetween />}
						</React.Fragment>
					))}
				</StepsBar>
				<Divider />

				<Section>
					<Wrapper>
						<SummaryRow>
							<MSText fontWeight="700" fontSize="14px">
								{text.orderSummary}
							</MSText>
						</SummaryRow>

						<MSText fontSize="14px">{transactionTitle}</MSText>
						<MSText fontSize="14px">{deliveryDate}</MSText>
						<MSText fontSize="14px">{description}</MSText>
					</Wrapper>
				</Section>
				<Divider />

				<Section>
					<Wrapper>
						<SummaryRow>
							<MSText fontWeight="700" fontSize="14px">
								{text.seller}
							</MSText>
						</SummaryRow>
						<MSText fontSize="14px" style={{ marginTop: "-5px" }}>
							{sellerName}
						</MSText>
						<MSText fontSize="14px" style={{ marginTop: "-5px" }}>
							{sellerEmail}
						</MSText>
					</Wrapper>
				</Section>
				<Divider />
				<Section>
					<MSText fontWeight="700" fontSize="14px">
						{text.paymentSummary}
					</MSText>
					<MSPaymentSummarySection
						price={price}
						escrowFee={fees}
						totalDue={price + fees}
					/>
				</Section>

				<MSButton
					title={orderIsJoined ? text.loginToTrackOrder : text.proceedToPayment}
					onClick={onConfirmPress}
					style={{ width: "100%" }}
				/>
				<Divider />
				<GuaranteeList />
				<PoweredBy>
					<Image src={PaymobImage} alt="Release" width={80} height={20} />

					<FooterNote>{text.securedByPaymob}</FooterNote>
				</PoweredBy>
			</ContentDiv>
		</CardWrapper>
	);
};

export default PreviewOrderCard;
