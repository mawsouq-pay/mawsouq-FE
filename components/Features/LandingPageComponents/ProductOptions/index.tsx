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
	DoodleIcon,
	DoodleIconOp,
	PaintingIcon,
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
		description:
			"With Mawsouq, secure your catering payments and ensure smooth transactions between you and the service provider.",
	},
	{
		icon: <PaintingIcon />,
		title: "Custom Art & Paintings",
		description:
			"Mawsouq helps artists and buyers secure transactions, ensuring payments are protected until the artwork is delivered.",
	},
	{
		icon: <ShoppingBag size={25} color="#01796f" />,
		title: "Handmade Crafts",
		description:
			"Shop for handmade crafts with confidence—Mawsouq ensures your money is safe until you receive your custom order.",
	},
	{
		icon: <Gift size={25} color="#01796f" />,
		title: "Customized Gifts",
		description:
			"Order personalized gifts without worries—Mawsouq secures your payment until your custom gift is delivered as requested.",
	},
	{
		icon: <Shirt size={25} color="#01796f" />,
		title: "Custom Apparel & Accessories",
		description:
			"Mawsouq ensures your custom fashion orders are fulfilled properly by holding payments securely until delivery.",
	},
];
const productOptionsAR = [
	{
		icon: <CateringIcon />,
		title: "خدمات الطعام",
		description:
			"مع ماوسوق، احمِ دفعاتك عند طلب الطعام وتأكد من إتمام المعاملة بسهولة.",
	},
	{
		icon: <PaintingIcon />,
		title: "اللوحات والفن المخصص",
		description:
			"يساعد ماوسوق الفنانين والمشترين على تأمين المدفوعات حتى استلام العمل الفني.",
	},
	{
		icon: <ShoppingBag size={25} color="#01796f" />,
		title: "منتجات يدوية",
		description:
			"تسوق المنتجات اليدوية بثقة—ماوسوق يحفظ أموالك حتى تستلم طلبك.",
	},
	{
		icon: <Gift size={25} color="#01796f" />,
		title: "هدايا مخصصة",
		description:
			"اطلب هدايا مخصصة بدون قلق—ماوسوق يضمن أموالك حتى وصول الهدية كما طلبتها.",
	},
	{
		icon: <Shirt size={25} color="#01796f" />,
		title: "ملابس وإكسسوارات مخصصة",
		description:
			"ماوسوق يؤمن دفعاتك للطلبات المخصصة حتى يتم تسليمها كما هو متفق عليه.",
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
					mobileFontSize="14px"
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
										fontSize="1rem"
										mobileFontSize="16px"
										fontWeight="600"
										color="#01796f"
									>
										{item.title}
									</MSText>
									<MSText fontSize="14px" color="#444">
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
								fontSize="1rem"
								mobileFontSize="16px"
								fontWeight="600"
								color="#01796f"
							>
								{item.title}
							</MSText>
							<MSText fontSize="14px" color="#444">
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
