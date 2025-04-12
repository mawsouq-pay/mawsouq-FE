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
				<MSText style={{ fontSize: 13, marginBottom: 10 }}>
					{text.orderPrevConfirmationDescription}
				</MSText>
				<RowDiv>
					<ShoppingCart />
					<MSText style={{ fontSize: 13 }}>{text.youAreTheBuyer}</MSText>
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
							<MSText fontWeight="600">{text.orderSummary}</MSText>
							<MSText>{price} EGP</MSText>
						</SummaryRow>

						<MSText>{transactionTitle}</MSText>

						<MSText>{deliveryDate}</MSText>
						<MSText>{description}</MSText>
					</Wrapper>
				</Section>
				<Divider />

				<Section>
					<Wrapper>
						<SummaryRow>
							<MSText fontWeight="600">{text.seller}</MSText>
						</SummaryRow>
						<MSText>{sellerName}</MSText>
						<MSText>{sellerEmail}</MSText>
					</Wrapper>
				</Section>

				<MSButton
					title={orderIsJoined ? text.loginToTrackOrder : text.proceedToPayment}
					onClick={onConfirmPress}
					style={{ width: "100%" }}
				/>
				<Divider />
				<GuaranteeList />
				<PoweredBy>
					<Image src={PaymobImage} alt="Release" width={100} height={30} />

					<FooterNote>{text.securedByPaymob}</FooterNote>
				</PoweredBy>
			</ContentDiv>
		</CardWrapper>
	);
};

export default PreviewOrderCard;
