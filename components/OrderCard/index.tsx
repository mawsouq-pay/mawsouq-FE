import MSText from "../MSText";
import {
	FlexEnd,
	MainWrapper,
	MobileCardContent,
	MobileCardHeader,
	MobileCardWrapper,
	StatusBadge,
} from "./OrderCard.style";
import { HorizontalCardProps } from "./types";
import { textTr } from "@/constants/locales";
import { useLocaleStore } from "@/store/LocaleStore";
import { colors } from "@/constants/theme";
import useCustomBreakpoint from "@/helpers/screenSizes";
import { Grid2 } from "@mui/material";
import { orderStatusObject } from "@/constants";
import { DueDateIcon } from "@/assets/icons";

const OrderCard = (props: HorizontalCardProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { isMobile } = useCustomBreakpoint();
	const { orderNo, itemName, amount } = props;
	const status = "DELIVERED";
	const orderStatusInfo = orderStatusObject[status];
	console.log(orderStatusInfo, "HEY");
	const dataPairs = [
		{ title: text.orderNo, value: orderNo, color: colors.blue },
		{ title: text.item, value: itemName, color: colors.black },
		{ title: text.amount, value: amount, color: colors.black },
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

	const renderValue = (value: string, color: string, size?: string) => {
		const fontSize = size || "16px";

		const [amount, currency] = value.split(" ");
		return (
			<MSText
				color={color}
				fontSize={fontSize}
				style={{ display: "inline-flex", alignItems: "baseline" }}
			>
				{amount}{" "}
				<span style={{ fontSize: "14px", marginLeft: "4px", lineHeight: "1" }}>
					{currency}
				</span>
			</MSText>
		);
	};

	return (
		<MainWrapper>
			<Grid2
				container
				direction={isMobile ? "column" : "row"}
				sx={{
					justifyContent: "space-between",
					alignItems: isMobile ? "flex-start" : "center",
					flex: 1,
				}}
				spacing={isMobile ? 4 : 16}
			>
				{!isMobile ? (
					dataPairs.map((item) => (
						<Grid2
							container
							direction="column"
							sx={{ gap: 1 }}
							key={item.title}
						>
							{renderTitle(item.title)}
							{renderValue(item.value, item.color)}
						</Grid2>
					))
				) : (
					<MobileCardWrapper>
						<MobileCardHeader>
							{renderValue(`${amount} EGP`, colors.semiBlack, "20px")}
							<StatusBadge backgroundColor={orderStatusInfo.backgroundColor}>
								{renderValue(orderStatusInfo.text, colors.semiBlack, "14px")}
							</StatusBadge>
						</MobileCardHeader>
						<MobileCardContent>
							{renderValue("S1234", colors.gray, "14px")}
							{renderValue("Portrait glasses", colors.black)}
						</MobileCardContent>
						<FlexEnd>
							<DueDateIcon />
							{renderValue("12/2", colors.gray, "14px")}
						</FlexEnd>
					</MobileCardWrapper>
				)}
			</Grid2>
		</MainWrapper>
	);
};

export default OrderCard;
