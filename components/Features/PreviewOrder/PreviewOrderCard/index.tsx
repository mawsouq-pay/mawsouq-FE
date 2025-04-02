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
} from "./PreviewOrderCard.styles";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import { MSLogo } from "@/assets/icons";
import { Minus, Package, Check } from "lucide-react";
import MSText from "@/components/Shared/MSText";
import { colors } from "@/constants/theme";
import MSButton from "@/components/Shared/MSButton";
import PaymobImage from "@/assets/images/paymobImage.png";
import Image from "next/image";

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
		{ icon: <Minus size={28} />, label: text.holdMoney },
		{ icon: <Package size={26} />, label: text.receive },
		{ icon: <Check size={28} />, label: text.release },
	];

	return (
		<CardWrapper>
			<Logo>
				<MSLogo />
			</Logo>

			<ContentDiv>
				<MSText
					fontWeight="600"
					style={{ textAlign: "center", fontSize: 13, marginBottom: 10 }}
				>
					{text.orderPrevConfirmationDescription}
				</MSText>
				<StepsBar>
					{steps.map((step, index) => (
						<React.Fragment key={index}>
							<Step>
								<StepIcon>{step.icon}</StepIcon>
								<MSText
									fontWeight="600"
									style={{ textAlign: "center", fontSize: 12 }}
									color={colors.semiBlack}
								>
									{step.label}
								</MSText>
							</Step>
							{index < steps.length - 1 && <LineBetween />}
						</React.Fragment>
					))}
				</StepsBar>

				<Section>
					<Wrapper>
						<MSText fontWeight="600" style={{ marginBottom: 10 }}>
							{text.orderSummary}
						</MSText>
						<SummaryRow>
							<MSText>{transactionTitle}</MSText>
							<MSText>{price} EGP</MSText>
						</SummaryRow>

						<MSText>{deliveryDate}</MSText>
						<MSText>{description}</MSText>
					</Wrapper>
				</Section>
				<Section>
					<Wrapper>
						<MSText fontWeight="600" style={{ marginBottom: 10 }}>
							{text.seller}
						</MSText>
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

				<PoweredBy>
					<Image src={PaymobImage} alt="Release" width={100} height={30} />

					<FooterNote>{text.securedByPaymob}</FooterNote>
				</PoweredBy>
			</ContentDiv>
		</CardWrapper>
	);
};

export default PreviewOrderCard;
