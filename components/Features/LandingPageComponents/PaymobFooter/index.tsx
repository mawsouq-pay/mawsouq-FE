import React from "react";
import { MainContainer } from "./PaymobFooter.styles";
import Image from "next/image";
import PaymobImage from "@/assets/images/paymob.png";
import { Divider } from "@mui/material";
import MSText from "@/components/Shared/MSText";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import { XIcon } from "lucide-react";
import MSLogo from "@/components/Shared/MSLogo";
import MawsouqLogo from "@/assets/images/Logo.png";

const PaymobFooter = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	return (
		<MainContainer>
			<Image src={PaymobImage} alt="paymob image" width={200} height={50} />
			<XIcon size={50} style={{ padding: 0 }} />
			<Image
				src={MawsouqLogo}
				alt="paymob image"
				width={200}
				height={50}
				// width={150}
				// height={50}
			/>
			<div
				style={{
					display: "flex",
					borderLeft: "1px solid #222",
					height: "60px",
					alignItems: "center",
					padding: 20,
					marginInlineStart: 20,
				}}
			>
				<MSText fontWeight="bold" color="#222" mobileFontSize="14px">
					{text.paymobInfo}
				</MSText>
			</div>
		</MainContainer>
	);
};

export default PaymobFooter;
