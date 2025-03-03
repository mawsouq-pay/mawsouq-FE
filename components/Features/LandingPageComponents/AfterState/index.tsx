import React from "react";
import {
	MainWrapper,
	ContentDiv,
	Wrapper,
	SwiperContainer,
} from "./AfterState.styles";
import { HeartHandshake, ShieldCheck, ShoppingBag } from "lucide-react";
import MSText from "@/components/Shared/MSText";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const afterStateData = [
	{
		icon: <ShieldCheck size={25} color="#01796f" />,
		title: "No More Second-Guessing Before Paying",
		description:
			"With Mawsouq, I don’t have to worry about losing my deposit anymore. I can confidently place orders knowing my money is secure until I receive what I paid for.",
	},
	{
		icon: <HeartHandshake size={25} color="#01796f" />,
		title: "Reliable Payments for Sellers",
		description:
			"Before Mawsouq, I struggled with buyers ghosting me after I started their order. Now, I receive secure deposits upfront, ensuring my work and time are valued.",
	},
	{
		icon: <ShoppingBag size={25} color="#01796f" />,
		title: "Buying and Selling on Social Media Feels Safer Than Ever",
		description:
			"Mawsouq changed the way I shop online. Instead of risky direct payments, I now use a system that guarantees both me and the seller are protected.",
	},
];

const AfterState = () => {
	return (
		<Wrapper>
			{/* <MSText
				fontSize="2rem"
				color="#222"
				fontWeight="600"
				mobileFontSize="1.2rem"
				// style={{ marginInlineStart: 30 }}
			>
				Why Users Trust Mawsouq
			</MSText> */}

			<SwiperContainer>
				<Swiper
					spaceBetween={16}
					slidesPerView={1}
					pagination={{ clickable: true }}
					modules={[Navigation, Pagination, Scrollbar, A11y]}
				>
					{afterStateData.map((item, index) => (
						<SwiperSlide key={index}>
							<ContentDiv>
								{item.icon}
								<MSText fontSize="1.2rem" fontWeight="600" color="#01796f">
									{item.title}
								</MSText>
								<MSText fontSize="1.2rem" color="#444">
									{item.description}
								</MSText>
							</ContentDiv>
						</SwiperSlide>
					))}
				</Swiper>
			</SwiperContainer>
		</Wrapper>
	);
};

export default AfterState;
