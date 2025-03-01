import React from "react";
import {
	MainContainer,
	ProofGrid,
	ProofRow,
	ProofCaption,
	ProofImage,
} from "./SecureTransactions.styles";
import Image from "next/image";
import Proof1 from "@/assets/images/proof1.png";

import MSText from "@/components/Shared/MSText";
import MSButton from "@/components/Shared/MSButton";
import { useLocaleStore } from "@/store/LocaleStore";
import { secureTransactionsText } from "./types";

const SecureTransactions = () => {
	const { locale } = useLocaleStore();
	const text = secureTransactionsText[locale];

	return (
		<MainContainer>
			<MSText fontSize="2.5rem" fontWeight="bold" color="#222">
				{text.title}
			</MSText>
			<MSButton
				title={text.buttonText}
				style={{
					backgroundColor: "transparent",
					border: "2px solid #222",
					marginTop: 10,
				}}
				fontColor="#222"
			/>
			<ProofGrid>
				<ProofRow>
					<ProofImage>
						<Image src={Proof1} alt="Proof of Scam" width={350} height={120} />
					</ProofImage>
					<ProofImage>
						<Image src={Proof1} alt="Proof of Scam" width={350} height={120} />
					</ProofImage>
				</ProofRow>

				<ProofRow center>
					<ProofImage>
						<Image src={Proof1} alt="Proof of Scam" width={350} height={120} />
					</ProofImage>
				</ProofRow>

				<ProofCaption>{text.proofCaption}</ProofCaption>
			</ProofGrid>
		</MainContainer>
	);
};

export default SecureTransactions;
