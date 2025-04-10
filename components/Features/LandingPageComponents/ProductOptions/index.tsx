import React from "react";
import { Utensils, Paintbrush, ShoppingBag, Gift, Shirt } from "lucide-react";
import MSText from "@/components/Shared/MSText";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import {
	Wrapper,
	MainWrapper,
	SwiperContainer,
	ContentDiv,
	MainButton,
} from "./ProductOptions.style";
import { useMediaQuery } from "@mui/material";
import {
	CateringIcon,
	CraftIcon,
	DoodleIcon,
	DoodleIconOp,
	ElectronicsIcon,
	PaintingIcon,
	RandomIcon,
} from "@/assets/icons";
import { useAuthStore, useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import { colors } from "@/constants/theme";
import { clientRoutes } from "@/routes";
import router from "next/router";
import MSButton from "@/components/Shared/MSButton";
const productOptions = [
	{
		icon: <CateringIcon />,
		title: "Catering Services",
		description: "Secure your catering payments and avoid payment risks.",
	},
	{
		icon: <PaintingIcon />,
		title: "Custom Art",
		description: "Pay safely for custom artwork—funds are held until delivery.",
	},
	{
		icon: <CraftIcon color="#01796f" />,
		title: "Handmade Crafts",
		description: "Shop handmade goods with confidence—payment is protected.",
	},
	{
		icon: <ElectronicsIcon color="#01796f" />,
		title: "Electronics",
		description: "Buy electronics securely—funds are released upon delivery.",
	},
	{
		icon: <RandomIcon color="#01796f" />,
		title: "Buy & Sell Anything",
		description: "Trade safely—Mawsouq holds payments until order fulfillment.",
	},
];

const productOptionsAR = [
	{
		icon: <CateringIcon />,
		title: "خدمات الطعام",
		description: "أمّن دفعاتك عند طلب الطعام وتجنب المخاطر.",
	},
	{
		icon: <PaintingIcon />,
		title: "فن مخصص",
		description:
			"ادفع بأمان للأعمال الفنية المخصصة—يتم الاحتفاظ بالمبلغ حتى التسليم.",
	},
	{
		icon: <CraftIcon color="#01796f" />,
		title: "منتجات يدوية",
		description: "تسوق المنتجات اليدوية بثقة—دفعتك محمية.",
	},
	{
		icon: <ElectronicsIcon color="#01796f" />,
		title: "الإلكترونيات",
		description:
			"اشترِ الأجهزة الإلكترونية بأمان—يتم الإفراج عن المبلغ عند التسليم.",
	},
	{
		icon: <RandomIcon color="#01796f" />,
		title: "بيع وشراء أي شيء",
		description: "تداول بأمان—ماوسوق يحتفظ بالدفعات حتى إتمام الطلب.",
	},
];

const ProductOptions = () => {
	const isMobile = useMediaQuery("(max-width: 925px)");
	const { locale } = useLocaleStore();
	const options = locale == "ar" ? productOptionsAR : productOptions;
	const text = textTr(locale);
	const { isLoggedIn } = useAuthStore();
	const isArabic = locale == "ar";

	return (
		<Wrapper>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					marginTop: 20,
					alignItems: "center",
					gap: 18,
				}}
			>
				<DoodleIcon
					style={{ transform: isArabic ? "rotate(90deg)" : "none" }}
				/>
				<MSText
					fontWeight="600"
					fontSize="26px"
					mobileFontSize="18px"
					color={colors.darkGreen}
				>
					{text.mawsouqForAllKindsOfOrders}
				</MSText>
				<DoodleIconOp
					style={{
						transform: isArabic ? "rotate(180deg)" : "none",
					}}
				/>
			</div>

			<MSButton
				onClick={() => {
					if (isLoggedIn) {
						router.push(clientRoutes.startTransaction);
					} else {
						router.push(clientRoutes.login);
					}
				}}
				title={text.startTransaction}
			/>
			{isMobile ? (
				<SwiperContainer>
					<Swiper
						spaceBetween={16}
						slidesPerView={1}
						pagination={{ clickable: true }}
						modules={[Navigation, Pagination, Scrollbar, A11y]}
					>
						{options.map((item, index) => (
							<SwiperSlide key={index}>
								<ContentDiv>
									{item.icon}
									<MSText
										fontSize="1.2rem"
										mobileFontSize="16px"
										fontWeight="600"
										color="#01796f"
									>
										{item.title}
									</MSText>
									<MSText fontSize="16px" color="#444">
										{item.description}
									</MSText>
								</ContentDiv>
							</SwiperSlide>
						))}
					</Swiper>
				</SwiperContainer>
			) : (
				<MainWrapper>
					{options.map((item, index) => (
						<ContentDiv key={index}>
							{item.icon}
							<MSText
								fontSize="1.2rem"
								mobileFontSize="16px"
								fontWeight="600"
								color="#01796f"
							>
								{item.title}
							</MSText>
							<MSText fontSize="16px" color="#444">
								{item.description}
							</MSText>
						</ContentDiv>
					))}
				</MainWrapper>
			)}
		</Wrapper>
	);
};

export default ProductOptions;
