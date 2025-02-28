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
const SecureTransactions = () => {
	return (
		<MainContainer>
			<MSText fontSize="2.5rem" fontWeight="bold" color="#222">
				Secure Every Transaction with Confidence.
			</MSText>
			<MSButton
				title={"Start transaction"}
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
						<Image
							src={Proof1}
							alt="Secure Deposits"
							width={350}
							height={120}
						/>
					</ProofImage>
					<ProofImage>
						<Image
							src={Proof1}
							alt="Secure Deposits"
							width={350}
							height={120}
						/>
					</ProofImage>{" "}
				</ProofRow>

				<ProofRow center>
					<ProofImage>
						<Image
							src={Proof1}
							alt="Secure Deposits"
							width={350}
							height={120}
						/>
					</ProofImage>{" "}
				</ProofRow>

				<ProofCaption>...and many more.</ProofCaption>
			</ProofGrid>
		</MainContainer>
	);
};

export default SecureTransactions;
