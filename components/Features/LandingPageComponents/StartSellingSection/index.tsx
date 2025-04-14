import React, { useState } from "react";
import { Wrapper, FormBox, Row } from "./StartSellingSection.styles";
import MSText from "@/components/Shared/MSText";
import MSButton from "@/components/Shared/MSButton";
import MSTextField from "@/components/Shared/MSTextField";
import { useAuthStore, useLocaleStore } from "@/store";
import { clientRoutes } from "@/routes";
import { useRouter } from "next/router";
import { startSellingAr, startSellingEn } from "./types";
import { colors } from "@/constants/theme";
const StartSellingSection = () => {
	const { locale } = useLocaleStore();
	const [productName, setProductName] = useState("");
	const [price, setPrice] = useState("");

	const { isLoggedIn } = useAuthStore();
	const router = useRouter();
	const onCtaPress = () => {
		if (!isLoggedIn) {
			router.push(clientRoutes.register);
			return;
		}
		router.push(clientRoutes.startTransaction);
	};
	const startSelling = locale == "en" ? startSellingEn : startSellingAr;

	return (
		<Wrapper>
			<MSText
				fontSize="28px"
				fontWeight="700"
				color={colors.black}
				mobileFontSize="20px"
				style={{ marginBottom: 8 }}
			>
				{startSelling.title}
			</MSText>

			<MSText
				fontSize="16px"
				fontWeight="400"
				color={colors.gray700}
				style={{ marginBottom: 32 }}
				mobileFontSize="14px"
			>
				{startSelling.description}
			</MSText>

			<FormBox>
				<MSTextField
					placeholder={startSelling.placeholderProduct}
					value={productName}
					onChange={(e) => setProductName(e.target.value)}
				/>

				<Row>
					<MSTextField
						placeholder={startSelling.placeholderPrice}
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						type="number"
					/>

					<MSButton
						title={startSelling.cta}
						onClick={onCtaPress}
						style={{ minWidth: "160px", height: "48px" }}
					/>
				</Row>
			</FormBox>
		</Wrapper>
	);
};

export default StartSellingSection;
