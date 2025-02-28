import React from "react";
import {
	BenefitsContainer,
	BenefitsGrid,
	BenefitItem,
	BenefitIcon,
	BenefitTitle,
	BenefitDescription,
} from "./MawsouqBenefits.styles";

import { ShieldCheck } from "lucide-react";
import { ListOrdered } from "lucide-react";
import { Vault } from "lucide-react";
import { Loader } from "lucide-react";
import MSText from "@/components/Shared/MSText";
import ScribbledCircleText from "../ScribbledCircleText";
const MawsouqBenefits = () => {
	return (
		<BenefitsContainer>
			<MSText
				color="#222"
				fontSize="2rem"
				fontWeight="bold"
				style={{ paddingLeft: "20px", paddingRight: "20px" }}
			>
				Benefits of using mawsouq.
			</MSText>
			<MSText
				color="#222"
				fontSize="2rem"
				fontWeight="bold"
				style={{ paddingLeft: "20px", paddingRight: "20px" }}
			>
				How will it help both buyers and sellers?
			</MSText>
			<BenefitsGrid>
				{/* Benefit 1 */}
				<BenefitItem>
					<BenefitIcon>
						<ShieldCheck size={30} color={"#b3fcdf"} />
					</BenefitIcon>
					<BenefitTitle>Safe Payments</BenefitTitle>
					<BenefitDescription>
						Your money is secured until the order is delivered. No more scams!
					</BenefitDescription>
				</BenefitItem>

				{/* Benefit 2 */}
				<BenefitItem>
					<BenefitIcon>
						<ListOrdered size={30} color={"#b3fcdf"} />
					</BenefitIcon>
					<BenefitTitle>Easy Process</BenefitTitle>
					<BenefitDescription>
						Simple steps to start a transaction and track your order.
					</BenefitDescription>
				</BenefitItem>

				{/* Benefit 3 */}
				<BenefitItem>
					<BenefitIcon>
						<Vault size={30} color={"#b3fcdf"} />
					</BenefitIcon>
					<BenefitTitle>Buyer Protection</BenefitTitle>
					<BenefitDescription>
						If something goes wrong, your deposit is safe until resolved.
					</BenefitDescription>
				</BenefitItem>

				{/* Benefit 4 */}
				<BenefitItem>
					<BenefitIcon>
						<Loader size={30} color={"#b3fcdf"} />
					</BenefitIcon>
					<BenefitTitle>Trusted Sellers</BenefitTitle>
					<BenefitDescription>
						Only verified sellers receive payments, reducing fraud.
					</BenefitDescription>
				</BenefitItem>
			</BenefitsGrid>
		</BenefitsContainer>
	);
};

export default MawsouqBenefits;
