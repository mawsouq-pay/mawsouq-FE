import React from "react";
import { colors } from "@/constants/theme";
import { ShieldCheck } from "lucide-react";
import { Wrapper, Section, IconsRow, Feature } from "./SecurityBanner.styles";
import PaymobImage from "@/assets/images/paymob.png";
import Image from "next/image";
import MSText from "@/components/Shared/MSText";
import { useLocaleStore } from "@/store";

const SecurityBanner = () => {
	const { locale } = useLocaleStore();
	const securityText = locale === "ar" ? securityTextAr : securityTextEn;
	return (
		<Wrapper>
			<Section>
				<MSText fontSize="14px" fontWeight="500" color={colors.gray700}>
					{securityText.label}
				</MSText>
				<Image src={PaymobImage} alt="Paymob" width={90} height={15} />
			</Section>

			<IconsRow>
				<Feature>
					<ShieldCheck size={18} color={colors.green} />
					<MSText fontSize="14px" fontWeight="500" color={colors.gray700}>
						{securityText.secureCheckout}
					</MSText>
				</Feature>
			</IconsRow>
		</Wrapper>
	);
};

export default SecurityBanner;

export const securityTextEn = {
	label: "Payments processed by:",
	secureCheckout: "Secure Checkout",
};
export const securityTextAr = {
	label: "المدفوعات من خلال:",
	secureCheckout: "دفع آمن",
};
