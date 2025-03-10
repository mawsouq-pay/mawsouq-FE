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
} from "./PreviewOrderCard.styles";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import { ArrowDown } from "@/assets/icons";
import { CheckCircle } from "lucide-react";

const PreviewOrderCard = (props: PreviewOrderCardProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { transactionTitle, description, deliveryDate, onConfirmPress, price } =
		props;

	const handleProceedToPayment = () => {
		onConfirmPress();
	};

	const steps = [
		"Buyer sends payment",
		"Payment is secured in Mawsouq",
		"Seller fulfills order",
		"Buyer receives and inspects",
		"Complaint period",
		"Funds released to seller",
	];

	return (
		<Wrapper>
			<LeftPanel>
				<MawsouqBrand>
					<MSText fontSize="22px" fontWeight="bold" color="white">
						Mawsouq
					</MSText>
					<MSText fontSize="14px" color="white">
						Protecting Your Order
					</MSText>
				</MawsouqBrand>

				<ProgressBar>
					<BigArrow>
						<ArrowDown height={"900px"} width={"50px"} />
					</BigArrow>

					<div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
						{steps.map((step, index) => (
							<ProgressStep key={index} completed={index < 2}>
								<MSText fontSize="18px" color={index < 2 ? "black" : "white"}>
									{index + 1}. {step}
								</MSText>
								{index < 2 && (
									<CheckCircle
										style={{ color: "white", marginTop: 4 }}
										size={"14px"}
									/>
								)}{" "}
							</ProgressStep>
						))}
					</div>
				</ProgressBar>
			</LeftPanel>

			{/* Right Panel - Order Details */}
			<RightPanel>
				<OrderDetailsCard>
					<MSText fontSize="16px" fontWeight="600" style={{ marginBottom: 20 }}>
						{text.orderDetails}
					</MSText>
					<DetailRow>
						<MSText>{text.transactionTitle}:</MSText>
						<HighlightText>{transactionTitle}</HighlightText>
					</DetailRow>
					<DetailRow>
						<MSText>{text.price}</MSText>
						<HighlightText>{price} EGP</HighlightText>
					</DetailRow>
					<DetailRow>
						<MSText>{text.deliverDate}</MSText>
						<HighlightText>{deliveryDate}</HighlightText>
					</DetailRow>
					<DetailRow>
						<MSText>{text.description}</MSText>
						<MSText>{description}</MSText>
					</DetailRow>
				</OrderDetailsCard>

				<OrderDetailsCard>
					<MSText fontSize="16px" fontWeight="600" style={{ marginBottom: 20 }}>
						{text.sellerDetails}
					</MSText>
					<DetailRow>
						<MSText>{text.fullName}:</MSText>
						<HighlightText>Ahmed Mohamed</HighlightText>
					</DetailRow>
					<DetailRow>
						<MSText>{text.email}</MSText>
						<MSText>ahmedmohamed@gmail.com</MSText>
					</DetailRow>
				</OrderDetailsCard>

				<MSButton
					title={text.proceedToPayment}
					onClick={handleProceedToPayment}
					style={{ marginTop: 40, width: "200px" }}
				/>
			</RightPanel>
		</Wrapper>
	);
};

export default PreviewOrderCard;
