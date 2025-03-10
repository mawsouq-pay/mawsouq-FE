import React from "react";
import MSText from "@/components/Shared/MSText";
import MSButton from "@/components/Shared/MSButton";
import {
	Wrapper,
	LeftPanel,
	RightPanel,
	OrderDetailsCard,
	DetailRow,
	HighlightText,
	ProgressBar,
	ProgressStep,
	MawsouqBrand,
	BigArrow,
	ButtonDiv,
} from "./PreviewOrderCard.styles";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import { ArrowDown } from "@/assets/icons";
import { CheckCircle } from "lucide-react";
import { colors } from "@/constants/theme";

const PreviewOrderCard = (props: PreviewOrderCardProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { transactionTitle, description, deliveryDate, onConfirmPress, price } =
		props;

	const handleProceedToPayment = () => {
		onConfirmPress();
	};

	const steps = [
		text.buyerSendPayment,
		text.paymentIsSecured,
		text.sellerDeliversOrder,
		text.buyerReceives,
		text.paymentReleased,
	];

	return (
		<Wrapper>
			<LeftPanel>
				<MawsouqBrand>
					<MSText fontSize="24px" fontWeight="bold" color="white">
						Mawsouq
					</MSText>
					<MSText fontSize="14px" color="white">
						Protecting Your Order
					</MSText>
				</MawsouqBrand>

				<ProgressBar>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 10,
						}}
					>
						{steps.map((step, index) => (
							<ProgressStep key={index} completed={index < 2}>
								{index > 1 ? (
									<MSText fontSize="18px" color={index < 2 ? "black" : "white"}>
										{index + 1}. {step}
									</MSText>
								) : (
									<div
										style={{
											backgroundColor: "#222",
											display: "flex",
											flexDirection: "row",
											gap: 8,
											padding: "0px 2px",
										}}
									>
										<MSText fontSize="18px" color={"white"}>
											{index + 1}. {step}
										</MSText>
										<CheckCircle
											style={{ color: "white", marginTop: 4 }}
											size={"14px"}
										/>
									</div>
								)}
							</ProgressStep>
						))}
					</div>
				</ProgressBar>
				<ButtonDiv>
					<MSButton
						title={text.proceedToPayment}
						onClick={handleProceedToPayment}
						style={{
							position: "relative",
							bottom: 0,
							width: "200px",
							backgroundColor: ` ${colors.white}`,
						}}
						fontColor={colors.black}
					/>
				</ButtonDiv>
			</LeftPanel>

			<RightPanel>
				<OrderDetailsCard>
					<MSText fontSize="14px" fontWeight="600" style={{ marginBottom: 20 }}>
						{text.orderDetails}
					</MSText>
					<DetailRow>
						<MSText fontSize="14px" fontWeight="600">
							{text.transactionTitle}:
						</MSText>
						<MSText fontSize="14px">{transactionTitle}</MSText>
					</DetailRow>
					<DetailRow>
						<MSText fontSize="14px" fontWeight="600">
							{text.price}
						</MSText>
						<MSText fontSize="14px">{price} EGP</MSText>
					</DetailRow>
					<DetailRow>
						<MSText fontSize="14px" fontWeight="600">
							{text.deliverDate}
						</MSText>
						<MSText fontSize="14px">{deliveryDate}</MSText>
					</DetailRow>
					<DetailRow>
						<MSText fontSize="14px" fontWeight="600">
							{text.description}
						</MSText>
						<MSText fontSize="14px">{description}</MSText>
					</DetailRow>
				</OrderDetailsCard>

				<OrderDetailsCard>
					<MSText fontSize="14px" fontWeight="600" style={{ marginBottom: 20 }}>
						{text.sellerDetails}
					</MSText>
					<DetailRow>
						<MSText fontSize="14px" fontWeight="600">
							{text.fullName}:
						</MSText>
						<MSText fontSize="14px">Ahmed Mohamed</MSText>
					</DetailRow>
					<DetailRow>
						<MSText fontSize="14px" fontWeight="600">
							{text.email}
						</MSText>
						<MSText fontSize="14px">ahmedmohamed@gmail.com</MSText>
					</DetailRow>
				</OrderDetailsCard>
				<MSButton
					title={text.proceedToPayment}
					onClick={handleProceedToPayment}
					style={{ position: "relative", bottom: 0, width: "200px" }}
				/>
			</RightPanel>
		</Wrapper>
	);
};

export default PreviewOrderCard;
