import React from "react";
import { MainContainer } from "./PaymobFooter.styles";
import Image from "next/image";
import PaymobImage from "@/assets/images/paymobImage.png";
import { Divider } from "@mui/material";
import MSText from "@/components/Shared/MSText";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";

const PaymobFooter = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	return (
		<MainContainer>
			<Image src={PaymobImage} alt="paymob image" width={150} height={50} />
			<div
				style={{
					display: "flex",
					borderLeft: "1px solid #222",
					height: "60px",
					alignItems: "center",
					padding: 20,
				}}
			>
				<MSText fontWeight="bold" color="#222">
					{text.paymobInfo}
				</MSText>
			</div>
		</MainContainer>
	);
};

export default PaymobFooter;
