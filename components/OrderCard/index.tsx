import MSText from "../MSText";
import {
	FlexEnd,
	MainWrapper,
	MobileCardContent,
	MobileCardHeader,
	MobileCardWrapper,
	StatusBadge,
	StatusDot,
} from "./OrderCard.style";
import { HorizontalCardProps } from "./types";
import { textTr } from "@/constants/locales";
import { useLocaleStore } from "@/store/LocaleStore";
import { colors } from "@/constants/theme";
import useCustomBreakpoint from "@/helpers/screenSizes";
import { Grid2 } from "@mui/material";
import { orderStatusObject } from "@/constants";
import { DueDateIcon } from "@/assets/icons";
import OrderListItem from "../OrderListItem";

const OrderCard = (props: HorizontalCardProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { isMobile } = useCustomBreakpoint();
	const { orderNo, itemName, amount } = props;
	const status = "DELIVERED";
	const orderStatusInfo = orderStatusObject[status];

	const dataPairs = [
		{ title: text.orderNo, value: orderNo, color: colors.blue },
		{ title: text.item, value: itemName, color: colors.black },
		{ title: text.amount, value: `${amount} EGP`, color: colors.black },
		{
			title: text.status,
			value: status,
			color: orderStatusInfo.backgroundColor,
		},
	];

	const renderTitle = (titleName: string) => (
		<MSText color={colors.gray} fontSize="16px">
			{titleName}
		</MSText>
	);

	const renderValue = (
		value: string,
		color: string,
		size?: string,
		weight?: string,
		currencyText?: string
	) => {
		const fontSize = size || "16px";
		const fontWeight = weight || "normal";

		return (
			<MSText
				color={color}
				fontSize={fontSize}
				style={{ display: "inline-flex", alignItems: "baseline" }}
				fontWeight={fontWeight}
			>
				{value}{" "}
				{currencyText && (
					<span
						style={{
							fontSize: "14px",
							marginLeft: "4px",
							lineHeight: "1",
						}}
					>
						{currencyText}
					</span>
				)}
			</MSText>
		);
	};
	return (
		<MainWrapper>
			{!isMobile ? (
				// dataPairs.map((item) => (
				// 	<Grid2
				// 		container
				// 		direction="column"
				// 		sx={{ gap: 1 }}
				// 		key={item.title}
				// 	>
				// 		{renderTitle(item.title)}
				// 		{item.title === text.status ? (
				// 			<StatusBadge backgroundColor={orderStatusInfo.backgroundColor}>
				// 				<StatusDot color="#90EE90" />
				// 				{renderValue(
				// 					orderStatusInfo.text,
				// 					colors.lightBlack,
				// 					"14px",
				// 					"normal"
				// 				)}
				// 			</StatusBadge>
				// 		) : (
				// 			renderValue(item.value, item.color)
				// 		)}
				// 	</Grid2>
				// ))
				<OrderListItem />
			) : (
				<MobileCardWrapper>
					<MobileCardHeader>
						{renderValue(`${amount}`, colors.semiBlack, "24px", "bold", "EGP")}{" "}
						<StatusBadge backgroundColor={orderStatusInfo.backgroundColor}>
							<StatusDot color="#90EE90" />
							{renderValue(
								orderStatusInfo.text,
								colors.lightBlack,
								"14px",
								"normal"
							)}
						</StatusBadge>
					</MobileCardHeader>
					<MobileCardContent>
						{renderValue("S1234", colors.gray, "14px", "normal")}{" "}
						{renderValue("Portrait glasses", colors.black, "16px", "600")}
					</MobileCardContent>
					<FlexEnd>
						<DueDateIcon />
						{renderValue("December 12, 2024", colors.gray, "14px", "normal")}
					</FlexEnd>
				</MobileCardWrapper>
			)}
		</MainWrapper>
	);
};

export default OrderCard;
